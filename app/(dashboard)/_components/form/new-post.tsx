'use client'; // Ensure this component can use hooks

import React from 'react';
import { createPost } from '@/lib/post/new-post'; // Adjust the import according to your structure
import { useActionState } from 'react';

interface NewPostFormProps {
  userEmail: string; // Accept userEmail as a prop
  websiteId: string; // Accept websiteId as a prop
}

const NewPostForm: React.FC<NewPostFormProps> = ({ userEmail, websiteId }) => {
  const [state, formAction] = useActionState(createPost, null); // Handle form state


  return (
    <div>
      <form action={formAction}>
        <input type='text'  name='userEmail' id='userEmail' defaultValue={userEmail} hidden />
        <input type='text' name='websiteId' id='websiteId' defaultValue={websiteId} hidden />
        <div>
          <label>Title:</label>
          <input type="text" name="title" id="title" placeholder="Title..." required />
        </div>
        <div>
          <label>Description:</label>
          <textarea  name="description" id="description" placeholder="Description..." required />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
