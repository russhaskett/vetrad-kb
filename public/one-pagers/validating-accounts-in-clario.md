# Validating Accounts in Clario
**System:** Clario (InteleOrchestrator) / Ambra (InteleShare)
**Intake Channel:** MedVet SDP Service Desk
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
VetRad or IT staff when a new radiologist, resident, or intern needs a Clario account set up so they can read and dictate reports.

## What They're Asking For
Create and fully configure a new radiologist (or resident/intern) account in Clario, including credentials, reporting preferences, credentialing settings, dictation templates, and a matching Ambra account.

> **Note:** This is a complex setup task — not a quick password reset. Budget 30–60 minutes. Do not mark done until the test dictation step passes.

---

## Step-by-Step Resolution

**Have the following info ready before starting:**
- New user's full name, email address
- Personnel ID (Reader ID from VetRad/MedVet billing)
- Radiologist or Resident/Intern (determines credentialing level)
- Applicable practice(s)
- Time zone (Eastern for telerad; local for MedVet-based)

---

### Part 1 — Create Clario Account

1. Log in to Clario: https://intoview-radportal.medvet.com/
2. Go to **Management → User Management**
3. Find a **similar existing radiologist** (VetRad or MedVet primary/secondary reader) → click to select → **Clone**
4. In the clone dialog, enter:
   - Login: first initial + last name (e.g., jsmith)
   - Password: `Welcome2023!`
   - Save
5. Click the new user in the list → **Edit**
6. Add **Personnel ID** (Reader ID from billing)
7. Confirm Roles, Group, and Practice are correctly cloned
8. Set **Application Username** = the user's Ambra email (leave Application Password blank)
9. Under Reporting Preferences: **No Speech Engine → Generate** (creates license)
10. **Save immediately** → then open to **Edit again** before continuing
11. Set:
    - Microphone: **Philips SpeechMike**
    - Clario Dictation Topmost: **CHECKED**
    - Speech Engine: **No Speech Engine**
    - Enable Press and Hold: **UNCHECKED**
    - Default Reporting Mode: **Voice Recognition**
    - Time Zone: **Eastern** (telerad) or local time zone (MedVet)
    - Default Page: **Smart Worklist**
    - Workflow Double Click: **Launch Viewer and Dictation**
    - Password Expiry: **3000**
12. Save

---

### Part 2 — Add to Practices

1. Management → Configuration → Organization → **Practice**
2. For each applicable practice: open the practice → check the new user's name → Save
3. Verify the member count increases by 1 for each practice added

---

### Part 3 — Credentialing

1. Management → **User Credentialing**
2. Search by last name → select the user
3. Set:
   - **Radiologist:** Final on all sites (except Unknown)
   - **Resident/Intern:** Preliminary on all sites (except Unknown)
4. Go to **Reporting → Report Template**
5. For **Radiologist:** use Final ALL filter → delete existing entries → re-add all radiologists including new one
6. For **Resident/Intern:** use INTERN filter → delete existing entries → re-add all interns including new one

---

### Part 4 — Create Ambra Account

1. Log in to Ambra as Admin → Administration → **Users → + New User**
2. Fill in: first name, last name, email (login)
3. Remove mobile phone if pre-filled
4. Enter any temporary password
5. **Uncheck "Send a notification email"**
6. Role: **Radiologist**
7. Organization Login: enter the radiologist's Ambra email
8. Check **"Make this user a member of all locations"**
9. Uncheck "Use group/location default role"
10. Remove signature if present
11. Save

---

### Part 5 — Test

1. Log out → log back in → **Impersonate** the new user
2. Select Current Shift → set to hospital location → Save
3. Find a study → click **Dictate** icon to open in Dictation
4. Verify the dictation window opens and viewer loads
5. **Discard the report** — do not finalize a test report
6. If anything fails: do not mark complete — identify the gap and fix before closing the ticket

---

## Systems Accessed
- **Clario (InteleOrchestrator)** — https://intoview-radportal.medvet.com/ — account creation, credentialing, templates
- **Ambra (InteleShare)** — matching Ambra account

## Escalation
**Trigger:** Credentialing groups unclear; dictation template build needed; impersonation test fails with no clear cause
**Contact:** Keith Robichaux | Laura Messerly (614-596-5431)

## Definition of Done
- Radiologist can log in to Clario, open a study in the viewer, and open the dictation window
- Credentialing confirmed (Final for radiologist, Preliminary for intern/resident)
- Ambra account created and linked
- Test dictation opened and discarded successfully

## Common Mistakes / Gotchas
- **Generate No Speech Engine license BEFORE the second Save** — if you save without generating, you must edit again
- **Password expiry must be set to 3000** — default is too short
- **For residents/interns:** clone from an existing intern (not a radiologist), add to the intern GROUP, set credentialing to Preliminary, use INTERN report template — these are different from radiologist setup
- **Clario runs best in Chrome** — advise new users to use Chrome
- **ZV Extender popups:** allow all popups from the Clario domain on first launch

## Notes
- Clario URL: https://intoview-radportal.medvet.com/
- ZV Extender install: Clario install folder → run installer → paste URL when prompted
- For residents/interns: Smart Worklist → select appropriate Intern/Res worklist → configure attending assignment
