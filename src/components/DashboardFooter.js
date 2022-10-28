import React from "react";
import Logo from "./Logo";

const DashboardFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer" class="bg-gray-50">
      <div class="px-4 py-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <Logo />

          <p class="text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
