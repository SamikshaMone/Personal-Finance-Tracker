import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-end items-center">
      <span className="text-teal-600 font-semibold mr-4">samiksha</span>
      <button className="border border-teal-600 text-teal-600 px-4 py-1 rounded hover:bg-teal-50 transition">
        Logout
      </button>
    </header>
  );
};

export default Navbar;

