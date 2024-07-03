'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../Input';
import Image from 'next/image';
import logo from '@/Assets/logo/logo_w.png';
import InputError from '../InputError';
import { passwordSchema } from '@/validation/passwordSchema';
// import { signIn } from 'next-auth/react';

const ResetPasswordForm = () => {
  const ResetPasswordSchema = z
    .object({
      password: passwordSchema,
      confirm_password: passwordSchema
    })
    .refine((data) => data.password === data.confirm_password, {
      message: 'Passwords dont match',
      path: ['confirm_password']
    });

  type IresetPassword = z.infer<typeof ResetPasswordSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<IresetPassword>({
    mode: 'onSubmit',
    resolver: zodResolver(ResetPasswordSchema)
  });
  const onSubmit: SubmitHandler<IresetPassword> = ({ password }) => {
    // send data to backend
    const user = {
      password
    };
    console.log(user);
    reset();
  };

  const loginInputs = [
    {
      type: 'password',
      placeholder: 'enter your password',
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
        <Image src={logo} alt="ayyam logo" height={150} width={150} priority />
        <h2 className="text-xl font-semibold mb-2">Set a New Password</h2>
        <p className="text-center text-gray-100 mb-6">
          Make sure your new password is at least 6 characters long and includes
          a mix of letters, numbers, and special characters for better security.
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
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
