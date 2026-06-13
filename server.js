import express from 'express';
import { neon } from '@neondatabase/serverless';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getNeonConnectionString() {
  if (process.env.NEON_CONNECTION_STRING) return process.env.NEON_CONNECTION_STRING;
  const cfgPath = path.join(__dirname, '..', '..', '_System', 'db_config.md');
  try {
    const text = fs.readFileSync(cfgPath, 'utf8');
    const match = text.match(/postgresql[s]?:\/\/[^\s'"]+/);
    if (!match) throw new Error('No connection string found in db_config.md');
    return match[0];
  } catch (e) {
    throw new Error('Cannot read DB connection string: ' + e.message);
  }
}

const PORT = process.env.PORT || 3000;
const APP_PIN = process.env.APP_PIN || '102938';
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function loadKnowledgeBase() {
  const sql = neon(getNeonConnectionString());
  return await sql`SELECT ticket_type, intake_channel, who_contacts_it, volume_per_day, steps, sla_minutes, escalation_trigger, escalation_contact, systems_needed, definition_of_done, common_mistakes, notes FROM ticket_knowledge ORDER BY ticket_type`;
}

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/auth', (req, res) => {
  if (req.body.pin === APP_PIN) {
    res.json({ ok: true });
  } else {
    res.status(401).json({ ok: false, error: 'Incorrect PIN' });
  }
});

app.get('/knowledge', async (req, res) => {
  const { pin } = req.query;
  if (pin !== APP_PIN) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const kb = await loadKnowledgeBase();
    res.json({ kb });
  } catch (err) {
    console.error('Knowledge error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/chat', async (req, res) => {
  const { message, pin, history } = req.body;
  if (pin !== APP_PIN) return res.status(401).json({ error: 'Unauthorized' });
  if (!message || !message.trim()) return res.status(400).json({ error: 'No message provided' });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set.' });
  try {
    const kb = await loadKnowledgeBase();
    let historyText = '';
    if (history && Array.isArray(history) && history.length > 0) {
      const recent = history.slice(-4);
      historyText = '\n\nPREVIOUS CONVERSATION:\n' + recent.map(h =>
        (h.role === 'user' ? 'Agent: ' : 'Assistant: ') + h.content
      ).join('\n') + '\n';
    }
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: 'You are a VetRad IT support knowledge assistant helping IT Service Desk agents handle tickets correctly.\n\nUsing ONLY the knowledge base below, answer the question with specific step-by-step instructions.\n- If multiple ticket types are relevant, address each.\n- If the answer is not in the KB, say so - do not guess.\n- Be concise. Use numbered lists for steps. Mention which systems are involved.' +
          (historyText ? '\n- A previous conversation is provided for context; use it for follow-up questions.' : '') +
          '\n\nKNOWLEDGE BASE:\n' + JSON.stringify(kb, null, 2) +
          historyText +
          '\n\nUSER QUESTION:\n' + message
      }]
    });
    res.json({ answer: response.content[0].text });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log('VetRad KB running at http://localhost:' + PORT));
