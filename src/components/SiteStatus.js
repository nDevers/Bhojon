import React from "react";

const SiteStatus = () => {
  return (
    <div className="inline-flex items-center gap-2 text-sm font-medium">
      Status:
      <span className="h-3 w-3 rounded-full bg-green-600"></span>
      <span className="font-medium text-green-600">
        All systems operational
      </span>
    </div>
  );
};

export default SiteStatus;
