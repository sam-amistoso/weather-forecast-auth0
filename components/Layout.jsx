import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Weather Forecast V2</title>
        <meta name="description" content="Show current weather by City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col max-w-md md:max-w-xl lg:max-w-3xl w-full h-full bg-white mx-auto items-center justify-center p-6">
        {children}
      </main>
    </>
  );
};

export default Layout;
