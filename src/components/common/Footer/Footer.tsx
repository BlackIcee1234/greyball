import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-gray-800 py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center">
          <p className="text-sm md:text-base lg:text-lg text-center sm:text-left">
            Created by: Axel Andree Pérez Reyes
          </p>
          <p className="text-sm md:text-base lg:text-lg text-center sm:text-right">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
