import React from "react";
import FileInput from "../../../components/FileInput";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

const AddUser = () => {
  return (
    <div>
      <h3 className="my-6 md:my-8 lg:my-10 pl-2">
        This section is use Only for Store Management.
      </h3>
      <div className="border rounded-md">
        <h3 className="uppercase font-semibold p-2 md:p-3 lg:p-3">Add User</h3>
        <div className="border-t">
          <div className="flex flex-col gap-5 items-center justify-center m-4 md:m-6 lg:m-10">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
