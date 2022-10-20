import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const SettingsBoard = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-5 items-center justify-center p-2 m-2">
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Website Name</h3>
          <input
            type="text"
            placeholder="Website Name"
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Website Logo</h3>
          <div className="flex items-center gap-x-4">
            <input type="file" id="myfile" name="myfile" />
            <button className="p-1 text-cyan-400 border-0">
              <AiFillInfoCircle />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Address</h3>
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Email Address</h3>
          <input
            type="email"
            placeholder="company@email.com"
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Phone</h3>
          <input
            type="tel"
            placeholder="+8801700000000"
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Opening Time</h3>
          <input
            type="time"
            placeholder=""
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Closing Time</h3>
          <input
            type="time"
            placeholder=""
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsBoard;
