# Adding Requesting Vets to Ambra
**System:** Ambra (InteleShare)
**Intake Channel:** MedVet SDP Service Desk
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
Hospital staff requesting that a new veterinarian (DVM) be added to their hospital's IntoView account so the vet can submit cases for interpretation.

## What They're Asking For
Create a new requesting vet account in Ambra and associate it with the correct hospital.

---

## Step-by-Step Resolution

1. Log in to Ambra as Admin → Administration → Users
2. Search for the DVM by name to confirm they are **not already in the system**
3. If already exists: add the new hospital association to their existing account (do not create a duplicate)
4. If not found: click **+ New User**
5. Fill in:
   - First name and Last name
   - Email address (primary login)
   - Alternative email if requested
   - **Clear** mobile phone and any other pre-filled fields
   - Password: `test1234` → Confirm password
   - **Uncheck "Send a notification email"**
   - Role: **Requesting Veterinarian**
6. Under Hospital: start typing the hospital name → click **Add Selected** → hospital appears in the filter column on the right
7. Enter the hospital name again next to **Locations** → set Role to **Requesting Veterinarian**
8. Save
9. Confirm the new vet can log in with the temporary password (`test1234`)
10. Notify requesting staff the account is ready

---

## Systems Accessed
- **Ambra (InteleShare)** — user administration

## Escalation
**Trigger:** Hospital is not yet in Ambra — the hospital must be fully onboarded before a vet can be added to it
**Contact:** Noel Samoraj (Noel.Samoraj@vetrad.com) | Nancy Hawkins (Nancy.Hawkins@vetrad.com) | Keith Robichaux

## Definition of Done
Vet account created in Ambra, associated with correct hospital, vet can log in with temporary password

## Common Mistakes / Gotchas
- **Always search first** — duplicate accounts cause submission and billing issues
- **Do NOT send the notification email** — uncheck this box; the vet will be given credentials manually
- **Default password is test1234** — not Welcome2023! (that is for Clario radiologist accounts)
- **Hospital must exist in Ambra first** — if the hospital isn't in the system, escalate to Noel/Nancy before attempting account creation
- **VetRad telerad site vets** are added via batch CSV upload to Intelerad, not individually — escalate these to Laura's team

## Notes
- For VetRad telerad site new hospital onboarding, vet accounts are created as part of the batch CSV upload to Intelerad. Do not create them individually.
- MedVet hospital vets are added individually as described above.
