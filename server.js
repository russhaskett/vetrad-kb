import express from 'express';
import { neon } from '@neondatabase/serverless';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- Config ---
function getNeonConnectionString() {
  // Allow env override
  if (process.env.NEON_CONNECTION_STRING) return process.env.NEON_CONNECTION_STRING;
  // Read from db_config.md (two levels up: App/vetrad-kb -> App -> Vet Rad Project -> _System)
  const cfgPath = path.join(__dirname, '..', '..', '_System', 'db_config.md');
  try {
    const text = fs.readFileSync(cfgPath, 'utf8');
    const match = text.match(/postgresql[s]?:\/\/[^\s'"]+/);
    if (!match) throw new Error('No connection string found in db_config.md');
    return match[0];
  } catch (e) {
    throw new Error(`Cannot read DB connection string: ${e.message}`);
  }
}

const PORT = process.env.PORT || 3000;
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// --- DB ---
async function loadKnowledgeBase() {
  const sql = neon(getNeonConnectionString());
  const rows = await sql`
    SELECT ticket_type, intake_channel, who_contacts_it, volume_per_day,
           steps, sla_minutes, escalation_trigger, escalation_contact,
           systems_needed, definition_of_done, common_mistakes, notes
    FROM ticket_knowledge
    ORDER BY ticket_type
  `;
  return rows;
}

// --- Express ---
const app = express();
app.use(express.json());

// Serve the single-page UI
app.get('/', (req, res) => {
  res.send(HTML);
});

// Chat endpoint
app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'No message provided' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set. Add it to your .env file.' });
  }

  try {
    const kb = await loadKnowledgeBase();
    const kbText = JSON.stringify(kb, null, 2);

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are a VetRad IT support knowledge assistant. Your job is to help IT Service Desk agents handle VetRad tickets correctly.

Using ONLY the knowledge base below, answer the user's question with specific, actionable step-by-step instructions.
- If multiple ticket types are relevant, address each.
- If the answer is not in the knowledge base, say so clearly — do not guess.
- Be concise and practical. Format steps as a numbered list when appropriate.
- Always mention which systems are involved.

KNOWLEDGE BASE:
${kbText}

USER QUESTION:
${message}`
        }
      ]
    });

    const answer = response.content[0].text;
    res.json({ answer });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`VetRad KB running at http://localhost:${PORT}`);
});

// --- Inline HTML ---
const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VetRad IT Knowledge Base</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #f5f5f5;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    header {
      background: #1a3a5c;
      color: white;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    header h1 { font-size: 18px; font-weight: 600; }
    header span { font-size: 13px; opacity: 0.7; }
    #chat {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .msg {
      max-width: 720px;
      padding: 14px 18px;
      border-radius: 10px;
      line-height: 1.6;
      font-size: 14px;
      white-space: pre-wrap;
    }
    .msg.user {
      background: #1a3a5c;
      color: white;
      align-self: flex-end;
    }
    .msg.assistant {
      background: white;
      color: #222;
      align-self: flex-start;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    }
    .msg.error {
      background: #fff0f0;
      color: #c00;
      align-self: flex-start;
      border: 1px solid #fcc;
    }
    .msg.thinking {
      background: white;
      color: #999;
      align-self: flex-start;
      font-style: italic;
    }
    #input-area {
      background: white;
      border-top: 1px solid #e0e0e0;
      padding: 16px 24px;
      display: flex;
      gap: 12px;
    }
    #input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      resize: none;
      font-family: inherit;
      outline: none;
      transition: border-color 0.15s;
    }
    #input:focus { border-color: #1a3a5c; }
    #send {
      background: #1a3a5c;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 0 20px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s;
    }
    #send:hover { background: #254e7a; }
    #send:disabled { background: #999; cursor: not-allowed; }
    .welcome {
      text-align: center;
      color: #888;
      margin: auto;
      padding: 40px;
    }
    .welcome h2 { font-size: 20px; color: #444; margin-bottom: 8px; }
    .welcome p { font-size: 14px; line-height: 1.6; }
    .examples { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
    .example {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 10px 16px;
      font-size: 13px;
      cursor: pointer;
      text-align: left;
      transition: border-color 0.15s;
    }
    .example:hover { border-color: #1a3a5c; color: #1a3a5c; }
  </style>
</head>
<body>
  <header>
    <div>
      <h1>VetRad IT Knowledge Base</h1>
      <span>Ask about any ticket type — get step-by-step instructions</span>
    </div>
  </header>

  <div id="chat">
    <div class="welcome">
      <h2>How can I help?</h2>
      <p>Ask any question about handling VetRad IT tickets.</p>
      <div class="examples">
        <button class="example" onclick="ask(this.textContent)">How do I update a client email address in Ambra?</button>
        <button class="example" onclick="ask(this.textContent)">What do I do when images aren't loading in IntoView?</button>
        <button class="example" onclick="ask(this.textContent)">How do I handle a Make The Switch inquiry from an external client?</button>
        <button class="example" onclick="ask(this.textContent)">What are comm notes and how do I process them?</button>
      </div>
    </div>
  </div>

  <div id="input-area">
    <textarea id="input" rows="2" placeholder="Ask about any VetRad ticket type..."></textarea>
    <button id="send" onclick="sendMessage()">Send</button>
  </div>

  <script>
    const chat = document.getElementById('chat');
    const input = document.getElementById('input');
    const sendBtn = document.getElementById('send');

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    function ask(text) {
      input.value = text;
      sendMessage();
    }

    function addMsg(text, cls) {
      const welcome = chat.querySelector('.welcome');
      if (welcome) welcome.remove();
      const div = document.createElement('div');
      div.className = 'msg ' + cls;
      div.textContent = text;
      chat.appendChild(div);
      chat.scrollTop = chat.scrollHeight;
      return div;
    }

    async function sendMessage() {
      const msg = input.value.trim();
      if (!msg || sendBtn.disabled) return;

      input.value = '';
      sendBtn.disabled = true;
      addMsg(msg, 'user');
      const thinking = addMsg('Searching knowledge base...', 'thinking');

      try {
        const res = await fetch('/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: msg })
        });
        const data = await res.json();
        thinking.remove();
        if (data.error) {
          addMsg('Error: ' + data.error, 'error');
        } else {
          addMsg(data.answer, 'assistant');
        }
      } catch (err) {
        thinking.remove();
        addMsg('Network error: ' + err.message, 'error');
      }

      sendBtn.disabled = false;
      input.focus();
    }
  </script>
</body>
</html>`;
