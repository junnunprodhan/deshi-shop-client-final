import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Must be 1 or more characters long" }),
  email: z.string().email({ message: "Please provide your valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 characters long" })
    .max(20, { message: "Password must be 20 characters low" }),
});
