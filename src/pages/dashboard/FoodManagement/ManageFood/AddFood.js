import React from "react";
import Button from "../../../../components/Button";
import FileInput from "../../../../components/FileInput";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import TextArea from "../../../../components/TextArea";
import Toggle from "../../../../components/Toggle";
import useWebsiteTitle from "../../../../hooks/useWebsiteTitle";

const AddFood = () => {
  // set website title
  useWebsiteTitle('Manage Food | Add Food')

  return (
    <div className="my-10">
      <div className="flex flex-col gap-5 items-center justify-center p-2 m-2">
        <Input
          inputTitle="Food Name"
          inputType="text"
          inputPlaceHolder="Food Name"
        />
        <FileInput fileInputTitle="Food Image" />
        <Select
          selectTitle="Category"
          selectOptions={["Desert", "Drinks", "Soup"]}
        />
        <Select
          selectTitle="Menu"
          selectOptions={["Breakfast", "Lunch", "Dinner"]}
        />
        <Select
          selectTitle="Select Kitchen"
          selectOptions={["Thai", "Mexican", "American"]}
        />
        <Input
          inputTitle="Components"
          inputType="text"
          inputPlaceHolder="Components"
        />
        <Input inputTitle="Notes" inputType="text" inputPlaceHolder="Notes" />
        <TextArea
          textAreaTitle="Description"
          textAreaPlaceHolder="Description"
        />
        <Input inputTitle="Vat" inputType="number" inputPlaceHolder="Vat" />
        <Input inputTitle="Cooking Time" inputType="time" />
        <Toggle toggleTitle="View Food" toggleDefaultValue="checked " />
        <div className="grid items-center justify-end w-3/6">
          <div className="flex justify-end gap-x-2">
            <Button
              customClass="btn btn-sm btn-error text-xs text-white"
              buttonTitle="Reset"
            />
            <Button buttonTitle="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
