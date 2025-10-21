import { z } from "zod";

export const practiceFormSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
});

// ✅ Export type for useForm
export type PracticeFormData = z.infer<typeof practiceFormSchema>;
