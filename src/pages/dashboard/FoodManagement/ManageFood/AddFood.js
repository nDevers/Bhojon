import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const AddFood = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-between p-2">
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Category Name</h3>
          <input
            type="text"
            placeholder="Category Name"
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Offer Start Date</h3>
          <input
            type="date"
            placeholder="Offer Start Date"
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Offer End Date</h3>
          <input
            type="date"
            placeholder="Offer End Date"
            className="input input-bordered input-xs md:input-sm lg:input-sm w-full max-w-xs"
          />
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Parent Category</h3>
          <select className="select select-bordered select-xs md:select-sm lg:select-sm w-full max-w-xs">
            <option disabled selected>
              Desert
            </option>
            <option>Drinks</option>
            <option>Soup</option>
          </select>
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>View Category</h3>
          <div className="flex justify-end">
            <input type="checkbox" className="toggle" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-3/6">
          <h3>Image</h3>
          <div className="flex items-center gap-x-4">
            <input type="file" id="myfile" name="myfile" />
            <button className="p-1 text-cyan-400 border-0">
              <AiFillInfoCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
