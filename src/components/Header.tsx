'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-pink-500 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">MyBrand</h1>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md transition"
          >
            Shop
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg w-40 z-10">
              <button
                onClick={() => {
                  router.push('/shop/item1');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-pink-100"
              >
                Item 1
              </button>
              <button
                onClick={() => {
                  router.push('/shop/item2');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-pink-100"
              >
                Item 2
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
