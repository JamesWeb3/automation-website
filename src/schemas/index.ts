import { z } from "zod";

export const emailValidator = z
  .string()
  .regex(/^.+@.+$/, "Email must contain an @ symbol")
  .min(5, "Email must be at least 6 characters long");

export const createTripSchema = z.object({
  trip_name: z.string().min(1).optional(),
  openai_api_key: z.string().min(10).optional(),
});

export const loginSchema = z.object({
  email: emailValidator,
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Password must contain at least one capital letter")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

export const signupSchema = z
  .object({
    email: emailValidator,
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[A-Z]/, "Password must contain at least one capital letter")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(/[A-Z]/, "Password must contain at least one capital letter")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      ),
    firstName: z.string().min(2, "Name must be at least 2 characters long"),
    lastName: z.string().min(2, "Name must be at least 2 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
