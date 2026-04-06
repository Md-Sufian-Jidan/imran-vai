"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, User, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/app/actions/email";

const contactSchema = z.object({
    name: z.string().min(2, { error: "Name is required" }),
    email: z.string().email({ error: "Invalid email address" }),
    message: z.string().min(10, { error: "Message must be 10+ characters" }),
});

export default function ContactForm() {
    const form = useForm({
        defaultValues: { name: "", email: "", message: "" },
        onSubmit: async ({ value }) => {
            const loadingToast = toast.loading("Sending your message...");

            try {
                const response = await sendMail(value);

                if (response?.messageId) {
                    toast.success("Message sent! I'll get back to you soon.", { id: loadingToast });
                    form.reset();
                } else {
                    toast.error(response?.error || "Failed to send message.", { id: loadingToast });
                }
            } catch (error) {
                toast.error("An unexpected error occurred.", { id: loadingToast });
            }
        },
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl mx-auto"
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-6 bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#d1d5db] shadow-[0_20px_50px_rgba(31,177,193,0.15)] relative overflow-hidden"
            >
                {/* Decorative Teal Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1fb1c1]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-2 mb-8 text-left">
                    <h3 className="text-2xl font-bold text-[#1d2d3d] tracking-tight">Send a Message</h3>
                    <p className="text-[#6b7280] text-sm">I typically respond within 24 hours.</p>
                </div>

                {/* Name Field */}
                <form.Field name="name" validators={{ onChange: contactSchema.shape.name }}>
                    {(field) => (
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#1d2d3d] uppercase tracking-widest ml-1 flex items-center gap-2">
                                <User size={14} className="text-[#1fb1c1]" /> Full Name
                            </label>
                            <Input
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Md Abu Sufian"
                                className="h-14 bg-[#f9fafb] border-[#e5e7eb] focus-visible:ring-[#1fb1c1] focus-visible:border-[#1fb1c1] rounded-2xl transition-all"
                            />
                            {field.state.meta.errors && (
                                <p className="text-[11px] text-red-500 font-medium ml-1">{field.state.meta.errors.join(", ")}</p>
                            )}
                        </div>
                    )}
                </form.Field>

                {/* Email Field */}
                <form.Field name="email" validators={{ onChange: contactSchema.shape.email }}>
                    {(field) => (
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#1d2d3d] uppercase tracking-widest ml-1 flex items-center gap-2">
                                <Mail size={14} className="text-[#1fb1c1]" /> Email Address
                            </label>
                            <Input
                                type="email"
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="sufian@example.com"
                                className="h-14 bg-[#f9fafb] border-[#e5e7eb] focus-visible:ring-[#1fb1c1] focus-visible:border-[#1fb1c1] rounded-2xl transition-all"
                            />
                            {field.state.meta.errors && (
                                <p className="text-[11px] text-red-500 font-medium ml-1">{field.state.meta.errors.join(", ")}</p>
                            )}
                        </div>
                    )}
                </form.Field>

                {/* Message Field */}
                <form.Field name="message" validators={{ onChange: contactSchema.shape.message }}>
                    {(field) => (
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#1d2d3d] uppercase tracking-widest ml-1 flex items-center gap-2">
                                <MessageSquare size={14} className="text-[#1fb1c1]" /> Your Message
                            </label>
                            <Textarea
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Tell me about your project..."
                                className="min-h-[140px] bg-[#f9fafb] border-[#e5e7eb] focus-visible:ring-[#1fb1c1] focus-visible:border-[#1fb1c1] rounded-2xl resize-none transition-all"
                            />
                            {field.state.meta.errors && (
                                <p className="text-[11px] text-red-500 font-medium ml-1">{field.state.meta.errors.join(", ")}</p>
                            )}
                        </div>
                    )}
                </form.Field>

                {/* Submit Button */}
                <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
                    {([canSubmit, isSubmitting]) => (
                        <Button
                            type="submit"
                            disabled={!canSubmit || isSubmitting}
                            className="w-full h-14 rounded-xl font-bold text-lg border border-[#1fb1c1] bg-[#1fb1c1] hover:bg-[#1fb1c1]/5 text-white hover:text-black transition-all active:scale-[0.98] shadow-xl shadow-[#1fb1c1]/20 mt-4 group cursor-pointer"
                        // bg-[#1fb1c1] text-[#1d2d3d]
                        // text-white/70 hover:text-[#1fb1c1] hover:bg-[#1fb1c1]/5
                        >
                            {isSubmitting ? (
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    Send Message
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    )}
                </form.Subscribe>
            </form>
        </motion.div>
    );
}