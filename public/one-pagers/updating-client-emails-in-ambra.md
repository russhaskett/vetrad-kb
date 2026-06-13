# Updating Client Emails in Ambra
**System:** Ambra (InteleShare)
**Intake Channel:** MedVet SDP Service Desk
**Volume:** [NEEDS KT — ask Laura for daily estimate]
**SLA:** [NEEDS KT — ask Laura]
**Draft Status:** drafted
**Last Updated:** 2026-06-10

---

## Who Contacts IT
Hospital staff requesting an email update for a requesting veterinarian (DVM) account in IntoView — typically when a vet changes their email, moves to a different hospital, or leaves the practice.

## What They're Asking For
Update or change the email address associated with a requesting vet's IntoView account in Ambra.

---

## Step-by-Step Resolution

1. Log in to Ambra as Admin → Administration → Users
2. Search for the requesting vet by name
3. Click the user record to open it

**To update the email address:**
4. Edit the email address field with the new address
5. Save changes
6. Confirm with requesting staff that the update is correct

**If a vet is leaving — determine site type before taking action:**

| Site Type | Action |
|---|---|
| VetRad / Telerad site | **Delete the user** — safe, does not affect historical reports |
| MedVet site | **Do NOT delete** — remove vet from hospital association only |

**For MedVet site (vet leaving or changing hospitals):**
4. In the user record, locate the hospital association
5. Remove the vet from the hospital they are leaving
6. If moving to a different MedVet hospital, add the new hospital association
7. Save — do not delete the account (preserves their medvet.com email and historical access)

---

## Systems Accessed
- **Ambra (InteleShare)** — user administration

## Escalation
**Trigger:** VetRad/Telerad site vet was deleted and needs reinstatement — deletion at VetRad sites cannot be self-reversed
**Contact:** Intelerad support (contact via support ticket — reinstatement requires their intervention)

## Definition of Done
Email updated in Ambra user record; vet receives reports/communications at the new address; confirmed with requesting staff

## Common Mistakes / Gotchas
- **Never delete a MedVet site vet** — removing them from the hospital association is the correct action; deletion breaks the medvet.com email linkage and cannot be reversed without Intelerad
- **VetRad/Telerad site vets can be safely deleted** — historical reports are not affected
- **Check the site type before any deletion** — VetRad and MedVet have different rules

## Notes
- For fully inactivating requesting vets (not just email update): VetRad/Telerad = delete. MedVet = remove hospital association only.
- Vet accounts are hospital-scoped in Ambra — a vet at multiple hospitals has one account with multiple hospital associations
