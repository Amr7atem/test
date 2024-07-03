import React from 'react';
import Link from 'next/link';

import { CiPlay1 } from 'react-icons/ci';
import { GrGrid } from 'react-icons/gr';
import { VscPersonAdd } from 'react-icons/vsc';

export const ProfileNav = () => {
  return (
    <div
      id="profile-nav"
      className="flex w-full justify-around xl:border-t xl:py-4"
    >
      <Link href="/profile/">
        <GrGrid size={25} />
      </Link>
      <Link href="/profile/reals">
        <CiPlay1 size={25} />
      </Link>
      <Link href="/profile/activities">
        <VscPersonAdd size={25} />
      </Link>
    </div>
  );
};
