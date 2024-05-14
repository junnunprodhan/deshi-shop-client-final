import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Please provide your valid email" }),
  password: z
    .string()
    .min(1, { message: "password must be 6 character longer" })
    .max(20, { message: "password must be 20 character lower" }),
});
