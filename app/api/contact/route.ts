import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Create transporter with Gmail SMTP
    // You can change this to any SMTP provider
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password, NOT your regular password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="padding: 20px;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px; color: #9ca3af; font-size: 12px;">
            This message was sent from your portfolio website contact form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
