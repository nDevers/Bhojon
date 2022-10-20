import React from "react";

const Toggle = ({
  toggleTitle = "Toggle Title",
  toggleDefaultValue = "checked",
}) => {
  return (
    <div className="grid grid-cols-2 items-center w-3/6">
      <h3 className="font-medium">{toggleTitle}</h3>
      <div className="flex justify-end">
        <input type="checkbox" className="toggle" />
      </div>
    </div>
  );
};

export default Toggle;
