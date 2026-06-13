# Comm Notes
**System:** Clario (InteleOrchestrator) / Ambra (InteleShare)
**Intake Channel:** MedVet SDP Service Desk (ticket) + IntoView Support email inbox
**Volume:** ~8/day
**SLA:** [NEEDS KT — ask Laura: expected resolution time for comm note tickets]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
Radiologists enter comm notes directly in Clario when a study has an issue they cannot resolve. The comm note triggers an email notification to the IntoView Support inbox. The SDP ticket may be filed by the radiologist or support team.

## What They're Asking For
A radiologist has flagged a case with a problem (e.g., missing/incorrect patient history, image issue, case needs to go to reference) and IT needs to investigate and resolve it so the radiologist can complete the read.

> **Background:** A "comm note" (communication note) is a flag a radiologist places on a study in Clario when something is wrong. Common reasons: incomplete history (missing or contains a tilde `~`), images missing or incorrect, case should have been set to reference instead of submitted for interpretation.

---

## Step-by-Step Resolution

1. Email notification arrives at **intoviewsupport@vetrad.com** (or ticket filed in SDP). Copy the ACC# from the comm note notification.
2. Log in to **Clario** and search for the ACC#.
3. Click the **Communication Note icon** on the study to see the full reason and which radiologist entered it.
4. Log in to **Ambra** as Admin. Narrow to the hospital's namespace. Search for the study (it may no longer be in QC status if already canceled).

**If the case was canceled:**
5. Monitor Clario and Ambra to confirm the clinical team resubmits it. Follow up if needed.

**If not canceled — investigate by comm note type:**

| Comm Note Reason | Action |
|---|---|
| "Incomplete history" (tilde `~` in field) | In Ambra: cancel submission in QC → case returns to To Be Submitted → click Edit Study icon → remove tilde from history → resubmit → verify Unread in Clario |
| "Change to reference" | Check ezyVet: was this entered as a referral partner radiograph RIS upload? If yes, contact clinical team to cancel QC and change to reference |
| Other / unclear | Investigate in Ambra. Contact radiologist for clarification if needed. |

6. Once resolved: in Clario, click the **Comm Note icon** on the study → enter a description of the resolution → click **Complete and Send**.
7. If the radiologist needs to know the case is available again, notify them directly.
8. Confirm the case is in **Unread** status in Clario before closing the SDP ticket.

---

## Systems Accessed
- **Clario (InteleOrchestrator)** — find study, read comm note reason, change status, complete comm note
- **Ambra (InteleShare)** — investigate in hospital namespace, cancel/resubmit, edit study history
- **IntoView Support inbox** (intoviewsupport@vetrad.com) — comm note email notifications arrive here
- **ezyVet** — check if case was meant to be reference (referral partner RIS upload)

## Escalation
**Trigger:** Comm note requires an HL7 message to be sent back to Ambra to trigger QC status — this requires a backend configuration change in Intelerad (not doable by IT Service Desk)
**Contact:**
- **intoviewsupport@vetrad.com** — Laura's team for complex comm note resolution
- **Intelerad support ticket** — for HL7/backend config changes (reference ticket CS1875057 for context)

## Definition of Done
- Comm note resolved and marked Complete in Clario
- Study is in **Unread** status in Clario (available for radiologist to dictate)
- Radiologist notified if they need to take action
- SDP ticket closed with resolution notes

## Common Mistakes / Gotchas
- **Tilde (`~`) in history field** is the most common cause of incomplete history comm notes — it must be removed, not just edited around
- **Canceling in QC moves the case back to To Be Submitted** — do not resubmit without first editing the history
- **Some radiologists use comm notes for issues that don't fit any existing type** — read the free-text carefully; the comm note label may not accurately describe the actual problem
- **Do not close the SDP ticket until the case is confirmed Unread in Clario** — "resolved in Ambra" is not done

## Notes
- Comm note admin/setup (for creating new comm note types): Clario → Management → Configuration → Notes → Communication Type. Notification setup: Management → Notification Management.
- Status options that can trigger comm note notifications: Validated, On PACS, Unread, Dictating, Draft, Addendum, Signed, Final, Final Addendum
- If a new comm note type is needed (not a resolution task — an admin task), it also requires an Intelerad backend ticket to wire up the HL7 command
