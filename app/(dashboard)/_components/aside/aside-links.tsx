'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const AsideLinks = ({ id }: { id: string }) => {
  const pathname = usePathname(); // Get the current path

  // Helper function to determine if the link is active
  const isActive = (link: string) => pathname?.startsWith(link); // Check if the path starts with the given link

  return (
    <div className='flex flex-col gap-6'>
      <Link
        href={`/dashboard/website/${id}/posts`}
        className={isActive(`/dashboard/website/${id}/posts`) ? 'text-blue-500 font-bold' : ''}
      >
        Posts
      </Link>
      <Link
        href={`/dashboard/website/${id}/settings`}
        className={isActive(`/dashboard/website/${id}/settings`) ? 'text-blue-500 font-bold' : ''}
      >
        Settings
      </Link>
    </div>
  );
};

export default AsideLinks;
