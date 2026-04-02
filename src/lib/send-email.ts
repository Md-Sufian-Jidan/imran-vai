'use server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_SERVER_USERNAME,
        pass: process.env.SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail({
    email,
    subject,
    data
}: {
    email: string;
    subject: string;
    data: {
        name: string;
        email: string;
        message: string;
    }
}) {
    try {
        await transporter.verify();

        const htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #0f172a; padding: 24px; text-align: center;">
                <h2 style="color: #ffffff; margin: 0; letter-spacing: 1px;">New Inquiry</h2>
            </div>
            <div style="padding: 32px; background-color: #ffffff;">
                <p style="color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">From</p>
                <p style="color: #0f172a; font-size: 18px; margin-top: 0;"><strong>${data.name}</strong> (${data.email})</p>
                
                <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 24px 0;" />
                
                <p style="color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: bold; margin-bottom: 8px;">Message</p>
                <div style="color: #334155; line-height: 1.6; font-size: 16px; white-space: pre-wrap;">${data.message}</div>
            </div>
            <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8;">
                This email was sent from your portfolio contact form.
            </div>
        </div>
        `;

        const info = await transporter.sendMail({
            from: `"${data.name}" <${process.env.SMTP_SERVER_USERNAME}>`,
            to: process.env.SITE_MAIL_RECIEVER,
            replyTo: email,
            subject: `${subject}: from ${data.name}`,
            html: htmlContent,
        });

        return { messageId: info.messageId };
    } catch (error) {
        console.error('Mail Error:', error);
        return null;
    }
}