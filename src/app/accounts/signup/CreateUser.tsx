'use client';

import clsx from 'clsx';

import { AiFillFacebook } from 'react-icons/ai';

import Divider from '@components/Divider';

import CreateUserForm from './CreateUserForm';
import { useChangeStepContext } from './ChangeStepProvider';

function CreateUser() {
  const { currentStep } = useChangeStepContext();

  return (
    <div
      className={clsx('flex flex-col gap-5 items-center px-4', {
        hidden: currentStep !== 'userData'
      })}
    >
      <div className="logo-background logo" />

      <p className=" font-bold text-gray-500">
        Cadastre-se para ver fotos e vídeos dos seus amigos.
      </p>

      <button className="flex w-full items-center justify-center gap-1 font-bold text-white rounded-lg px-4 py-1 bg-blue-500 hover:bg-blue-600 transition-colors">
        <AiFillFacebook size={22} />
        Entrar com o Facebook
      </button>

      <Divider />

      <CreateUserForm />
    </div>
  );
}

export default CreateUser;
