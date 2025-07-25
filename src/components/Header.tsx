'use client';

import { Mea_Culpa } from 'next/font/google';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const meaCulpa = Mea_Culpa({
  subsets: ['latin'],
  weight: '400',
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className={`bg-pink-500 text-white px-6 py-4 shadow-md flex items-center justify-between ${meaCulpa.className}`}>
      <div className="flex items-center space-x-7">
        <h1 className="text-7xl">Vanity</h1>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md transition text-4xl"
          >
            Shop
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-56 z-10 text-4xl">
              <button
                onClick={() => {
                  router.push('/shop/item1');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-pink-100"
              >
                Ready 2 Wear
              </button>
              <button
                onClick={() => {
                  router.push('/shop/item2');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-pink-100"
              >
                Couture
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
