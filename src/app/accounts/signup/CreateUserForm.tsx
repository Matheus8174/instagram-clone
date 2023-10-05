'use client';

import { CreateUser } from '@schemas/createUser';

import Link from '@components/Link';
import Input from '@components/Input';
import createUserService from '@services/createUserService';
import Button from '@components/Button';
import { useChangeStepContext } from './ChangeStepProvider';
import { useFormContext } from 'react-hook-form';

function CreateUserForm() {
  const {
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    register
  } = useFormContext<CreateUser>();

  // const isError =
  //   errors.password || errors.name || errors.telephoneEmail || errors.username;

  const { setCurrentStep } = useChangeStepContext();

  async function handleCreateUser(data: CreateUser) {
    await createUserService(data);
  }

  return (
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <div className="flex flex-col gap-2">
        <Input
          error={errors.telephoneEmail}
          type="text"
          placeholder="Número do celular ou email"
          {...register('telephoneEmail', { required: true })}
        />
        <Input
          error={errors.name}
          type="text"
          placeholder="Nome completo"
          {...register('name', { required: true })}
        />
        <Input
          error={errors.username}
          type="text"
          placeholder="Nome de usuário"
          variant="generateNumber"
          {...register('username', { required: true })}
        />
        <Input
          error={errors.password}
          type="password"
          variant="password"
          placeholder="Senha"
          {...register('password', { required: true })}
        />
      </div>

      <div className="my-4 text-gray-600">
        <p className="text-sm mb-4">
          As pessoas que usam nosso serviço podem ter enviado suas informações
          de contato para o Instagram.{' '}
          <Link href="https://www.facebook.com/help/instagram/261704639352628">
            Saiba mais
          </Link>
        </p>

        <p className="text-sm">
          Ao se cadastrar, você concorda com nossos{' '}
          <Link href="https://help.instagram.com/581066165581870/">Termos</Link>
          ,{' '}
          <Link href="https://www.facebook.com/privacy/policy">
            Política de Privacidade
          </Link>{' '}
          e{' '}
          <Link href="https://help.instagram.com/1896641480634370/">
            Política de Cookies.
          </Link>
        </p>
      </div>
      <Button
        type="button"
        // disabled={!isValid}
        onClick={() => {
          setValue('birthDate', null);

          setCurrentStep('birthday');
        }}
        className="py-2"
      >
        Cadastre-se
      </Button>
    </form>
  );
}

export default CreateUserForm;
