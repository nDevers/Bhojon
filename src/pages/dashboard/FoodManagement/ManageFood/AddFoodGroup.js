import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import Button from "../../../../components/Button";
import FileInput from "../../../../components/FileInput";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import TextArea from "../../../../components/TextArea";
import Toggle from "../../../../components/Toggle";

const AddFoodGroup = () => {
  return (
    // <div>
    //   <div className="flex flex-col gap-5 justify-between p-2">
    //     <div className="grid grid-cols-2 items-center w-3/6">
    //       <h3>Category Name</h3>
    //       <input
    //         type="text"
    //         placeholder="Category Name"
    //         className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
    //       />
    //     </div>
    //     <div className="grid grid-cols-2 items-center w-3/6">
    //       <h3>Offer Start Date</h3>
    //       <input
    //         type="date"
    //         placeholder="Offer Start Date"
    //         className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
    //       />
    //     </div>
    //     <div className="grid grid-cols-2 items-center w-3/6">
    //       <h3>Offer End Date</h3>
    //       <input
    //         type="date"
    //         placeholder="Offer End Date"
    //         className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
    //       />
    //     </div>
    //     <div className="grid grid-cols-2 items-center w-3/6">
    //       <h3>Parent Category</h3>
    //       <select className="select select-bordered select-xs md:select-sm lg:select-sm w-full max-w-xs">
    //         <option disabled selected>
    //           Desert
    //         </option>
    //         <option>Drinks</option>
    //         <option>Soup</option>
    //       </select>
    //     </div>
    //     <div className="grid grid-cols-2 items-center w-3/6">
    //       <h3>View Category</h3>
    //       <div className="flex justify-end">
    //         <input type="checkbox" className="toggle" />
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-2 items-center w-3/6">
    //       <h3>Image</h3>
    //       <div className="flex items-center gap-x-4">
    //         <input type="file" id="myfile" name="myfile" />
    //         <button className="p-1 text-cyan-400 border-0">
    //           <AiFillInfoCircle />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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

export default AddFoodGroup;
