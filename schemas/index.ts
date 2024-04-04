import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email is Required",
  }),
  password: z.string().min(1, {
    message: "Password must be at least 1 character long",
  }),
});
export const registerSchema = z.object({
  email: z.string().email({
    message: "Email is Required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 character long",
  }),
  name: z.string().min(1, {
    message: "Name is Required",
  }),
});
