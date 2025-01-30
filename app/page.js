import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Head>
        <title>Birthday Website</title>
        <meta name="description" content="Celebrate your special day with us!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 flex flex-col justify-center items-center py-10 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-bounce">
          Happy Birthday My dear Bacteria!
        </h1>

        <Image
          src="/photo.jpg" // Replace with your image path
          alt="Birthday Celebration"
          width={300} // Adjust width as needed
          height={200} // Adjust height as needed
          className="rounded-lg shadow-lg mt-4 md:mt-8"
        />

        <p className="mt-2 md:mt-4 text-xl md:text-2xl text-white animate-fade-in">
          Welcome to your special birthday website.
        </p>

        <Link href="/cake" className="mt-4 md:mt-8 text-lg md:text-xl text-white underline">
          Go to Cake Cutting
        </Link>
      </main>
      <footer className="w-full h-16 md:h-24 border-t border-white flex justify-center items-center">
        <p className="text-white text-sm md:text-base">Made with ❤️ by your viruss for your special day!</p>
      </footer>
    </div>
  );
}
export default Home;