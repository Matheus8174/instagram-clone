'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const userLoginSchema = z.object({
  telephoneNameOrEmail: z.string(),
  password: z.string()
});

type UserLogin = z.infer<typeof userLoginSchema>;

function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema)
  });

  function handleLogin(data: UserLogin) {}

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit(handleLogin)}></form>
      </main>
    </div>
  );
}

export default AuthPage;
