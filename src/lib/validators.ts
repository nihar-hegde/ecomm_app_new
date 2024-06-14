import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, {
    message: "Name is Required.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

export const SignInSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is Required.",
  }),
});
