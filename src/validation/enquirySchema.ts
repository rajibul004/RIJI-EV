import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.string().email("Please enter a valid email address"),

  phone: z.string().regex(/^[6-9]\d{9}$/, "Phone number must be 10 digits"),

  subject: z.string().min(1, "Please select a subject"),

  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type EnquiryPayload = z.infer<typeof enquirySchema>;
