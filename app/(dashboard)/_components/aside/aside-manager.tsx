'use client'; // Ensure this component can use hooks

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import AsideToggle from '@/app/(dashboard)/_components/aside/aside-toggle';
import Aside from './aside';

interface Website {
  id: string; // Include id for redirection
  title: string;
  webaddress: string;
}

interface AsideManagerProps {
  websites: Website[];
  recentWebsite: Website | null;
  userEmail: string
}

const AsideManager: React.FC<AsideManagerProps> = ({ websites, recentWebsite, userEmail }) => {
  const [isAsideVisible, setAsideVisible] = useState<boolean>(false);
  const router = useRouter(); // Initialize the router

  const toggleAside = () => {
    setAsideVisible((prev) => !prev);
  };

  const handleWebsiteClick = (id: string) => {
    // Redirect to the specific website page
    router.push(`/dashboard/website/${id}`);
  };

  return (
    <div className="flex">
      <AsideToggle onToggle={toggleAside} />
      <Aside
        userEmail={userEmail}
        isVisible={isAsideVisible}
        websites={websites}
        recentWebsite={recentWebsite}
        onWebsiteClick={handleWebsiteClick} // Pass the click handler
      />
    </div>
  );
};

export default AsideManager;
