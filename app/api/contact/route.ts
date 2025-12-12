import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, website, message } = await request.json();

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Recipients - add your email addresses here
    const recipients = process.env.EMAIL_RECIPIENTS?.split(',') || [];

    // Email content
    const mailOptions = {
      from: `"Hurri Preview Requests" <${process.env.GMAIL_USER}>`,
      replyTo: 'noreply@hurri.ai',
      to: recipients,
      subject: `New Hurri Preview Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">New Preview Request</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
              <p style="margin: 5px 0;"><strong style="color: #9333ea;">Name:</strong> ${name}</p>
              <p style="margin: 5px 0;"><strong style="color: #9333ea;">Email:</strong> <a href="mailto:${email}" style="color: #ec4899;">${email}</a></p>
              <p style="margin: 5px 0;"><strong style="color: #9333ea;">Website:</strong> <a href="${website}" target="_blank" style="color: #ec4899;">${website}</a></p>
            </div>
            
            ${message ? `
              <div style="background: white; padding: 20px; border-radius: 8px;">
                <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
                <p style="color: #4b5563; line-height: 1.6;">${message}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
              <p style="margin: 0; color: #92400e;">
                <strong>Action Required:</strong> Create a preview for this website within 24 hours!
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your Hurri website contact form</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}

