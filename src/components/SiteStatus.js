import React from "react";

const SiteStatus = () => {
  return (
    <div class="inline-flex items-center gap-2 text-sm font-medium">
      Status:
      <span class="h-3 w-3 rounded-full bg-green-600"></span>
      <span class="font-medium text-green-600">All systems operational</span>
    </div>
  );
};

export default SiteStatus;
