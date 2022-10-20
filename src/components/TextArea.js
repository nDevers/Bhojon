import React from "react";

const TextArea = ({
  textAreaTitle = "Textarea Title",
  textAreaPlaceHolder = "Textarea Placeholder",
  textAreaComponentCustomClass = 'grid grid-cols-2 items-center w-full md:4/6 lg:w-3/6',
  textAreaCustomClass = "textarea textarea-bordered textarea-xs md:textarea-sm lg:textarea-sm w-full max-w-xs",
}) => {
  return (
    <div className={textAreaComponentCustomClass}>
      <h3 className="text-sm md:text-text-[16px] lg:text-[16px] font-medium">{textAreaTitle}</h3>
      <textarea
        placeholder={textAreaPlaceHolder}
        className={textAreaCustomClass}
      />
    </div>
  );
};

export default TextArea;
