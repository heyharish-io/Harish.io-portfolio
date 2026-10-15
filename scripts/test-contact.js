import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

// 1. Load .env
const envPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const value = trimmed.slice(idx + 1).trim();
        process.env[key] = value;
      }
    }
  });
}

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

console.log('--- Contact Us Local Verification ---');
console.log(`GMAIL_USER: ${gmailUser ? gmailUser : 'MISSING (Check .env)'}`);
console.log(`GMAIL_APP_PASSWORD: ${gmailAppPassword ? '******** (Loaded)' : 'MISSING (Check .env)'}`);
console.log(`CONTACT_RECEIVER_EMAIL: ${receiverEmail ? receiverEmail : 'MISSING'}\n`);

if (!gmailUser || !gmailAppPassword) {
  console.error('❌ Error: GMAIL_USER or GMAIL_APP_PASSWORD is not set in .env');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailAppPassword,
  },
});

console.log('1. Verifying Gmail SMTP connection...');
transporter.verify((err, success) => {
  if (err) {
    console.error('❌ SMTP Connection failed:', err.message);
    process.exit(1);
  }
  console.log('✅ SMTP Connection successful! Credentials are valid.\n');

  console.log('2. Sending sample contact inquiry...');
  transporter.sendMail({
    from: `"Portfolio Contact Form" <${gmailUser}>`,
    to: receiverEmail,
    replyTo: 'test.visitor@example.com',
    subject: '[Local Verification Test] Portfolio Contact',
    text: 'This is an automated test message to verify the local contact form configuration.',
    html: '<h3>Local Verification Successful</h3><p>Your Gmail credentials and Nodemailer configuration are working correctly!</p>',
  }, (sendErr, info) => {
    if (sendErr) {
      console.error('❌ Failed to send email:', sendErr.message);
      process.exit(1);
    }
    console.log(`✅ Success! Email dispatched. Message ID: ${info.messageId}`);
    console.log(`📬 Check your inbox at: ${receiverEmail}`);
    process.exit(0);
  });
});
