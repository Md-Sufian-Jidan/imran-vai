"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// Re-using the schema for server-side validation (security best practice)
const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export async function sendMail(formData: z.infer<typeof contactSchema>) {
    // 1. Validate the data on the server
    const validatedFields = contactSchema.safeParse(formData);

    if (!validatedFields.success) {
        return { error: "Invalid form data" };
    }

    const { name, email, message } = validatedFields.data;

    // 2. Configure Nodemailer (Use environment variables!)
    const transporter = nodemailer.createTransport({
        service: "gmail", // or your SMTP provider
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Use an App Password if using Gmail
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: process.env.RECEIVER_EMAIL, // your email
            subject: `New Portfolio Message from ${name}`,
            text: message,
            html: `
        <div style="font-family: sans-serif; color: #1d2d3d;">
          <h2 style="color: #1fb1c1;">New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 10px; border: 1px solid #e5e7eb;">
            ${message}
          </div>
        </div>
      `,
        });

        return { messageId: info.messageId };
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return { error: "Failed to send email" };
    }
}