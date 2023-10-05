import { type NextRequest, NextResponse } from 'next/server';

import { CreateUser, createUserSchema } from '@schemas/createUser';
import prismaClient from '@lib/prisma/client';

const phoneNumberRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim;

const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;

export async function POST(request: NextRequest) {
  const data: CreateUser = await request.json();

  try {
    const payload = await createUserSchema.parseAsync(data);

    const isEmail = emailRegex.test(payload.telephoneEmail);

    if (isEmail) {
      const user = await prismaClient.user.findUnique({
        where: {
          email: data.telephoneEmail
        }
      });

      if (!user) return NextResponse.json({ message: 'user already exists' });

      prismaClient.user.create({
        data: {
          email: data.telephoneEmail,
          ...data
        }
      });
    }

    if (!output) output = phoneNumberRegex.test(payload.telephoneEmail);

    if (!output) throw new Error();

    exec;
  } catch {
    return NextResponse.json(
      {
        message: 'request body parse fail'
      },
      { status: 400 }
    );
  }
}
