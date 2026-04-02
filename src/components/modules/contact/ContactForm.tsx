"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/lib/send-email";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be 10+ characters"),
});

export default async function ContactForm() {
    const form = useForm({
        defaultValues: { name: "", email: "", message: "" },
        onSubmit: async ({ value }) => {
            const response = await sendMail({
                email: value.email,
                subject: "Contact Form Submission",
                data: value
            });

            if (response?.messageId) {
                toast.success("Message sent! I'll get back to you soon.");
                form.reset();
            } else {
                toast.error("Failed to send message.");
            }
        },
    });
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
            className="space-y-6 bg-card p-8 md:p-10 rounded-[2rem] border border-border shadow-sm"
        >
            <form.Field
                name="name"
                validators={{ onChange: contactSchema.shape.name }}
            >
                {(field) => (
                    (
                        <div className="space-y-2">
                            <label className="text-sm font-semibold ml-1 mb-3">Your Name</label>
                            <Input
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Md Abu Sufian"
                                className="h-12 bg-muted/20 border focus-visible:ring-1"
                            />
                            {field.state.meta.errors && (
                                <p className="text-[10px] text-destructive font-medium ml-1">
                                    {field.state.meta.errors.join(", ")}
                                </p>
                            )}
                        </div>
                    )
                )
                }
            </form.Field>

            <form.Field
                name="email"
                validators={{ onChange: contactSchema.shape.email }}
            >
                {(field) => (
                    <div className="space-y-2">
                        <label className="text-sm font-semibold mb-3">Email Address</label>
                        <Input
                            type="email"
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="sufian@example.com"
                            className="h-12 bg-muted/20 border focus-visible:ring-1"
                        />
                        {field.state.meta.errors && (
                            <p className="text-[10px] text-destructive font-medium ml-1">
                                {field.state.meta.errors.join(", ")}
                            </p>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Field
                name="message"
                validators={{ onChange: contactSchema.shape.message }}
            >
                {(field) => (
                    <div className="space-y-2">
                        <label className="text-sm font-semibold mb-3">Message</label>
                        <Textarea
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="Tell me about your project..."
                            className="min-h-[150px] bg-muted/20 focus-visible:ring-1 resize-none"
                        />
                        {field.state.meta.errors && (
                            <p className="text-[10px] text-destructive font-medium ml-1">
                                {field.state.meta.errors.join(", ")}
                            </p>
                        )}
                    </div>
                )}
            </form.Field>

            <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
                {([canSubmit, isSubmitting]) => (
                    <Button
                        type="submit"
                        disabled={!canSubmit}
                        className="w-full h-12 rounded-xl font-bold text-base transition-all active:scale-95"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </Button>
                )}
            </form.Subscribe>
        </form>
    )
}