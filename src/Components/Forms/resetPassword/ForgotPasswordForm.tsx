'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../Input';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/Assets/logo/logo_w.png';
import { emailSchema } from '@/validation/emailSchema';
import InputError from '../InputError';
// import { signIn } from 'next-auth/react';

const ForgotPasswordForm = () => {
  const ForgotPasswordSchema = z.object({
    email: emailSchema
  });

  type IforgotPassword = z.infer<typeof ForgotPasswordSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<IforgotPassword>({
    mode: 'onSubmit',
    resolver: zodResolver(ForgotPasswordSchema)
  });
  const onSubmit: SubmitHandler<IforgotPassword> = ({ email }) => {
    // send data to backend
    const user = {
      email
    };
    console.log(user);
    reset();
  };

  const loginInputs = [
    {
      type: 'email',
      placeholder: 'enter your email',
      register: register('email'),
      error: errors.email
    }
  ];

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-[#b9b9b988] p-20 dark:bg-[#000000c5]">
      {/* dark:bg-gray-950 */}
      <div className="flex w-96 flex-col items-center gap-8 rounded-xl border-white py-10  ">
        <Image src={logo} alt="ayyam logo" height={150} width={150} priority />
        <h2 className="text-xl font-semibold mb-2">Trouble logging in?</h2>
        <p className="text-center text-gray-100 mb-6">
          Enter your email, phone, or username and we will send you a link to
          get back into your account.
        </p>
        <form
          className="flex flex-col  gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          {loginInputs.map((input) => (
            <div
              key={input.placeholder}
              className="flex flex-col items-center gap-1"
            >
              <Input
                type={input.type}
                placeholder={input.placeholder}
                register={input.register}
              />
              <InputError error={input.error} />
            </div>
          ))}
          <button
            className="mt-4 rounded-full bg-black py-2 shadow-lg dark:bg-white dark:text-black "
            type="submit"
            disabled={isSubmitting}
          >
            Send login link
          </button>
        </form>
      </div>
      <div className="flex w-96 flex-col items-center rounded-xl  py-2 ">
        {/*eslint-disable-next-line react/no-unescaped-entities */}

        <p>
          <Link href="/accounts/register" className="hover:font-bold">
            or create new account
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <Link href="/home" className="hover:font-bold">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
