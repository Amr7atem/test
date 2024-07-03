'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../Input';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/Assets/logo/logo_w.png';
import appStore from '@/Assets/app store.png';
import googlePlay from '@/Assets/google play.png';
import { emailSchema } from '@/validation/emailSchema';
import { passwordSchema } from '@/validation/passwordSchema';
import InputError from '../InputError';
// import { signIn } from 'next-auth/react';

const SignupForm = () => {
  const loginSchema = z
    .object({
      email: emailSchema,
      password: passwordSchema,
      confirm_password: passwordSchema
    })
    .refine((data) => data.password === data.confirm_password, {
      message: 'Passwords dont match',
      path: ['confirm_password']
    });

  type Isignup = z.infer<typeof loginSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Isignup>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema)
  });
  const onSubmit: SubmitHandler<Isignup> = ({ email, password }) => {
    // send data to backend
    const user = {
      email,
      password
    };
    console.log(user);
    reset();
  };

  const signUpInputs = [
    {
      type: 'email',
      placeholder: 'email',
      register: register('email'),
      error: errors.email
    },
    {
      type: 'password',
      placeholder: 'password',
      register: register('password'),
      error: errors.password
    },
    {
      type: 'password',
      placeholder: 'confirm password',
      register: register('confirm_password'),
      error: errors.confirm_password
    }
  ];

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-[#b9b9b988] p-20 dark:bg-[#000000c5]">
      {/* dark:bg-gray-950 */}
      <div className="flex w-96 flex-col items-center gap-8 rounded-xl border-white py-10  ">
        <Image src={logo} alt="ayyam logo" height={150} width={150} />
        <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
          {signUpInputs.map((input) => (
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
            Sign up
          </button>

          <div>
            <p className="text-center ">
              <Link href="/accounts/password-reset" className="hover:font-bold">
                forget password?
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex w-96 flex-col items-center rounded-xl  py-2 ">
        {/*eslint-disable-next-line react/no-unescaped-entities */}
        <p>Have an account?</p>
        <p>
          <Link href="/home" className="hover:font-bold">
            Log in
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h4>Get app now</h4>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.genz.app"
          >
            <Image
              src={googlePlay}
              width={150}
              height={90}
              alt="download on google play"
            />
          </Link>
          <Link
            target="_blank"
            href="https://apps.apple.com/us/app/ayyam-%D8%A7%D9%8A%D8%A7%D9%85/id1624765334"
          >
            <Image
              src={appStore}
              width={150}
              height={75}
              alt="download on app store"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
