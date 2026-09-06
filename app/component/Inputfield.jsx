"use client";
import React, { useState, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  // Update input text if URL search param changes externally
  useEffect(() => {
    setSearch(searchParams.get("q") || "");
  }, [searchParams]);

  const handleInput = (e) => {
    const val = e.target.value;
    setSearch(val);

    // Update URL to trigger Next.js Server Component to filter data
    if (val) {
      router.replace(`?q=${val}`);
    } else {
      router.replace(`?`);
    }
  }

  return (
    <div className="relative w-full group mb-4">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 group-focus-within:text-green-600 transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={handleInput}
        className="block w-full pl-12 pr-12 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-bold text-lg placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all shadow-sm hover:border-gray-300 hover:shadow-md"
      />

      {/* Clear Button (appears only when typing) */}
      {search && (
        <button
          onClick={() => handleInput({ target: { value: '' } })}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-green-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 bg-gray-100 rounded-md p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function Inputfield() {
  return (
    <Suspense fallback={
      <div className="w-full h-[64px] bg-gray-200 animate-pulse rounded-xl mb-4"></div>
    }>
      <SearchInput />
    </Suspense>
  );
}
