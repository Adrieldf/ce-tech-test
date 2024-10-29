'use client';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
    //  router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="container p-4 flex items-center">
      <h1>Welcome {session?.user?.name || 'User'}!</h1>
    </div>
  );
}
