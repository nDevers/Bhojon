import React from "react";
import Logo from "./Logo";

const DashboardFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer" className="bg-gray-50">
      <div className="px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo customClass='flex gap-x-2 items-center text-md text-center text-black-50 font-semibold font-mono uppercase' />

          <p className="text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
