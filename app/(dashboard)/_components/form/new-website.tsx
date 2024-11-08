'use client'
import React from 'react';
import { useActionState } from 'react';
import { createWebsite } from '@/lib/website/new-website';

interface UserEmailProps {
    userEmail: string; // Accept userEmail as a prop
}

const NewWebsiteForm: React.FC<UserEmailProps> = ({ userEmail }) => {
    const [state, formAction] = useActionState(createWebsite, null);
  return (
    <div>NewWebsiteForm</div>
  )
}

export default NewWebsiteForm