# Setting Studies to Reference
**System:** Ambra (InteleShare)
**Intake Channel:** MedVet SDP Service Desk
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
MedVet hospital clinical staff or radiologists who need to move a study to Reference status (pre/post-op images, referral partner uploads not intended for interpretation) or restore a study from Reference back to submission.

## What They're Asking For
Change the status of a study in IntoView so it is stored for reference only (not submitted for interpretation), or reverse a study that was accidentally set to reference.

> **Background:** "Reference" in Ambra means the study is stored but not queued for radiologist interpretation. Common uses: pre/post-op radiographs linked to a patient record, or referral partner images uploaded for comparison only.

---

## Step-by-Step Resolution

**To set a study TO Reference:**
1. Log in to Ambra as Admin, narrow to the hospital's namespace
2. Go to the **ALL** folder
3. Locate the study (search by patient name, PID, or ACC# if needed)
4. Right-click on the study → **Change Study Stage** → **Reference**
5. Confirm the change with the requesting clinical team

**To move a study FROM Reference back to To Be Submitted:**
1. Log in to Ambra as Admin, narrow to the hospital's namespace
2. Go to the **ALL** folder
3. In the Status search field, select **Reference** → click the magnifying glass to filter
4. Locate the study → right-click → **Change Study Stage** → **To Be Submitted**
5. Clear search filters when done
6. Confirm the study appears in To Be Submitted and notify clinical team

---

## Systems Accessed
- **Ambra (InteleShare)** — study stage changes

## Escalation
**Trigger:** Study cannot be changed — finalized report exists or Clario sync prevents stage change
**Contact:** intoviewsupport@vetrad.com

## Definition of Done
Study is in the correct stage (Reference or To Be Submitted) in Ambra; clinical team confirmed

## Common Mistakes / Gotchas
- **Always clear search filters after using Status search** — leaving Reference filter active hides other studies in the view
- **If a REQUEST is disabled in ezyVet, the image link breaks** — if the goal is to preserve the image link, disable the RESULT instead (link stays intact and accepts new merged images)
- **Studies in Reference still exist in Ambra** — they are not deleted

## Notes
- Pre/post-op rads linked to an ezyVet Diagnostic Request can simply be set to Reference — no need to merge or split
- Referral partner images needing to be combined with an ezyVet request require a merge after setting to To Be Submitted
