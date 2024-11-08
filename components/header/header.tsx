import { auth } from '@/auth';
import React from 'react';
import SignIn from '../auth/signin-btn';
import SignOut from '../auth/signout-btn';
import AsideManager from '@/app/(dashboard)/_components/aside/aside-manager'; // Adjust the path as necessary'

interface HeaderProps {
  websites: { title: string; webaddress: string }[];
  recentWebsite: { title: string; webaddress: string } | null;
}

const Header: React.FC<HeaderProps> = async ({ websites, recentWebsite }) => {
  const session = await auth(); // Assuming auth doesn't need to be awaited here for session retrieval
  const userEmail = session?.user?.email

  return (
    <header className='w-full p-4 h-16 border-b'>
      <nav className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <AsideManager userEmail={userEmail} websites={websites} recentWebsite={recentWebsite} /> {/* Pass the props here */}
          <p>Logo</p>
        </div>
        <div>
          {userEmail ? (
            <div>
              <span>Welcome, {userEmail}</span>
              <SignOut />
            </div>
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
