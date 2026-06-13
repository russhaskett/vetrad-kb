# IntoView Technical Support
**System:** IntoView (Ambra / Clario)
**Intake Channel:** MedVet SDP Service Desk
**Volume:** ~26/day
**SLA:** [NEEDS KT — ask Laura: target resolution time for technical tickets]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
VetRad radiologists, MedVet hospital clinical staff, and external VetRad referring hospitals.
Tickets come in via SDP. External client contacts may also call 888-483-8723 or email intoviewsupport@vetrad.com — those must be routed to the shared Outlook inbox and replies must come from that address.

## What They're Asking For
Technical issues with the IntoView PACS platform — login failures, images not loading in the viewer, studies stuck in the wrong status, Ambra and Clario out of sync, or the Clario worklist not displaying correctly.

> **Background for IT:** IntoView is MedVet's brand name for its PACS (radiology image) platform. It is two systems working together: **Ambra** (InteleShare) handles image storage and submission; **Clario** (InteleOrchestrator) is the radiologist worklist and dictation system. Most issues are caused by a mismatch between the two.

---

## Step-by-Step Resolution

**Start here for every ticket:**
1. Receive ticket via SDP. Identify issue type from the table below and jump to the matching procedure.
2. Log in to Clario: https://intoview-radportal.medvet.com/
3. Log in to Ambra: https://vetrad-intoview.ambrahealth.com (Admin credentials)

---

### A — Login / Password Reset
1. Log in to Ambra as Admin → Administration → Users
2. Search for the user by name or email
3. Click the **Reset Password** icon
   - ⚠️ The "Organization Login" field must be populated or the Reset Password option will not appear
4. Enter and confirm the new password. Do **not** toggle "set new password" option
5. Share new password with user. Confirm they can log in.

---

### B — Images Not Loading in Viewer
1. Open the study in the Ambra ProViewer
2. Click the **Delete** icon → select **Series** → select all affected images → Delete
3. Contact the clinic or referring hospital and ask them to resend the study to the server
4. Once resent, confirm images are visible in the ProViewer before closing the ticket

---

### C — Study Stuck / Wrong Status (Ambra vs. Clario Out of Sync)
> **Key reference:** Ambra stage → Clario status mapping:
> - Ambra SLM (Manual Route) = **OnPACS** in Clario (images only, no history)
> - Ambra Submitted = **Unread** in Clario (ready to read)
> - Ambra QC = **QC/Cancelled** in Clario

1. Confirm patient name, Patient ID (PID), and Accession Number (ACC#) match exactly in both Ambra and Clario
2. Confirm images are actually present in the Ambra ProViewer
3. Determine where the case is stuck and send the correct HL7 message from Ambra:
   - Case shows Validated in Clario (request but no images): In Clario → select study → Actions → Change Status → **Unread**
   - Case not appearing in Unread: In Ambra → manually change stage to QC → Cancel Submission → resubmit → verify Unread in Clario
   - Case shows Begun in Clario: Send HL7 SLM (Manual Route) from Ambra first, then HL7 Submitted
4. Confirm case appears in radiologist Unread list before closing

---

### D — Columns Out of Sorts in Clario Worklist
1. Click the **three-dots icon** next to the Refresh button
2. Select **Reset to Default**
3. Confirm with user that columns are back to normal

---

### E — Studies Slow to Load / Red Lightning Bolt in Clario
1. This indicates slow internet or server speed — it is not an IT configuration issue
2. Advise user to: close Clario, shut down and restart the browser, reopen
3. If persistent: escalate to Intelerad (indicates acceleration/caching issue)

---

### F — ZV Extender / Viewer Won't Open
1. Check if Chrome is blocking popups — click the popup blocker icon (top right of Chrome) and allow
2. If ZV Extender (desktop application) is not installed: install from the Clario install folder
   - During installation, paste URL when prompted: https://intoview-radportal.medvet.com/
3. The ProViewer opens from 4 different servers (picks fastest) — popup blocker may fire 4 times on first launch, then never again

---

## Systems Accessed
- **Clario (InteleOrchestrator)** — https://intoview-radportal.medvet.com/ — radiologist worklist, status management, password resets
- **Ambra (InteleShare)** — https://vetrad-intoview.ambrahealth.com — image storage, study submission, user management
- **MedVet SDP** — ticket intake and resolution logging
- **Shared Outlook inbox** — for any tickets that originated from external clients (replies must come from this address)

## Escalation
**Trigger:** Issue unresolved after all procedures above; HL7 backend configuration change required; issue requires Intelerad or Ambra backend access
**Contact:**
- **Keith Robichaux** (MedVet IT) — Clario configuration, dictation templates
- **intoviewsupport@vetrad.com** — VetRad support team (Laura's team) — for complex Ambra/Clario issues
- **Intelerad Support** — for backend HL7 or configuration changes (open a support ticket)

## Definition of Done
- Study is in the correct status in both Ambra and Clario
- Radiologist can open the study in the viewer and dictate, **OR** clinical staff can submit the case
- Resolution notes recorded in SDP ticket

## Common Mistakes / Gotchas
- **Reset Password won't appear** if the user's Organization Login field in Ambra is empty — populate it first
- **Image count shows 0** for MedVet hospital studies in Clario — this is expected, not a bug
- **Study Date in Clario shows UTC time**, not local time — 5 hours ahead of ET. The "Uploaded" column shows local time
- **External client emails must come from the shared Outlook inbox** — do not reply from a personal MedVet address
- **Merge cannot be undone** — if a study was incorrectly merged, it can only be split out after the fact
- **ZV Extender popup blocker** will fire multiple times on first install — allow all popups from the Clario domain

## Notes
- IntoView = MedVet brand name for PACS = InteleShare (Ambra) + InteleOrchestrator (Clario) integrated
- VetRad Support hours (Laura's team): M–F 8am–8pm ET, Sat 9am–2pm ET. Phone: 888-483-8723
- Outbound calls to external clients must use VetRad RingCentral number, not personal lines
- This is the highest-volume ticket type at ~26/day — IT should expect it to dominate the queue
