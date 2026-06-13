# Setting Up Second Opinions
**System:** Ambra / Clario / ezyVet
**Intake Channel:** MedVet SDP Service Desk
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
Radiologists or hospital staff requesting a second read on a case that has already been finalized.

## What They're Asking For
Set up a second opinion — a new read on an already-finalized radiology case, assigned to a different radiologist.

> ⚠️ **Known gap:** The MedVet 2nd Opinion Group in Clario currently has **no members assigned**. MedVet second opinions cannot be fully completed until this is resolved. Flag to James Self / Laura Messerly.

---

## Step-by-Step Resolution

### VetRad Hospital Second Opinion

1. Log in to Ambra as Admin → enter **Classic View** (upper left of IntoView window)
2. Navigate to the requesting hospital's namespace
3. Search for the finalized study by patient name, PTID, or ACC#
4. Click the checkbox next to the correct report → **Actions** → **Clone** → **Generate new Series UID and Image UIDs**
5. Wait for the clone success confirmation message
6. Verify the cloned study: patient name and ID must match the original (if altered after original upload, the clone may show old info — update if needed)
7. Open **Edit Study** window:
   - Update the **Study Description** field
   - Add `"SECOND OPINION"` in the **Private Notes to Radiologist** field
   - Save changes
8. In Ambra: **Manual Route → SLM** the exam to send the updated ACC# to **OnPACS** in Clario
9. In Clario: find the new ACC# → assign to the **VetRad Second Opinion Group**
10. Reopen Edit Study in Ambra → verify all info is correct → **Submit** the case
11. Email **corrections@vetrad.com** with the second opinion case info and attach the final report
12. Email the **Second Opinion Group** to notify them of the new submission

---

### MedVet Hospital Second Opinion

1. Follow steps 1–7 above (clone procedure is the same)
   - ⚠️ MedVet cloned study may arrive with the **same ACC#** — treat as a split; add `"split"` to the end of the ACC# so images can be merged to the new ezyVet request
2. Log in to **ezyVet** under the hospital's login → locate the patient's diagnostics
3. Click **+ Diagnostic Request** → choose original referring vet → Diagnostic Supplier: **Ambra OT** → Diagnostics: **SUPPORT USE ONLY Second Opinion code** (select by modality type)
4. In Ambra: find the new diagnostic request in To Be Submitted → open **Edit Study**
   - Enter all info matching the original case
   - Keep the same interpretation type
   - Add additional comments or questions in Private Notes + `"SECOND OPINION REQUEST – FOR DR. ___"`
5. In Clario: search for the second opinion ACC# → assign to **MedVet 2nd Opinion Group**
   - ⚠️ This group currently has no members — escalate to Laura before completing this step
6. Go back to Ambra → Submit the case
7. After finalization: confirm **Final** status in Clario (if not Final, manually change via Actions → Change Status → Final)
8. Email **corrections@vetrad.com**
   - Telerad hospitals: Intacct billing adjustment required
   - Non-telerad MedVet hospitals: no Intacct adjustment, but verify MedVet Doctors' Payroll File for that month

---

## Systems Accessed
- **Ambra (InteleShare)** — clone, edit, submit
- **Clario (InteleOrchestrator)** — assign to second opinion group, verify Final status
- **ezyVet** — MedVet hospitals only — create new diagnostic request
- **Intacct** — telerad billing adjustments (MedVet Vancouver and other telerad sites)

## Escalation
**Trigger:** MedVet 2nd Opinion Group has no members (current known gap); billing/Intacct adjustments for telerad sites
**Contact:** corrections@vetrad.com | Dr. Strohm | Dr. Paek | Dr. Goggin (Oradell cases, 973-980-1407)

## Definition of Done
Cloned study submitted, assigned to second opinion radiologist, finalized report generated, corrections@vetrad.com notified

## Common Mistakes / Gotchas
- **MedVet cloned study may have the same ACC#** — must add "split" suffix before proceeding
- **MedVet 2nd Opinion Group is empty** — do not attempt to complete MedVet second opinions without checking this first
- **Always email corrections** — even for non-telerad MedVet hospitals, verify payroll file
- **MedVet Vancouver is a telerad hospital** — always send billing to Intacct/corrections
- **Dr. Goggin (Oradell):** OK to assign any case requesting him without prior consent; call/text 973-980-1407 for urgent contact

## Notes
- VetRad second opinions → VetRad Second Opinion Group in Clario
- MedVet second opinions → MedVet 2nd Opinion Group in Clario (currently unmanned — escalate)
