"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validateFields = loginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid Fields!" };
  }

  return {
    success: "Email sent!",
  };
};
