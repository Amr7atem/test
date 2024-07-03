import z from 'zod';

const passwordSchema = z
  .string()
  .min(6, { message: 'Password must be at least 6 characters' })
  .max(20, {});

const emailSchema = z
  .string()
  .min(1, { message: 'email is Required' })
  .email({ message: 'Not valid email' });

export const signupSchema = z
  .object({
    first_name: z.string().min(1, { message: 'First name is Required' }),
    last_name: z.string().min(1, { message: 'Last name is Required' }),
    email: emailSchema,
    password: passwordSchema,
    confirm_password: passwordSchema
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords dont match',
    path: ['confirm_password']
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
});

export type Ilogin = z.infer<typeof loginSchema>;
export type ISignup = z.infer<typeof signupSchema>;
