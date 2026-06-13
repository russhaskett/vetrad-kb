# Merging Cases
**System:** Ambra (InteleShare) / Clario (InteleOrchestrator)
**Intake Channel:** MedVet SDP Service Desk
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
Hospital staff or radiologists reporting that images were uploaded to the wrong accession number, or that two studies need to be combined (e.g., referral partner images need to merge with an ezyVet diagnostic request).

## What They're Asking For
Combine two studies in Ambra into a single accession so a radiologist can read all images together.

> ⚠️ **Merges cannot be undone.** A merged study can only be split out after the fact. Always download first.

---

## Step-by-Step Resolution

1. **Download both studies from Ambra as a backup before doing anything**
   - ProViewer → Export → Export Study (downloads as .zip)
2. Confirm the **Patient IDs (PID) match** between both studies
   - If they don't match: edit the study being merged AWAY to match the primary study's PID before merging
3. Confirm both studies are in the correct hospital namespace in Ambra
4. In Ambra: click the **checkbox** next to both studies to select them
5. Go to the **Actions** dropdown → select **Merge**
6. In the merge dialog: select the **primary study** (the one you are merging INTO) as the primary
7. **Do NOT toggle "delete secondary study"**
8. Click **Merge**
9. Confirm the merged study appears correctly in Ambra with all images
10. Verify the correct status appears in Clario

---

## When to Merge (Common Scenarios)
- Referral partner images uploaded manually need to be combined with an ezyVet Diagnostic Request
- Images were accidentally taken without a Diagnostic Request and need to be merged with the ezyVet request
- Additional images submitted on a different accession need to be added to the finalized study for an addendum

---

## Systems Accessed
- **Ambra (InteleShare)** — merge operation, image verification
- **Clario (InteleOrchestrator)** — status verification after merge

## Escalation
**Trigger:** Incorrect merge already occurred (wrong study was primary); patient ID mismatch affecting multiple studies; billing impact suspected
**Contact:** intoviewsupport@vetrad.com — Laura's team for complex merge corrections

## Definition of Done
Single study in Ambra with all images under the correct accession number; study in correct status in Clario; requesting staff confirmed

## Common Mistakes / Gotchas
- **Merge cannot be undone** — if wrong study is set as primary, the only recovery is a split, which has limitations
- **PIDs must match before merging** — mismatched PIDs after a merge cause downstream issues in Clario
- **DICOM vs. JPEG split behavior differs:**
  - DICOM split: remaining study reverts to original ACC# from DICOM tag; split-out study keeps new ACC#
  - JPEG split: original study loses its PID; both studies keep the same ACC#
- **Do not delete the secondary study** — untoggle that option in the merge dialog

## Notes
- Reference: IntoView User Guide pages 14–15 for merge procedure with screenshots
- Pre/post-op rads linked via ezyVet Diagnostic Request can simply be set to Reference instead — a merge is not always needed
- If REQUEST is disabled in ezyVet, the image link breaks. If RESULT is disabled, the link remains intact.
