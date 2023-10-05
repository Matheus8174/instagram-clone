'use client';

import clsx from 'clsx';

import Button from '@components/Button';
import { useChangeStepContext } from './ChangeStepProvider';

function ConfirmationCode() {
  const { currentStep, setCurrentStep } = useChangeStepContext();

  return (
    <div
      className={clsx('flex flex-col gap-5 items-center', {
        hidden: currentStep !== 'confirmation'
      })}
    >
      <div className="icons-background envelope" />

      <h1 className="font-bold">Inserir código de confirmação</h1>

      <div className="text-sm mb-4">
        <p>
          Insira o código de confirmação que enviamos para
          weeeeeeee2333@gmail.com.{' '}
        </p>
        <p className="text-blue-400 font-bold">Reenviar código.</p>
      </div>

      <div className="w-11/12">
        <input
          type="text"
          className="w-full outline-none rounded-md border-[1px] bg-gray-50 border-gray-400 text-sm  px-4 py-2"
          placeholder="Código de confirmação"
        />

        <Button className="my-4 py-2">Avançar</Button>

        <p
          className="font-bold text-blue-400 text-sm hover:text-blue-600 cursor-pointer"
          onClick={() => {
            setCurrentStep('userData');
          }}
        >
          Voltar
        </p>
      </div>
    </div>
  );
}

export default ConfirmationCode;
