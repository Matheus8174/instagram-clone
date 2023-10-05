'use client';

import React from 'react';

import dayjs from 'dayjs';

import { clsx } from 'clsx';

import { useFormContext, Controller } from 'react-hook-form';

import Link from '@components/Link';
import Button from '@components/Button';
import DatePicker from '@components/DatePicker';
import { CreateUser } from '@schemas/createUser';
import { useChangeStepContext } from './ChangeStepProvider';

const currentDate = dayjs();

function BirthDatePicker() {
  const { register, handleSubmit, control } = useFormContext<CreateUser>();

  const { setCurrentStep, currentStep } = useChangeStepContext();

  function handleCreateUser(data) {
    console.log('DATAA', data);

    // setCurrentStep('confirmation');
  }

  return (
    <div
      className={clsx('flex flex-col gap-5 items-center', {
        hidden: currentStep !== 'birthday'
      })}
    >
      <div className="icons-background cake" />

      <h1 className="font-bold">Adicione sua data de nascimento</h1>

      <div className="flex gap-4 flex-col w-full items-center">
        <div className="text-sm">
          <p>Isso não fará parte do seu perfil público.</p>
          <Link href="#" className="text-blue-400">
            Por que preciso informar a minha data de nascimento?
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(handleCreateUser, (e) => {
            console.log('ERROR: ', e);
          })}
          className="flex gap-4 flex-col"
        >
          <Controller
            control={control}
            name="birthDate"
            render={({ field }) => <DatePicker {...field} />}
          />

          <p className="text-sm text-gray-400">
            Você precisa inserir sua data de nascimento
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Use sua própria data de nascimento, mesmo se esta conta for de uma
            empresa, um animal de estimação ou outra coisa
          </p>

          <div className="mt-4 w-72 mx-auto flex flex-col gap-4 items-center">
            <Button
              type="submit"
              className="py-2"
              // disabled={Math.abs(handleDate.diff(currentDate, 'year')) < 6}
            >
              Avançar
            </Button>

            <p
              className="font-bold text-blue-400 text-sm hover:text-blue-600 cursor-pointer"
              onClick={() => setCurrentStep('userData')}
            >
              Voltar
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BirthDatePicker;
