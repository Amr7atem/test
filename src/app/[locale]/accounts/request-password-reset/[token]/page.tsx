import { Metadata } from 'next';
import ResetPaswordForm from '@/Components/Forms/resetPassword/ResetPaswordForm';

interface ResetPasswordPageProps {
  params: {
    token: string;
  };
}

export const metadata: Metadata = {
  title: 'Reset Password'
};

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
  const { token } = params;

  // Replace this with your actual token validation logic
  const isValid = token === '123';

  if (!isValid) {
    return (
      <main className="flex h-screen items-center justify-center bg-[#00000054] text-white">
        <p>Invalid or expired token. Please try again or contact support.</p>
      </main>
    );
  }

  return (
    <>
      <main className="relative flex h-[200%] items-baseline justify-center gap-20 overflow-hidden bg-[#00000054] text-white xl:flex-row-reverse xl:py-10">
        <ResetPaswordForm />
      </main>
    </>
  );
}
