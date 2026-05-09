import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Please enter a valid Indian mobile number")
    .optional()
    .or(z.literal("")),
  subject: z.enum(["general", "quote", "career", "vendor", "other"], {
    required_error: "Please select a subject",
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const careerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Please enter a valid Indian mobile number"),
  position: z.enum(
    ["operator-1st", "operator-2nd", "fireman", "helper"],
    { required_error: "Please select a position" }
  ),
  location: z.enum(["hyderabad", "visakhapatnam", "both"], {
    required_error: "Please select a location preference",
  }),
  experience: z
    .string()
    .min(1, "Please enter your experience")
    .max(200, "Too long"),
  ibrCertified: z.enum(["yes", "no", "in-progress"], {
    required_error: "Please select IBR certification status",
  }),
  resume: z.any().optional(),
});

export type CareerFormValues = z.infer<typeof careerFormSchema>;
