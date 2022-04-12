import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { IoMdExit } from 'react-icons/io';
import Button from '../components/Button';

const Header = () => {
  const { user, error, isLoading } = useUser();

  const ShowLogOut = () => {
    if (user && !isLoading) {
      return (
        <>
          <div className="flex md:hidden py-2 px-4">
            <a href="/api/auth/logout" className="cursor-pointer">
              <IoMdExit size={30} />
            </a>
          </div>
          <a href="/api/auth/logout" className="hidden md:flex">
            <Button>Log Out</Button>
          </a>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex w-full items-center justify-between border-b-2 border-gray-500 pb-2">
      {/* Icont & Title */}
      <div className="flex items-center ">
        <span className="pr-2 sm:pr-4">
          <TiWeatherPartlySunny size={50} className="text-gray-700" />
        </span>
        <h3 className="text-gray-700 text-xl md:text-2xl font-semibold">
          Weather Forecast
        </h3>
      </div>
      {/* Show LogOut if use authenticated*/}
      {ShowLogOut()}
    </div>
  );
};

export default Header;
