'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  label: string;
  labelPt?: string;
  icon: React.ReactNode;
  href?: string;
}

export const HeaderLink = ({ label, icon, labelPt, href }: Props) => {
  const path = usePathname();
  const isActive = path.startsWith('/' + href);
  return (
    <Link href={`/${href ? href : ''}`}>
      <li
        className={`flex w-56 items-center  gap-3 rounded-xl px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-[#f3f5f72e] ${isActive ? 'bg-gray-200 dark:bg-[#f3f5f72e]' : ''} `}
      >
        {icon}
        <p className={`${labelPt}`}>{label}</p>
      </li>
    </Link>
  );
};

export default HeaderLink;
