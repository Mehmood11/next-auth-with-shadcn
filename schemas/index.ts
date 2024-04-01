import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email cis Required",
  }),
  password: z.string().min(1, {
    message: "Password must be at least 1 character long",
  }),
});
