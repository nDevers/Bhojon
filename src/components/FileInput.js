import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const FileInput = ({
  fileInputTitle = "File Input Title",
  fileButtonColor = "text-cyan-400",
  fileComponentCustomClass = "grid grid-cols-2 items-center w-full md:4/6 lg:w-3/6"
}) => {
  return (
    <div className={fileComponentCustomClass}>
      <h3 className="text-sm md:text-text-[16px] lg:text-[16px] font-medium">{fileInputTitle}</h3>
      <div className="flex items-center gap-x-4">
        <input type="file" id="myfile" name="myfile" />
        <button className={`p-1 ${fileButtonColor} border-0`}>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-warning">
              <AiFillInfoCircle className="text-lg" />
            </label>
            <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-box w-64">
              <div className="card-body text-black text-center">
                <h2 className="text-xl text-warning">PNG and JPEG</h2>
                <p>file types are supported only.</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FileInput;
