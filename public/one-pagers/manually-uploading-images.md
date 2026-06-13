# Manually Uploading Images
**System:** Ambra (InteleShare) / IntoView portal
**Intake Channel:** MedVet SDP / RingCentral phone
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
MedVet hospital staff or external referring hospitals that need to manually push radiograph images to IntoView — typically when their imaging system can't send automatically or images were taken outside the normal workflow.

## What They're Asking For
Help uploading images to IntoView when the automatic DICOM transfer didn't work or isn't available.

> **Background:** Normally, images transfer automatically from the imaging station to IntoView via DICOM. Manual upload is the fallback when that doesn't work, for referral partner images, or for non-DICOM (JPEG) images.

---

## Step-by-Step Resolution

**Determine image type first:**

| Image Type | Procedure |
|---|---|
| DICOM images | Procedure A |
| JPEG / non-DICOM images | Procedure B |
| Referral partner images (any format) | Procedure C |

**Procedure A — DICOM Upload**
1. Direct the hospital to the **IntoView User Guide, page 7** for step-by-step instructions
2. If they need real-time help: log in to Ambra, navigate to the hospital's namespace, confirm the study arrives after they attempt upload
3. Verify images appear in the Ambra ProViewer under the correct patient/accession

**Procedure B — JPEG / Non-DICOM Upload**
1. Direct the hospital to the **IntoView User Guide, page 8**
2. Key reminder: images must be individual files — IntoView does not accept zip files directly
3. Verify images appear in Ambra ProViewer after upload

**Procedure C — Referral Partner Images**
1. Hospital must **download the images to their computer first**
2. If images are in a zip file, they must **extract the zip** before uploading
3. If images are from IDEXX or similar proprietary system: must be downloaded via that vendor's export tool first
4. Once downloaded/extracted, follow DICOM or JPEG procedure above
5. After upload, confirm images appear in Ambra under the correct namespace and accession number

---

## Systems Accessed
- **Ambra (InteleShare)** — verify image receipt, confirm correct patient/accession
- **IntoView portal** — hospital uses this to upload
- **RingCentral** — use VetRad number for any outbound calls to assist hospital

## Escalation
**Trigger:** Images uploaded but not appearing in Clario after upload; HL7 sync issue between Ambra and Clario
**Contact:** intoviewsupport@vetrad.com

## Definition of Done
Images visible in the Ambra ProViewer under the correct patient name and accession number; study is ready to be submitted for interpretation

## Common Mistakes / Gotchas
- **IntoView does not accept zip files** — must extract before uploading
- **IDEXX and some vendors use proprietary formats** — images cannot be uploaded directly; must export via vendor tool first
- **Outbound calls must use VetRad RingCentral number** — not a personal MedVet line
- **After upload, images may appear in Ambra but not yet in Clario** — Clario sync happens after submission, not upload

## Notes
- DICOM download (for reference): ProViewer → Export → Export Study → downloads as .zip
- JPEG download: Ambra Viewer → Export → Export Compressed Study; or select individual image → Export → As Image → right-click → Save Image As
- IntoView User Guide pages 7 (DICOM) and 8 (JPEG) are the authoritative upload references
