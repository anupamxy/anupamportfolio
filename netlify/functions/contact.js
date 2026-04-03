const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let body
  try {
    body = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }
  }

  const { name, email, message } = body

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'All fields are required' }) }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] New message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #a855f7, #22d3ee); padding: 24px; text-align: center;">
          <h2 style="color: white; margin: 0; font-size: 22px;">New Portfolio Message</h2>
        </div>
        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 700; color: #555; width: 100px;">Name:</td>
              <td style="padding: 10px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700; color: #555;">Email:</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #a855f7;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #fff; border-radius: 8px; border-left: 4px solid #a855f7;">
            <p style="font-weight: 700; color: #555; margin: 0 0 8px;">Message:</p>
            <p style="color: #222; margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999; text-align: center;">
            Sent via anupam-singh-portfolio.netlify.app
          </p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error('Mail error:', err)
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Failed to send email' }),
    }
  }
}
