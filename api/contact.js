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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>

<body style="margin:0; padding:0; background-color:#080d18; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; color:#e5e7eb;">

  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
    New contact message received through your portfolio.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    style="width:100%; background-color:#080d18; padding:32px 12px;">
    <tr>
      <td align="center">

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0"
          style="width:100%; max-width:600px; background-color:#101827; border:1px solid #263247; border-radius:16px; overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="padding:30px 32px; background-color:#111f38; background-image:linear-gradient(135deg,#172c50 0%,#111827 75%); border-bottom:1px solid #263247;">

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <div style="font-size:11px; font-weight:700; letter-spacing:2px; color:#7dd3fc; text-transform:uppercase; margin-bottom:12px;">
                      PORTFOLIO NOTIFICATION
                    </div>

                    <h1 style="margin:0; font-size:25px; line-height:1.35; font-weight:700; color:#ffffff;">
                      You've got a new message.
                    </h1>

                    <p style="margin:10px 0 0; font-size:14px; line-height:1.7; color:#b8c5d9;">
                      Someone reached out through your portfolio website.
                    </p>
                  </td>

                  <td align="right" valign="top" width="54">
                    <div style="width:46px; height:46px; line-height:46px; text-align:center; border-radius:14px; background-color:#1e3a5f; border:1px solid #365b86; color:#7dd3fc; font-size:23px; font-weight:700;">
                      ✉
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Email Body -->
          <tr>
            <td style="padding:30px 32px;">

              <!-- Sender Section -->
              <div style="font-size:11px; font-weight:700; letter-spacing:1.8px; color:#8494aa; text-transform:uppercase; margin-bottom:16px;">
                SENDER DETAILS
              </div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="width:100%; background-color:#141f30; border:1px solid #29364a; border-radius:12px; margin-bottom:28px;">
                <tr>
                  <td style="padding:20px;">

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="48" valign="top">
                          <div style="width:42px; height:42px; line-height:42px; text-align:center; border-radius:50%; background-color:#203b60; color:#93c5fd; font-size:18px; font-weight:700;">
                            ${escapedName.charAt(0).toUpperCase()}
                          </div>
                        </td>

                        <td style="padding-left:12px;" valign="middle">
                          <div style="font-size:17px; font-weight:700; line-height:1.5; color:#f8fafc;">
                            ${escapedName}
                          </div>

                          <div style="font-size:13px; line-height:1.7; color:#8fa2bb; word-break:break-word;">
                            ${escapedEmail}
                          </div>
                        </td>
                      </tr>
                    </table>

                    <div style="height:1px; background-color:#29364a; margin:18px 0;"></div>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="100" valign="top" style="padding:7px 0; font-size:12px; font-weight:600; color:#8494aa;">
                          SUBJECT
                        </td>
                        <td valign="top" style="padding:7px 0; font-size:14px; line-height:1.6; font-weight:600; color:#eaf2ff; word-break:break-word;">
                          ${escapedSubject}
                        </td>
                      </tr>

                      <tr>
                        <td valign="top" style="padding:7px 0; font-size:12px; font-weight:600; color:#8494aa;">
                          RECEIVED
                        </td>
                        <td valign="top" style="padding:7px 0; font-size:13px; line-height:1.6; color:#aab8ca;">
                          ${timestamp}
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="font-size:11px; font-weight:700; letter-spacing:1.8px; color:#8494aa; text-transform:uppercase; margin-bottom:14px;">
                MESSAGE CONTENT
              </div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="width:100%; background-color:#0b1220; border:1px solid #29364a; border-left:3px solid #38bdf8; border-radius:8px;">
                <tr>
                  <td style="padding:22px 20px;">
                    <div style="font-size:14px; line-height:1.9; color:#dbe5f2; white-space:pre-wrap; word-break:break-word;">${escapedMessage}</div>
                  </td>
                </tr>
              </table>

              <!-- Reply Section -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="margin-top:24px; background-color:#102b32; border:1px solid #1d4a50; border-radius:10px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <div style="font-size:13px; line-height:1.8; color:#b8dadd;">
                      <strong style="color:#67e8f9;">Ready to reply?</strong><br>
                      Reply directly to this email to respond to the sender.
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px 32px; background-color:#0b1220; border-top:1px solid #263247;">

              <div style="font-size:13px; font-weight:700; color:#cbd5e1; margin-bottom:6px;">
                Portfolio Contact System
              </div>

              <div style="font-size:12px; line-height:1.8; color:#77869c;">
                This notification was generated automatically when someone submitted your portfolio contact form.
              </div>

              <div style="height:1px; background-color:#263247; margin:18px 0;"></div>

              <div style="font-size:11px; line-height:1.7; color:#64748b;">
                © ${new Date().getFullYear()} · Portfolio Contact Notification
              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

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
