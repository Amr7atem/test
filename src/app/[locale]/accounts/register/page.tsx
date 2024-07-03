import SignupForm from '@/Components/Forms/signup/SignupForm';
import React from 'react';

const SignupPage = () => {
  return (
    <>
      <main className="relative flex h-[200%]  items-baseline justify-center gap-20  overflow-hidden bg-[#00000054] text-white xl:flex-row-reverse xl:py-10">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute bottom-0 top-0 -z-10 hidden w-full xl:block"
          src="/Ayyam.mp4"
        /> */}

        <SignupForm />
        <div className="hidden flex-col  items-center xl:flex">
          <h1 className="text-center text-4xl xl:text-5xl">
            First Arabic social media Platform
            {/* <ThemeSwitcher /> */}
          </h1>
          <p className="text-xl">By Arabs for Arabs</p>
        </div>
      </main>
    </>
  );
};

export default SignupPage;
