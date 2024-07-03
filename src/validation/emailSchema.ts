import z from 'zod';

export const emailSchema = z
  .string()
  .min(1, { message: 'email is required' })
  .email({ message: 'Not valid email' });
