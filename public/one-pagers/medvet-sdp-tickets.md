# MedVet SDP Tickets
**System:** Ambra / Clario / ezyVet
**Intake Channel:** MedVet SDP Service Desk
**Volume:** ~4/day
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
MedVet hospital clinical staff (internal MedVet locations only — not external referring hospitals).

## What They're Asking For
General IntoView support issues specific to MedVet hospital workflows: images not appearing in ezyVet, report delivery problems, user access, or worklist/status issues tied to the ezyVet integration.

> **Background:** MedVet hospitals use ezyVet to create diagnostic requests. Those requests flow into Ambra (IntoView) for radiology submission. Unlike external clients, MedVet hospitals are internal — tickets come through SDP, not the shared Outlook inbox.

---

## Step-by-Step Resolution

1. Receive ticket via MedVet SDP. Identify the issue type:

| Issue | Go to |
|---|---|
| Images/report not in ezyVet | Procedure A |
| User can't log in | Procedure B |
| Study in wrong status / worklist issue | Procedure C |
| Report not delivered | See *Resending Reports via Clario* one-pager |

**Procedure A — Images or Report Not Appearing in ezyVet**
1. Open the patient in ezyVet → locate the diagnostic request
2. Click the **keyboard icon** in the diagnostic request
3. Attach the final report PDF and JPEGs of images if available
4. Paste the report text into the **Outcome** field → Save
5. Send an Ambra guest link of the images to the hospital's ezyVet email (format: `medvet[location]@labs.ezyvet.com`)

**Procedure B — User Access / Login**
1. Log in to Ambra as Admin → Administration → Users
2. Search for user → click Reset Password icon
3. ⚠️ Organization Login field must be populated for Reset Password to appear
4. Set new password, share with user, confirm they can log in

**Procedure C — Study in Wrong Status / Worklist Issue**
1. Confirm patient name, PID, and ACC# match exactly in both Ambra and Clario
2. Confirm images are present in the Ambra ProViewer
3. Send the appropriate HL7 message from Ambra to correct the status (SLM = OnPACS, Submitted = Unread)
4. Verify the study appears correctly in Clario before closing

---

## Systems Accessed
- **MedVet SDP** — ticket intake
- **Ambra (InteleShare)** — image access, user management, status changes
- **Clario (InteleOrchestrator)** — worklist and status verification
- **ezyVet** — report and image link verification for MedVet hospitals

## Escalation
**Trigger:** ezyVet integration change required; HL7 backend configuration; billing correction needed
**Contact:** intoviewsupport@vetrad.com | Keith Robichaux | corrections@vetrad.com

## Definition of Done
Images and report are accessible to MedVet clinical team in ezyVet; user confirmed able to access system

## Common Mistakes / Gotchas
- **Image count shows 0 in Clario for MedVet hospitals** — this is expected, not a bug
- **Study Date shows UTC time** — 5 hours ahead of ET; use the Uploaded column for local time
- **Do not use shared Outlook inbox** — MedVet internal tickets stay in SDP only

## Notes
- MedVet hospital ezyVet email format: `medvet[location]@labs.ezyvet.com` (e.g., medvetneohio@labs.ezyvet.com)
- If REQUEST is disabled in ezyVet, image link breaks. If RESULT is disabled, link remains intact.
