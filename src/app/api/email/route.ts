import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { firstname, lastname, email, subject, message } = await req.json();

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME, // your email
      pass: process.env.SMTP_PASSWORD, // your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstname} ${lastname}" <${email}>`,
      to: "stephwatersphotos@gmail.com", // your receiving email
      subject: subject,
      text: message,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
            <div style="background-color: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="padding: 20px; background-color: #f9fafb; border-left: 4px solid #3b82f6;">
              <h2 style="color: #1f2937; margin-top: 0;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${firstname} ${lastname}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">
                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="padding: 20px;">
              <h2 style="color: #1f2937; margin-top: 0;">Message</h2>
              <div style="background-color: #ffffff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 6px; line-height: 1.6; color: #374151;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                This message was sent from your website contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}