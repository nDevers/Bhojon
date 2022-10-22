import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import Input from "../../../components/Input";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const SettingsBoard = () => {
  // set website title
  useWebsiteTitle('Dashboard | Settings')

  return (
    <div className="my-10">
      <div className="flex flex-col gap-5 items-center justify-center p-2 m-2">
        <Input inputTitle='Website Name' inputType='text' inputPlaceHolder='Website Name' />
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
          <h3>Website Favicon</h3>
          <div className="flex items-center gap-x-4">
            <input type="file" id="myfile" name="myfile" />
            <button className="p-1 text-cyan-400 border-0">
              <AiFillInfoCircle />
            </button>
          </div>
        </div>
        <Input inputTitle='Address' inputType='text' inputPlaceHolder='Address' />
        <Input inputTitle='Email Address' inputType='email' inputPlaceHolder='company@email.com' />
        <Input inputTitle='Phone' inputType='tel' inputPlaceHolder='+8801700000000' />
        <Input inputTitle='Opening Time' inputType='time' />
        <Input inputTitle='Closing Time' inputType='time' />
      </div>
    </div>
  );
};

export default SettingsBoard;
