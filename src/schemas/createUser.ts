import { z } from 'zod';

export const createUserSchema = z.object({
  telephoneEmail: z.string().min(8),
  name: z.string().min(4),
  username: z.string().min(10),
  password: z.string().min(10),
  birthDate: z.string().nullable()
  // .refine((e) => {
  //   console.log('schema: ', e);

  //   return e ? new Date(e) : null;
  // })
});

export type CreateUser = z.infer<typeof createUserSchema>;
