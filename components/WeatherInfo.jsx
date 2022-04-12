import React from 'react';

const WeatherInfo = ({ data, date }) => {
  return (
    <>
      <div className="flex w-full items-center justify-center mt-6">
        <div className="grid grid-cols-2 w-full max-w-lg md:hidden">
          {/* left */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Date
            </p>
            <p>{date}</p>
          </div>
          {/* right */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Temp (F)
            </p>
            <p>{data?.main.temp}</p>
          </div>
        </div>

        {/* Desktop view */}

        <div className="hidden md:grid grid-cols-11 w-full max-w-4xl">
          {/* col-1 */}
          <div className="col-span-2 flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Date
            </p>
            <p>{date}</p>
          </div>
          {/* col-2 */}
          <div className="col-span-2 flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Temp (F)
            </p>
            <p>{data?.main.temp}</p>
          </div>
          {/* col-3 */}
          <div className="col-span-2 flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Description
            </p>
            <p>{data?.weather[0].description}</p>
          </div>
          {/* col-4 */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Main
            </p>
            <p>{data?.weather[0].main}</p>
          </div>
          {/* col-5 */}
          <div className="col-span-2 flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Pressure
            </p>
            <p>{data?.main.pressure}</p>
          </div>
          {/* col-6 */}
          <div className="col-span-2 flex flex-col items-center justify-center space-y-2">
            <p className="bg-gray-500 w-full text-center text-white py-2">
              Humidity
            </p>
            <p>{data?.main.humidity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
