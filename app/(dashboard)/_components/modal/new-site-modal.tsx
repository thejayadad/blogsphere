'use client'; // Ensure this component can use hooks

import { createWebsite } from '@/lib/website/new-website'; // Adjust the import according to your structure
import React, { useState } from 'react';


import { useActionState } from 'react';

interface NewWebsiteModalProps {
    onClose: () => void;
    userEmail: string; // Accept userEmail as a prop
  }


  const NewWebsiteModal: React.FC<NewWebsiteModalProps> = ({ onClose, userEmail }) => {
    const [state, formAction] = useActionState(createWebsite, null);

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create New Website</h2>

                <form action={formAction}>
                    <input hidden name='userEmail' id='userEmail' defaultValue={userEmail} />
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name='title'
                            id='title'
                            placeholder='Title...'
                        />
                    </div>
                    <div>
                        <label>Web Address:</label>
                        <input
                            type="text"
                            name='webaddress'
                            id='webaddress'
                            placeholder='Domain Name...'
                        />
                    </div>
                    <div>
                        <label>Logo (optional):</label>
                        <input
                            type="text"
                            name='logo'
                            id='logo'
                            placeholder='Logo...'
                        />
                    </div>
                    <button type="submit">Create</button>
                    <button type="button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default NewWebsiteModal;
