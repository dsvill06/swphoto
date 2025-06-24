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
      to: "dvill0618@gmail.com", // your receiving email
      subject: subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}