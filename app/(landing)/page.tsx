import { auth } from '@/auth';
import SignIn from '@/components/auth/signin-btn';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await auth();
  const userEmail = session?.user?.email
  // If there is a session, redirect to the dashboard
  if (userEmail) {
    redirect('/dashboard');
  }

  return (
    <div className='flex flex-col items-center justify-center p-4 h-[100vh]'>
      <h1>Home Page</h1>
      <SignIn />
    </div>
  );
}
