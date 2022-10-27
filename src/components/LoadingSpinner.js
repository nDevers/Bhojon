import React from "react";
import useWebsiteTitle from "../hooks/useWebsiteTitle";

const LoadingSpinner = () => {
  // set website title
  useWebsiteTitle("Bhojon | Loading Spinner");

  return (
    <div className="backdrop-blur-sm bg-white/30 ...">
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
