import React from "react";
import Button from "../../../../components/Button";
import FileInput from "../../../../components/FileInput";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import TextArea from "../../../../components/TextArea";
import Toggle from "../../../../components/Toggle";
import useWebsiteTitle from "../../../../hooks/useWebsiteTitle";

const AddFoodGroup = () => {
  // set website title
  useWebsiteTitle("Manage Food | Add Food Group");

  return (
    <div className="my-10">
      <div className="flex flex-col gap-5 items-center justify-center p-2 m-2">
        <Select
          selectTitle="Category"
          selectOptions={["Desert", "Drinks", "Soup"]}
        />
        <Input
          inputTitle="Food Name"
          inputType="text"
          inputPlaceHolder="Food Name"
        />
        <Input
          inputTitle="Component"
          inputType="text"
          inputPlaceHolder="Component"
        />
        <Input inputTitle="Notes" inputType="text" inputPlaceHolder="Notes" />
        <TextArea
          textAreaTitle="Description"
          textAreaPlaceHolder="Description"
        />
        <FileInput fileInputTitle="Image" />
        <Toggle toggleTitle="View Group" />
        <div className="grid items-center justify-end w-3/6">
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
  );
};

export default AddFoodGroup;
