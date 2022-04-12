import React from 'react';
import Button from './Button';

const LandingScreen = () => {
  return (
    <div className="flex flex-col mt-16">
      <h3 className="text-sm sm:text-lg">
        Welcome to the wather forecast web application. Please login to use the
        application and view the weather in your city
      </h3>
      <a href="/api/auth/login" className="mt-6">
        <Button>Login</Button>
      </a>
    </div>
  );
};

export default LandingScreen;
