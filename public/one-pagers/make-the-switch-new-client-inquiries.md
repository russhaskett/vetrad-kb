# Make The Switch — New Client Inquiries / Voicemails
**System:** IntoView (Ambra / Clario)
**Intake Channel:** Shared Outlook inbox (external clients) / RingCentral voicemail
**Volume:** ~20/day
**SLA:** [NEEDS KT — ask Laura: target response time for new client inquiries]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
External referring veterinary hospitals interested in switching to IntoView for radiology image submission. Contact comes via the shared Outlook inbox or as a voicemail on the VetRad RingCentral line.

## What They're Asking For
A new referring hospital wants to set up IntoView so they can submit radiograph images digitally for interpretation. This is an onboarding workflow, not a break/fix ticket. The end result is a configured hospital that can submit test and live cases.

> ⚠️ **Channel rules:** All replies to external clients must come from the shared Outlook inbox — not a personal MedVet address. All outbound calls must use the VetRad RingCentral number.

---

## Step-by-Step Resolution

1. Ticket arrives via shared Outlook inbox or voicemail. Reply from the shared inbox (not personal email).
2. If voicemail: call back using the VetRad RingCentral number. Log the inquiry in the shared inbox thread.
3. Collect the following from the hospital:
   - Hospital name and primary contact name
   - Imaging system vendor (e.g., IDEXX, Heliodor, Canon, etc.)
   - Hospital fax number
   - Contact email address
4. Send the **IntoView Self Service Email Template** (on file in One-Pagers/templates or with Laura's team) with the hospital's assigned credentials:
   - IP Address
   - Unique AE Title
   - Port
   - Login and temporary password
5. Instruct the hospital to have their **imaging system vendor** configure the DICOM transfer to the IntoView server using the above connection details. IT does not configure the client's imaging hardware.
6. Ask the hospital to send a **test case** once configured:
   - Patient Name: `Test Patient`
   - History: `Test Case`
   - Do NOT send real patient images for the test
7. Monitor the Ambra Admin dashboard for the test case to arrive. When it appears:
   - Assign the study to yourself while it is in OnPACS status
   - Confirm images are viewable in the ProViewer
8. The system sends an automated response: *"Thank you for submitting your test case."* Confirm the hospital received it.
9. Notify the hospital they are ready to submit live cases.
10. **New hospital system setup** (if not already in Clario/Ambra — escalate to Laura's team):
    - Clario: add new site entry (Management > Configuration > Organization > Site)
    - Ambra: CSV upload to Intelerad using VETRAD TELERAD AMBRA USER Template

---

## Systems Accessed
- **Shared Outlook inbox** — all external client communication (replies must originate here)
- **RingCentral** — VetRad phone line for voicemail and outbound calls
- **Ambra (InteleShare)** — validate test case receipt, assign study, confirm images
- **Clario (InteleOrchestrator)** — new site setup (if needed)

## Escalation
**Trigger:** Hospital imaging system does not support DICOM transfer; new hospital needs to be added to Clario/Ambra backend; CSV upload to Intelerad required
**Contact:** Email all of the following:
- david.ferraro@intelerad.com
- ethan.york@intelerad.com
- eric.baerenrodt@intelerad.com
- CC: Britney.Earwood@medvet.com, laura.messerly@vetrad.com, Noel.Samoraj@vetrad.com, Nancy.Hawkins@vetrad.com, keith.robichaux@medvet.com

Sample escalation subject: *"We need to add 1 new location and 3 new users for VETRAD [Hospital Name] [Cust ID]"*

## Definition of Done
- Hospital's test case received and visible in Ambra ProViewer
- Automated test response confirmed received by hospital
- Hospital confirmed able to submit live cases

## Common Mistakes / Gotchas
- **Replies from personal MedVet email** break the external client relationship — always use the shared Outlook inbox
- **Outbound calls from personal phone** — must use VetRad RingCentral number
- **IDEXX and some vendors use proprietary formats** — images must be downloaded to computer first and uploaded manually; IntoView does not accept zip files directly
- **Hospital setup in Clario/Ambra is a separate escalation** — IT Service Desk handles inquiry/onboarding communication; backend setup goes to Intelerad via the contacts above
- **Test case must use "Test Patient" / "Test Case"** — do not use real patient data

## Notes
- VetRad Support hours: M–F 8am–8pm ET, Sat 9am–2pm ET. Phone: 888-483-8723
- Ambra CSV template location: Teams → Imaging System Project → General → Files → Ambra USER upload files → Templates for User Lists → VETRAD TELERAD AMBRA USER Template
- This ticket type at 20/day is second-highest volume and is entirely external-facing — tone and responsiveness directly affects VetRad's client relationships
