import { z } from 'zod';
import { Input } from '../components/input';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import axios from 'axios';

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  acceptedTerms: true;
};

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  acceptedTerms: z.literal(true, { invalid_type_error: 'Aceite os termos de uso!' }),
});

export function Register() {
  const navigate = useNavigate();

  const onSubmit = (data: RegisterForm) => {
    axios
      .post('https://glatz-api.free.beeceptor.com/signup', {
        name: data.name,
        email: data.email,
        password: data.password,
        accepted_terms: data.acceptedTerms,
      })
      .then(() => {
        navigate('/');
      });
  };

  const form = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-semibold text-center">Crie uma conta</h1>
        <p className="py-3 text-sm text-center font-light">Comece agora mesmo com 30 dias grátis!</p>

        <div className="w-[340px] p-4 bg-[#FFFFFF] border border-[#D1D1D1] rounded-md mt-4">
          <FormProvider {...form}>
            <form method="POST" className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <Input
                  label="Nome"
                  type="text"
                  name="name"
                  className="w-full"
                  errorMessage={form.formState.errors.name?.message}
                />
              </div>

              <div>
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  className="w-full"
                  errorMessage={form.formState.errors.email?.message}
                />
              </div>

              <div>
                <Input
                  label="Senha"
                  type="password"
                  name="password"
                  className="w-full"
                  errorMessage={form.formState.errors.password?.message}
                />
              </div>

              <div className="flex gap-2">
                <input type="checkbox" {...form.register('acceptedTerms')} />
                <span className="text-xs font-normal">
                  Li e concordo com os{' '}
                  <a className="text-[#8234E9]" href="#">
                    termos de uso
                  </a>
                </span>
              </div>

              <Button type="submit" className="w-full">
                Cadastrar
              </Button>
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  );
}
