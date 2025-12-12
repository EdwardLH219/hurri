# Gmail Email Setup Guide for Hurri

## Step 1: Enable Gmail App Passwords

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Under "How you sign in to Google", click on "2-Step Verification" (you must enable this first if not already enabled)
4. Scroll down and click on "App passwords"
5. Select "Mail" and "Other (Custom name)" - name it "Hurri Website"
6. Click "Generate"
7. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

## Step 2: Create .env.local File

Create a file named `.env.local` in your project root (`/Users/edward/Code/Hurri/.env.local`) with:

```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Email Recipients (comma-separated, no spaces after commas)
EMAIL_RECIPIENTS=recipient1@example.com,recipient2@example.com,recipient3@example.com
```

**Replace:**
- `your-email@gmail.com` with your actual Gmail address
- `xxxx xxxx xxxx xxxx` with the App Password you generated
- `recipient1@example.com,recipient2@example.com` with the email addresses you want to receive notifications

## Step 3: Restart Your Dev Server

After creating the `.env.local` file:

1. Stop the current dev server (Ctrl+C in the terminal)
2. Restart it: `npm run dev`

## Step 4: Test the Form

1. Go to http://localhost:3000
2. Click "Get Your Free Preview"
3. Fill out the form
4. Submit and check your inbox!

## Security Notes

⚠️ **IMPORTANT:**
- `.env.local` is already in `.gitignore` - it won't be committed to Git
- **NEVER** commit your Gmail credentials to Git
- The App Password is specific to this app and can be revoked anytime
- For production deployment (Netlify), add these environment variables in your Netlify dashboard:
  - Go to Site settings → Build & deploy → Environment
  - Add the same variables there

## What Happens When Form is Submitted:

1. User fills out the contact form
2. Form data is sent to `/api/contact` endpoint
3. API route uses nodemailer to send a beautiful HTML email to your specified recipients
4. Email includes:
   - Client's name, email, and website URL
   - Optional message
   - Styled with your purple/pink brand colors
   - Action reminder to create preview within 24 hours
5. User sees success message and modal closes automatically

## Troubleshooting

**If emails aren't sending:**
1. Check your Gmail credentials are correct in `.env.local`
2. Make sure 2-Step Verification is enabled on your Google account
3. Verify the App Password is correct (no spaces)
4. Check terminal for error messages
5. Try sending a test email from the form

**Error: "Invalid login"**
- You need to use an App Password, not your regular Gmail password
- Make sure 2-Step Verification is enabled

**Error: "Recipients not found"**
- Check the `EMAIL_RECIPIENTS` format (comma-separated, no spaces)

