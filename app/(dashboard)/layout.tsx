import { auth } from '@/auth';
import Header from '@/components/header/header';
import { prisma } from '@/lib/prisma';
import React from 'react';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  const userEmail = session?.user?.email;

  let websites: { title: string; webaddress: string }[] = [];
  let recentWebsite: { title: string; webaddress: string } | null = null;

  if (userEmail) {
    websites = await prisma.website.findMany({
      where: { userEmail: userEmail },
      orderBy: { createdAt: 'desc' },
    });

    recentWebsite = websites[0] || null; // Get the most recent website if it exists
  }

  return (
    <div className='h-full'>
      <Header websites={websites} recentWebsite={recentWebsite} />
      <div className='flex'>
        <div className="flex-grow ml-64">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
