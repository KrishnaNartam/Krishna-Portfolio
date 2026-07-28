# Replace EmailJS with Web3Forms for Contact Form

## Current state
The contact form uses EmailJS credentials (`service_138mf4y`, `template_tzzd9c8`, `XIuTaiEJ6Ll6vBf4Z`) that now return an "Account not found" error on submit. The user has created a Web3Forms endpoint and provided the access key `aaa2aa3d-a7a6-4656-b859-e2e2739c581c`.

## Goal
Make the contact form reliably send submissions to `krishnanartam911@gmail.com` using Web3Forms.

## Changes

### 1. Remove EmailJS
- Remove the `@emailjs/browser` import and the `sendEmail` call from the contact form in `src/routes/index.tsx`.
- Remove the EmailJS `service_id`, `template_id`, and `public_key` configuration.

### 2. Add Web3Forms submission
- Change the form submission to POST to `https://api.web3forms.com/submit` with the provided access key.
- Add a hidden `access_key` field plus hidden `subject` (e.g., "New message from Fox Founder AI portfolio") and `from_name` fields.
- Keep the existing form fields: Name, Email, Message, and any honeypot/redirect handling.

### 3. Preserve UI states
- Keep the current `sending`, `success`, `error`, and `errorMessage` states.
- On success, show the existing success message and reset the form.
- On error, show the existing error message with a mailto fallback.

### 4. Verify
- Confirm the form builds without errors.
- Optionally test a submission via the live preview if the user wants.

## Technical details
- The Web3Forms access key is a public frontend key, so it will be stored directly in the contact form code (same pattern as the previous EmailJS public key).
- No new dependencies are required; Web3Forms is a plain HTTP POST.
- No server functions or backend changes are needed.

## After this fix
Contact form submissions will be delivered to `krishnanartam911@gmail.com` via Web3Forms, replacing the broken EmailJS flow.