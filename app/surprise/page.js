import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Surprise = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-300">
      <Head>
        <title>Surprise!</title>
        <meta name="description" content="Here's your surprise!" />
      </Head>

      <main className="flex-1 flex flex-col justify-center items-center py-20 space-y-20">
        {/* Kiss Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">💋 Kiss!</h2>
          <Image
            src="/kiss.avif" // Replace with your GIF path
            alt="Kiss"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-xl text-pink-600">
            Sending you a sweet kiss!
          </p>
        </div>

        {/* Back Hug Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">🤗 Back Hug!</h2>
          <Image
            src="/back_hug.jpg" // Replace with your GIF path
            alt="Back Hug"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-xl text-blue-600">
            Sending you a warm back hug!
          </p>
        </div>
        <h1 className='text-4xl font-bold text-blue-600 mb-4'>Now you can head lean my girl 🫠</h1>
      </main>
    </div>
  );
}

export default Surprise;