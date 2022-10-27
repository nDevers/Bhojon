import React from "react";
import { AiFillDelete, AiFillEdit, AiFillInfoCircle } from "react-icons/ai";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Pagination from "../../../components/Pagination";
import Select from "../../../components/Select";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const StockReport = () => {
  // set website title
  useWebsiteTitle("Report | Stock Report");

  return (
    <div>
      <div className="border rounded-md">
        <h3 className="uppercase font-semibold p-2">Stock Report</h3>
        <div className="border-t">
          <div className="flex flex-col gap-y-5 m-2 md:m-6 lg:mx-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-x-12 lg:gap-y-5 items-center">
              <Select
                selectTitle="Food Name"
                selectOptions={[
                  "Food Panda",
                  "Hungry Naki",
                  "Coca Cola",
                  "Shopno",
                ]}
                selectComponentsCustomclassName="flex items-center justify-between w-50"
              />
              <Input
                inputTitle="From"
                inputType="date"
                inputComponentsCustomclassName="flex items-center justify-between w-50"
              />
              <Input
                inputTitle="To"
                inputType="date"
                inputComponentsCustomclassName="flex items-center justify-between w-50"
              />
            </div>

            <div className="flex justify-end gap-x-2">
              <Button
                customclassName="btn btn-xs md:btn-sm lg:btn-sm btn-error text-xs text-white"
                buttonTitle="Reset"
              />
              <Button buttonTitle="Save" />
            </div>
          </div>

          <div className="  -smooth   bar-thin   bar-thumb-gray-400 p-2">
            <table className="table table-zebra table-compact w-full">
              <thead className="text-gray-600">
                <tr>
                  <th>SL</th>
                  <th>Food Name</th>
                  <th>In Qty</th>
                  <th>Out Qty</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <th>1</th>
                  <td>Pizza</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td className="flex items-center gap-x-2">
                    <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                    <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                    <AiFillInfoCircle className="text-indigo-400 text-2xl border rounded-md p-1" />
                  </td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>Pizza</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td className="flex items-center gap-x-2">
                    <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                    <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                    <AiFillInfoCircle className="text-indigo-400 text-2xl border rounded-md p-1" />
                  </td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>Pizza</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td className="flex items-center gap-x-2">
                    <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                    <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                    <AiFillInfoCircle className="text-indigo-400 text-2xl border rounded-md p-1" />
                  </td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>Pizza</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td className="flex items-center gap-x-2">
                    <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                    <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                    <AiFillInfoCircle className="text-indigo-400 text-2xl border rounded-md p-1" />
                  </td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>Pizza</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td className="flex items-center gap-x-2">
                    <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                    <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                    <AiFillInfoCircle className="text-indigo-400 text-2xl border rounded-md p-1" />
                  </td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>Pizza</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td className="flex items-center gap-x-2">
                    <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                    <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                    <AiFillInfoCircle className="text-indigo-400 text-2xl border rounded-md p-1" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default StockReport;
