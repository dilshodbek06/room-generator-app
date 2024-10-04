"use client";

import { useState } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="absolute">
      <section className="fixed flex items-center justify-between max-w-4xl p-3 px-4 mx-auto  border-t border-gray-200 shadow-sm bg-gray-900 left-12 bottom-14 dark:shadow-gray-900 shadow-gray-100 md:gap-x-4 dark:border-gray-700 rounded-2xl">
        <p className="text-[12px] text-gray-300 dark:text-gray-300">
          Please don&apos;t upload bad or prohibited pictures
        </p>

        <button
          onClick={() => setIsVisible(false)}
          className="flex items-center justify-center text-gray-400 transition-colors duration-300 rounded-full shrink-0 dark:text-gray-200 dark:hover:bg-gray-700 w-7 h-7 focus:outline-none hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default CookieBanner;
