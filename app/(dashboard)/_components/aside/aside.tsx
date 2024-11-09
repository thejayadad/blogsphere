'use client';
import React, { useState } from 'react';
import NewWebsiteModal from '../modal/new-site-modal';
import Link from 'next/link';
import AsideLinks from './aside-links';

interface Website {
  id: string;
  title: string;
  webaddress: string;
}

interface AsideProps {
  isVisible: boolean;
  websites: Website[];
  recentWebsite: Website | null;
  onWebsiteClick: (id: string) => void;
  userEmail: string; // Add userEmail to the props
}

const Aside: React.FC<AsideProps> = ({ isVisible, websites = [], recentWebsite, onWebsiteClick, userEmail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWebsiteId, setSelectedWebsiteId] = useState<string | null>(null); // State for selected website ID

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    setSelectedWebsiteId(selectedId); // Update the selected website ID
    if (selectedId) {
      onWebsiteClick(selectedId); // Trigger the redirection
    }
  };

  return (
    <div
      className={`fixed top-16 left-0 h-full w-64 border-r transition-transform duration-300 transform ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 flex flex-col">
        {websites.length > 0 ? (
          <div>
            <h2>Websites</h2>
            <select
              onChange={handleSelectChange}
              className="w-full border border-gray-400 p-2"
              defaultValue={recentWebsite ? recentWebsite.id : ''}
            >
              <option value="">Select a website...</option>
              {websites.map((website) => (
                <option key={website.id} value={website.id}>
                  {website.title}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <p>Looks like you haven't created any websites yet. Create one today!</p>
        )}
        <button onClick={() => setIsModalOpen(true)} className="mt-4 p-2 bg-blue-500 text-white">
          Create New Website
        </button>
        {isModalOpen && (
          <NewWebsiteModal onClose={() => setIsModalOpen(false)} userEmail={userEmail} /> // Pass userEmail to the modal
        )}

        <div className='pt-6'>
          {selectedWebsiteId && ( // Only show the link if a website is selected
            <Link href={`/dashboard/website/${selectedWebsiteId}/new`}>
              New Post
            </Link>
          )}
        </div>
        <div className='pt-6'>
        {selectedWebsiteId && <AsideLinks id={selectedWebsiteId} />}
        </div>
      </div>
    </div>
  );
};

export default Aside;
