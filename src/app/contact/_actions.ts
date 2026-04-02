"use server";

import ContactThankYouEmail from "@/components/templates/ContactThankYouEmail";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
    success?: boolean;
    error?: string;
    message?: string;
};

const formSchema = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function submitContactForm(
    _prevState: FormState,
    formData: FormData
): Promise<FormState> {
    try {
        const rawData = Object.fromEntries(formData.entries());
        const validatedFields = formSchema.safeParse(rawData);

        if (!validatedFields.success) {
            return {
                success: false,
                error: validatedFields.error.flatten().fieldErrors.email?.[0] ||
                    validatedFields.error.flatten().fieldErrors.name?.[0] ||
                    "Invalid form data",
            };
        }

        const { name, email, message } = validatedFields.data;

        const { error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: [email],
            subject: `Thank you for contacting me, ${name}`,
            react: ContactThankYouEmail(),
        });

        if (error) {
            return {
                success: false,
                error: "Resend failed to deliver the email.",
            };
        }

        return {
            success: true,
            message: "Success! I'll get back to you as soon as possible.",
        };
    } catch (err) {
        return {
            success: false,
            error: "A server error occurred.",
        };
    }
}