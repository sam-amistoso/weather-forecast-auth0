import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import Header from '../components/Header';
import LandingScreen from '../components/LandingScreen';
import HomeScreen from '../components/HomeScreen';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user && !isLoading) {
    return (
      <>
        <div className="w-full">
          <Header />
        </div>
        <LandingScreen />
      </>
    );
  }

  if (user && !isLoading) {
    return (
      <>
        <div className="w-full">
          <Header />
        </div>
        {/* If Authenticated */}

        <HomeScreen />
      </>
    );
  }
}
