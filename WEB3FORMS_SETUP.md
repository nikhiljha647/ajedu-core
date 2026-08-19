# Web3Forms Setup Instructions

## Get Your Free Access Key (Takes 2 Minutes)

1. Go to: https://web3forms.com/
2. Click "Get Started for Free"
3. Enter your email address (where you want to receive form submissions)
4. Click "Create Access Key"
5. Check your email and verify
6. Copy your Access Key

## Add Access Key to Your Project

1. Open: `src/components/BookingForm.jsx`
2. Find this line (around line 212):
   ```javascript
   formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY')
   ```
3. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual key:
   ```javascript
   formDataToSend.append('access_key', 'abc123-your-actual-key-xyz789')
   ```
4. Save the file
5. Commit and push to GitHub

## That's It! 🎉

Now whenever someone submits the booking form, you'll receive an email with:
- First Name & Last Name
- Email Address
- Phone Number
- Selected Course
- Selected Subjects
- Message (if provided)

## Features

✅ Unlimited form submissions
✅ No backend required
✅ Spam protection included
✅ Email notifications
✅ 100% Free
✅ Works on Vercel automatically

## Testing

1. After adding your key, test the form on your live site
2. Submit a test booking
3. Check your email inbox
4. You should receive the form data within seconds

## Need Help?

- Web3Forms Docs: https://docs.web3forms.com/
- Their support is very responsive if you have issues
