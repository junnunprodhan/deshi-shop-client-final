import { z } from "zod";

export const productSchema = z.object({
  description: z.string().min(1, { message: "description must be required" }),
  discountEndDate: z.date({
    required_error: "discount end date must be required",
  }),
  discountPrice: z.number().min(1, { message: "Number must be required" }),
  image: z.any({ required_error: "image must be required" }),
  isFalse: z.boolean().optional(),
  name: z.string().min(1, { message: "Name must be required" }),
  price: z.number().min(1, { message: "price must be required" }),
  rating: z.number().optional(),
});
