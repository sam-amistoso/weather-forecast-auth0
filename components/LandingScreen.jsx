import React from 'react';
import Link from 'next/link';
import Button from './Button';

const LandingScreen = () => {
  return (
    <div className="flex flex-col mt-16">
      <h3 className="text-sm sm:text-lg">
        Welcome to the wather forecast web application. Please login to use the
        application and view the weather in your city
      </h3>
      <Link href="/api/auth/login">
        <a className="mt-6">
          <Button>Login</Button>
        </a>
      </Link>
    </div>
  );
};

export default LandingScreen;
