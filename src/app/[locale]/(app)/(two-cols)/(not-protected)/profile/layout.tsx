import { AccountNumbersMobile } from '@/Components/Profile/AccountNumbersMobile';
import { AccountInfo } from '@/Components/Profile/AccountInfo';
import { ProfileNav } from '@/Components/Profile/ProfileNav';
import StoriesContainer from '@/Components/containers/Stories/StoriesContainer';

export default async function ProfileLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="account-info" className="flex flex-col gap-8 px-8 py-4 xl:px-40">
        <AccountInfo />
        <StoriesContainer />
        <div className="flex flex-col gap-4">
          <AccountNumbersMobile />
          <ProfileNav />
        </div>
      </div>
      {children}
    </>
  );
}
