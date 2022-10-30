import React from "react";

const Toggle = ({ toggleTitle = "Toggle Title" }) => {
  return (
    <div className="grid grid-cols-2 items-center justify-end w-full md:3/6 lg:w-3/6">
      <h3 className="text-sm md:text-text-[16px] lg:text-[16px] font-medium">{toggleTitle}</h3>
      <input type="checkbox" className="toggle toggle-sm md:toggle-md lg:toggle-md" />
    </div>
  );
};

export default Toggle;
