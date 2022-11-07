import React from "react";
import Button from "../../../../components/Button";
import FileInput from "../../../../components/FileInput";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import useWebsiteTitle from "../../../../hooks/useWebsiteTitle";

const AddCategory = () => {
  // set website title
  useWebsiteTitle("Manage Category | Add Category");

  return (
    <div className="my-10">
      <div className="flex flex-col gap-5 items-center justify-center p-2 m-2">
        <Input
          inputTitle="Category Name"
          inputType="text"
          inputPlaceHolder="Category Name"
        />
        <FileInput fileInputTitle="Category Image" />
        <Select
          selectTitle="Parent Category"
          selectOptions={["Desert", "Drinks", "Soup"]}
        />
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>View Category</h3>
          <div className="flex justify-end">
            <input type="checkbox" className="toggle" />
          </div>
        </div>
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

export default AddCategory;
