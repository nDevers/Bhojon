import React from "react";

const Input = ({
  inputTitle = "Input Title",
  inputType = "text",
  inputPlaceHolder = "Input Placeholder",
  inputCustomClass = "input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs",
}) => {
  return (
    <div className="grid grid-cols-2 items-center w-full md:4/6 lg:w-3/6">
      <h3 className="text-sm md:text-text-[16px] lg:text-[16px] font-medium">{inputTitle}</h3>
      <input
        type={inputType}
        placeholder={inputPlaceHolder}
        className={inputCustomClass}
      />
    </div>
  );
};

export default Input;
