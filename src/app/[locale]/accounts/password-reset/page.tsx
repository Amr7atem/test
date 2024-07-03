import ForgotPasswordForm from '@/Components/Forms/resetPassword/ForgotPasswordForm';
import React from 'react';

const PasswordResetPage = () => {
  return (
    <>
      <main className="relative flex h-[200%]  items-baseline justify-center gap-20  overflow-hidden bg-[#00000054] text-white xl:flex-row-reverse xl:py-10">
        <ForgotPasswordForm />
        <div className="hidden flex-col  items-center xl:flex"></div>
      </main>
    </>
  );
};

export default PasswordResetPage;
