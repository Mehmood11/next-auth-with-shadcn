"use server";
import * as z from "zod";
import { registerSchema } from "@/schemas";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validateFields = registerSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  return {
    success: "Email sent!",
  };
};
