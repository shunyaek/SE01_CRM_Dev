import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg border-b-4 border-green-600">
      <div className="container mx-auto flex flex-wrap px-8 py-2 flex-row md:flex-row items-center justify-between">
        <a href="shunyaek.se" className="flex title-font font-medium items-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-green-600 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="px-2 text-xl">klientrila.to</span>
        </a>
        <button className="shadow items-center text-white bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base">Sign-In</button>
      </div>
    </header>
  );
};

export default Header;
