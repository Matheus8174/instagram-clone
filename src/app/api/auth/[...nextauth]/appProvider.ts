import CredentialsProvider from 'next-auth/providers/credentials';

const appProvider = CredentialsProvider({
  name: 'user-sign-in',
  credentials: {}
});

export default appProvider;
