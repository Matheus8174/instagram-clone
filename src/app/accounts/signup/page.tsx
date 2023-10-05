'use client';

import React from 'react';

import Image from 'next/image';

import Link from '@components/Link';
import CreateUser from './CreateUser';
import BirthDatePicker from './BirthDatePicker';
import ConfirmationCode from './ConfirmationCode';

import { useForm, FormProvider } from 'react-hook-form';
import {
  CreateUser as CreateUserData,
  createUserSchema
} from '@schemas/createUser';
import { zodResolver } from '@hookform/resolvers/zod';

function SignUp() {
  const form = useForm<CreateUserData>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      birthDate: new Date()
    },
    resolver: zodResolver(createUserSchema)
  });

  return (
    <>
      <main className="px-7 py-8 mt-3 ml-[50%] max-w-sm min-w-[350px] -translate-x-1/2 text-center rounded-sm border-gray-300 border-[1px]">
        <FormProvider {...form}>
          <BirthDatePicker />

          <CreateUser />

          <ConfirmationCode />
        </FormProvider>
      </main>
      <aside className="text-sm flex flex-col gap-5 px-5 py-4 mt-3 ml-[50%] max-w-sm min-w-[350px] -translate-x-1/2 text-center rounded-sm border-gray-300 border-[1px]">
        <p>
          Tem uma conta?{' '}
          <Link
            href="https://www.instagram.com/accounts/login/"
            className="text-blue-500"
          >
            Conecte-se
          </Link>
        </p>
      </aside>
      <footer className="flex flex-col items-center gap-3 mx-auto w-fit text-sm mb-10 mt-3">
        <p>Obtenha o aplicativo.</p>

        <div className="flex gap-4 items-center">
          <Link href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D25B9A5F0-E709-44A5-917F-3845231122D1%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dqr_code">
            <Image
              src="/imgs/download-googleplay.png"
              height="40"
              width="134"
              alt="Baixar no Google Play"
            />
          </Link>
          <Link href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1280%2C728">
            <Image
              src="/imgs/download-microsoft.png"
              height="40"
              width="111"
              alt="Baixar na Microsoft"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}

export default SignUp;
