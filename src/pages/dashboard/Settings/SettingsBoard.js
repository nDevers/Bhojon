import React from "react";
import FileInput from "../../../components/FileInput";
import Input from "../../../components/Input";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const SettingsBoard = () => {
  // set website title
  useWebsiteTitle('Dashboard | Settings')

  return (
    <div className="my-10">
      <div className="flex flex-col gap-5 items-center justify-center p-2 m-2">
        <Input inputTitle='Website Name' inputType='text' inputPlaceHolder='Website Name' />
        <FileInput fileInputTitle="Website Logo" />
        <FileInput fileInputTitle="Website Favicon" />
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
