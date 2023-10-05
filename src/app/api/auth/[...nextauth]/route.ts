import NextAuth, { type AuthOptions } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import appProvider from './appProvider';

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    appProvider,
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ''
    })
  ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
