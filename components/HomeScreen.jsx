import { useState } from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import { IoIosSearch } from 'react-icons/io';
import { useUser } from '@auth0/nextjs-auth0';

const HomeScreen = () => {
  const { user, error, isLoading } = useUser();
  const [cityName, setCityName] = useState('');

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      {/* User Info */}
      <div className="flex flex-col items-center mt-4 space-y-4">
        <div className="items-center space-x-4 flex">
          <div className="hidden md:flex">
            <Image
              src={user.picture}
              alt="Avatar"
              width={60}
              height={60}
              className="rounded-full"
              objectFit="contain"
            />
          </div>
          <h3 className="text-xl font-medium uppercase">{user.nickname}</h3>
        </div>
        <h3>{user.name}</h3>
      </div>

      {/* Input Search */}
      <div className="flex w-full mx-auto mt-4 mb-4 max-w-md items-center py-5 sm:max-w-lg md:max-w-2xl">
        <span className="relative left-8 items-center">
          <IoIosSearch size={25} />
        </span>

        <input
          className="focus:shadow-outline flex flex-grow rounded-md border py-3 pl-8 focus:border-green-500 focus:outline-none border-gray-500"
          type="text"
          placeholder="City"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <div>
        <Button>Display Weather</Button>
      </div>
    </div>
  );
};

export default HomeScreen;
