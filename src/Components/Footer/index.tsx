import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 py-12">
      <div className="flex justify-center gap-4 text-xs">
        <p>
          <Link href="/privacy">Privacy</Link>
        </p>
        <p>
          <Link href="/contact-us">Contact us</Link>
        </p>
      </div>
      <div className="flex justify-center gap-4 text-xs">
        <p>© 2024 Ayyam. All rights reserved.</p>
      </div>
    </footer>
  );
};
