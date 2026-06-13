# Resending Reports via Clario
**System:** Clario (InteleOrchestrator) / Ambra / ezyVet
**Intake Channel:** MedVet SDP Service Desk
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
Corrections team, radiologists, or hospital staff reporting that a finalized report was not received — not in ezyVet, not delivered by fax, or missing from the hospital's record.

## What They're Asking For
Resend a finalized radiology report that did not reach its destination (ezyVet, fax, or email).

---

## Step-by-Step Resolution

**Identify the destination first:**

| Report destination | Procedure |
|---|---|
| Report not in ezyVet | Procedure A |
| Report not received by fax | Procedure B |
| Ambra/Clario status out of sync | Procedure C |

**Procedure A — Report Not Appearing in ezyVet**
1. Log in to ezyVet under the hospital's login
2. Find the patient → open the diagnostic request
3. Click the **keyboard icon** in the diagnostic request
4. Attach the final report PDF and JPEGs of images if available
5. Paste the report text into the **Outcome** field → Save
6. Send an Ambra guest link of the images to the hospital's ezyVet email (format: `medvet[location]@labs.ezyvet.com`)
7. Confirm with the hospital that the report is now visible

**Procedure B — Fax Resend**
1. Log in to Clario → locate the study by ACC# or patient name
2. Use the **fax resend function** in Clario to resend to the hospital's fax number
3. Confirm fax delivery if possible

**Procedure C — HL7 Status Out of Sync (report finalized in Clario but not reflected in Ambra/ezyVet)**
1. Log in to Clario → locate the study
2. Right-click the study → **Resend Report by HL7**
3. Wait for the HL7 message to process → verify the report status updates in Ambra
4. Check ezyVet to confirm the report is now visible

---

## Systems Accessed
- **Clario (InteleOrchestrator)** — locate study, fax resend, HL7 resend
- **Ambra (InteleShare)** — guest link for images
- **ezyVet** — attach report and images to diagnostic request

## Escalation
**Trigger:** HL7 resend does not resolve the sync issue; Intelerad backend configuration required
**Contact:** intoviewsupport@vetrad.com | Intelerad support ticket

## Definition of Done
Report is visible in ezyVet OR confirmed received by fax or email; hospital staff confirms receipt

## Common Mistakes / Gotchas
- **Billing corrections are separate** — if the resend is related to a charge/billing issue, email corrections@vetrad.com in addition to resending
- **Right-click HL7 resend, not the Actions menu** — the resend function is in the right-click context menu
- **MedVet hospital ezyVet email format:** `medvet[location]@labs.ezyvet.com` (e.g., medvetneohio@labs.ezyvet.com) — confirm the correct address before sending

## Notes
- corrections@vetrad.com — for any billing-related resend issues or charge corrections
- If report is in Clario as Final but not pushing to ezyVet, it is almost always an HL7 sync issue — Procedure C resolves the majority of these
