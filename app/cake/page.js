"use client"
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Cake = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
      <Head>
        <title>Cake Cutting</title>
        <meta name="description" content="Watch the cake cutting animation!" />
      </Head>

      <main className="flex-1 flex flex-col justify-center items-center py-20">
        <div className="relative">
          <div className="cake">🎂</div>
          <div className="knife animate-cutting">🔪</div>
        </div>
        <p className="mt-4 text-2xl text-white">
          Enjoy the cake cutting!
        </p>

        <Link href="/surprise" className="mt-8 text-xl text-white underline">
          Surprise Link
        </Link>
      </main>

      <style jsx>{`
        .cake {
          font-size: 100px;
          position: relative;
          z-index: 1;
        }
        .knife {
          font-size: 50px;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        @keyframes cutting {
          0% { top: -50px; transform: translateX(-50%) rotate(0deg); }
          50% { top: 20px; transform: translateX(-50%) rotate(45deg); }
          100% { top: 0; transform: translateX(-50%) rotate(0deg); }
        }
        .animate-cutting {
          animation: cutting 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Cake;