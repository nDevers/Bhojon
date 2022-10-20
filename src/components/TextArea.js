import React from "react";

const TextArea = ({
  textAreaTitle = "Textarea Title",
  textAreaPlaceHolder = "Textarea Placeholder",
  textAreaCustomClass = "textarea textarea-bordered textarea-xs md:textarea-sm lg:textarea-sm w-full max-w-xs",
}) => {
  return (
    <div className="grid grid-cols-2 items-center w-3/6">
      <h3 className="font-medium">{textAreaTitle}</h3>
      <textarea
        placeholder={textAreaPlaceHolder}
        className={textAreaCustomClass}
      />
    </div>
  );
};

export default TextArea;
