import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(8, "Must have minimum 8 characters").max(16, "Must be less than 16 characters")
})
