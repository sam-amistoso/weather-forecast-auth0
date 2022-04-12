import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import Header from '../components/Header';
import WeatherInfo from '../components/WeatherInfo';
import Button from '../components/Button';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [todaysDate, setTodaysDate] = useState('');
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    const UserAuthCheck = async () => {
      try {
        if (!user) {
          return router.replace('/');
        }

        const lon = router.query?.lon;
        const lat = router.query?.lat;
        const apiKey = process.env.WEATHER_API;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setWeather(data);

            let d = new Date(),
              month = '' + (d.getMonth() + 1),
              day = '' + d.getDate(),
              year = d.getFullYear();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            setTodaysDate([month, day, year].join('/'));
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };

    UserAuthCheck();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user && !isLoading) {
    return (
      <>
        <div className="w-full">
          <Header />
        </div>
        <WeatherInfo data={weather} date={todaysDate} />
        <div
          onClick={() => router.replace('/')}
          className="flex flex-grow w-full justify-end mt-10"
        >
          <Button>Back</Button>
        </div>
      </>
    );
  }
};

export default Weather;
