import React from "react";

const Input = ({
  inputTitle = "Input Title",
  inputType = "text",
  inputPlaceHolder = "Input Placeholder",
  inputComponentsCustomClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center justify-center w-full md:4/6 lg:w-3/6",
  inputCustomClass = "input input-bordered input-sm w-full",
}) => {
  return (
    <div className={inputComponentsCustomClass}>
      <h3 className="text-md md:text-text-[16px] lg:text-[16px] font-medium">{inputTitle}</h3>
      <input
        type={inputType}
        placeholder={inputPlaceHolder}
        className={inputCustomClass}
      />
    </div>
  );
};

export default Input;
