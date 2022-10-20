import React from "react";

const LoadingSpinner = () => {
  return (
    <div class="backdrop-blur-sm bg-white/30 ...">
      <div className="flex items-center justify-center h-screen">
        <div
          className="radial-progress text-info animate-spin"
          style={{ "--value": "75", "--size": "4rem", "--thickness": "6px" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
