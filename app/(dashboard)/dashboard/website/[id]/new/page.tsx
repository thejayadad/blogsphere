import React from 'react';
import NewPostForm from '@/app/(dashboard)/_components/form/new-post';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

const NewPostPage = async ({ params }: { params: { id: string } }) => {
  // Extract the ID directly from params
  const { id } = await params;
    const session = await auth()
    const userEmail = session?.user?.email || ''; // Fallback to empty string if null or undefined
    // Log to debug
  console.log("Post ID:", id);
    const websiteId = id

  console.log("userEmail " + userEmail)
  return (
    <div>
      {/* Pass the `websiteId` and `userEmail` to the form */}
      <NewPostForm userEmail={userEmail} websiteId={websiteId} />
    </div>
  );
};

export default NewPostPage;
