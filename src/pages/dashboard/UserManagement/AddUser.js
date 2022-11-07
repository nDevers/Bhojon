import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Button from "../../../components/Button";
import FileInput from "../../../components/FileInput";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import Toggle from "../../../components/Toggle";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const AddUser = () => {
  // set website title
  useWebsiteTitle("User | Add User");

  return (
    <div>
      <div className="m-2">
        <Breadcrumbs />
      </div>
      <div className="border rounded-md">
        <h3 className="uppercase font-semibold p-2">Add User</h3>
        <div className="border-t">
          <div className="flex flex-col gap-5 items-center justify-center m-2 md:m-6 lg:m-10">
            <Input
              inputTitle="First Name"
              inputType="text"
              inputPlaceHolder="First Name"
            />
            <Input
              inputTitle="Last Name"
              inputType="text"
              inputPlaceHolder="Last Name"
            />
            <FileInput fileInputTitle="Profile Picture" />
            <Input
              inputTitle="Email Address"
              inputType="email"
              inputPlaceHolder="company@email.com"
            />
            <Input
              inputTitle="Password"
              inputType="password"
              inputPlaceHolder="Password"
            />
            <Input
              inputTitle="Confirm Password"
              inputType="password"
              inputPlaceHolder="Confirm Password"
            />
            <Input
              inputTitle="Phone"
              inputType="tel"
              inputPlaceHolder="+8801700000000"
            />
            <Input
              inputTitle="Address"
              inputType="text"
              inputPlaceHolder="Address"
            />
            <Select
              selectTitle="Customer Type"
              selectOptions={["Active", "Inactive"]}
            />
            <Toggle toggleTitle="Hide User" />
            <div className="grid w-full md:w-3/6 lg:w-3/6">
              <div className="flex justify-end gap-x-2">
                <Button
                  customclassName="btn btn-sm btn-primary text-xs text-white"
                  buttonTitle="Reset"
                />
                <Button buttonTitle="Save" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
