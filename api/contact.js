import nodemailer from 'nodemailer';

/**
 * Escapes characters for HTML output to prevent XSS / injection in email clients.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Standard RFC 5322 compatible email format check.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Vercel Serverless Function: POST /api/contact
 * Handles contact form submissions and delivers emails via Nodemailer + Gmail SMTP.
 */
export default async function handler(req, res) {
  // 1. Enforce POST HTTP method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  // 2. Safe Body Extraction & Content-Type Check
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({
        success: false,
        message: 'Invalid JSON payload in request body.',
      });
    }
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({
      success: false,
      message: 'Request body must be a valid JSON object.',
    });
  }

  // 3. Extract & Validate Fields
  const { name, email, subject, message } = body;

  // Type checks
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, subject, message) must be strings.',
    });
  }

  // Trim whitespace
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedSubject = subject.trim();
  const trimmedMessage = message.trim();

  // Non-empty checks
  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, subject, message) are required and cannot be empty.',
    });
  }

  // Field length limits
  if (trimmedName.length > 100) {
    return res.status(400).json({
      success: false,
      message: 'Name must not exceed 100 characters.',
    });
  }

  if (trimmedEmail.length > 254) {
    return res.status(400).json({
      success: false,
      message: 'Email must not exceed 254 characters.',
    });
  }

  if (trimmedSubject.length > 200) {
    return res.status(400).json({
      success: false,
      message: 'Subject must not exceed 200 characters.',
    });
  }

  if (trimmedMessage.length > 5000) {
    return res.status(400).json({
      success: false,
      message: 'Message must not exceed 5,000 characters.',
    });
  }

  // Validate Email Format
  if (!isValidEmail(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  // 4. Header Injection Prevention
  // Strip newline characters from single-line fields to prevent header injection
  const sanitizedSubject = trimmedSubject.replace(/[\r\n]+/g, ' ');
  const sanitizedName = trimmedName.replace(/[\r\n]+/g, ' ');

  // 5. Verify Server-Side Environment Variables
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword) {
    console.error('Email configuration error: GMAIL_USER or GMAIL_APP_PASSWORD is not set.');
    return res.status(500).json({
      success: false,
      message: 'Email service is currently unavailable. Please try again later or reach out directly.',
    });
  }

  // 6. Configure Nodemailer Transporter with Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  // 7. Compose Email Content
  const escapedName = escapeHtml(sanitizedName);
  const escapedEmail = escapeHtml(trimmedEmail);
  const escapedSubject = escapeHtml(sanitizedSubject);
  const escapedMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br/>');
  const timestamp = new Date().toUTCString();

  const plainText = [
    `New Portfolio Contact Inquiry`,
    `----------------------------------------`,
    `From:    ${sanitizedName} (${trimmedEmail})`,
    `Subject: ${sanitizedSubject}`,
    `Date:    ${timestamp}`,
    `----------------------------------------`,
    `Message:`,
    trimmedMessage,
  ].join('\n');

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f19; color: #f1f5f9;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #111827; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);">
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); padding: 20px 24px; border-bottom: 1px solid #1f2937;">
      <h2 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700; letter-spacing: 0.5px;">Portfolio Contact Inquiry</h2>
      <p style="margin: 4px 0 0 0; color: #93c5fd; font-size: 12px; font-family: monospace;">RECEIVED VIA VERCEL SERVERLESS // DIRECT</p>
    </div>
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600; width: 100px;">SENDER:</td>
          <td style="padding: 8px 0; color: #f8fafc; font-size: 14px; font-weight: 500;">${escapedName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">EMAIL:</td>
          <td style="padding: 8px 0; color: #38bdf8; font-size: 14px;"><a href="mailto:${escapedEmail}" style="color: #38bdf8; text-decoration: none;">${escapedEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">SUBJECT:</td>
          <td style="padding: 8px 0; color: #f8fafc; font-size: 14px; font-weight: 500;">${escapedSubject}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">RECEIVED:</td>
          <td style="padding: 8px 0; color: #94a3b8; font-size: 12px; font-family: monospace;">${timestamp}</td>
        </tr>
      </table>

      <div style="background-color: #0b0f19; border: 1px solid #1f2937; border-radius: 8px; padding: 16px; margin-top: 12px;">
        <div style="color: #64748b; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px; font-family: monospace;">MESSAGE BODY:</div>
        <div style="color: #e2e8f0; font-size: 14px; line-height: 1.6; word-break: break-word;">${escapedMessage}</div>
      </div>
    </div>
    <div style="background-color: #0b0f19; padding: 14px 24px; border-top: 1px solid #1f2937; text-align: center; color: #64748b; font-size: 11px;">
      Direct reply to this email will respond to: <strong style="color: #94a3b8;">${escapedEmail}</strong>
    </div>
  </div>
</body>
</html>
  `.trim();

  // 8. Deliver Email via Gmail SMTP
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: trimmedEmail,
      subject: `[Portfolio Inquiry] ${sanitizedSubject}`,
      text: plainText,
      html: htmlContent,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    // Log error internally for debugging without leaking credentials or message content
    console.error('Nodemailer SMTP delivery error:', error?.message || 'Unknown error');

    // Never return raw SMTP errors or credentials to the client
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}
