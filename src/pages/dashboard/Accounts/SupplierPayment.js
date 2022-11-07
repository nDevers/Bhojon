import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import TextArea from "../../../components/TextArea";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const SupplierPayment = () => {
  // set website title
  useWebsiteTitle("Account | Supplier Payment");

  return (
    <div>
      <div>
        <div className="border rounded-md">
          <h3 className="uppercase font-semibold p-2">Supplier Payment</h3>
          <div className="flex flex-col gap-y-5 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-x-12 lg:gap-y-5 items-center m-2 md:m-6 lg:mx-10">
              <Select
                selectTitle="Voucher No"
                selectOptions={["Invoice-0001", "Invoice-0002", "Invoice-0003"]}
                selectComponentsCustomclassName="flex items-center justify-between w-50"
              />
              <Select
                selectTitle="Payment Type"
                selectOptions={["Cash", "Card", "Mobile Banking"]}
                selectComponentsCustomclassName="flex items-center justify-between w-50"
              />
              <Input
                inputTitle="Date"
                inputType="date"
                inputComponentsCustomclassName="flex items-center justify-between w-50"
              />
              <TextArea
                textAreaTitle="Remarks"
                textAreaPlaceHolder="Remarks"
                textAreaComponentCustomclassName="flex items-center justify-between w-50"
              />
            </div>

            <table className="table table-compact w-full">
              <thead className="text-gray-600">
                <tr>
                  <th className="border border-gray-400">SL</th>
                  <th className="border border-gray-400">Supplier Name</th>
                  <th className="border border-gray-400">Code</th>
                  <th className="border border-gray-400">Amount</th>
                  <th className="border border-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover border border-gray-400">
                  <th className="border border-gray-400">1</th>
                  <td className="border border-gray-400">
                    <select className="select select-primary select-xs w-full max-w-xs">
                      <option selected>Food Panda</option>
                      <option>Hungry Naki</option>
                    </select>
                  </td>
                  <td className="border border-gray-400">
                    <input
                      type="text"
                      placeholder="Code"
                      className="input input-bordered input-xs w-full max-w-xs"
                    />
                  </td>
                  <td className="border border-gray-400">
                    <input
                      type="text"
                      placeholder="Ammount"
                      className="input input-bordered input-xs w-full max-w-xs"
                    />
                  </td>
                  <td className="flex items-center gap-x-2">
                    <button className="btn btn-xs btn-primary text-xs text-white">
                      <AiFillDelete className="text-sm mr-1" />
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="hover border border-gray-400">
                  <td></td>
                  <td>
                    <button className="btn btn-xs btn-info text-xs text-white">
                      <BiAddToQueue className="text-sm mr-1" />
                      Add More Item
                    </button>
                  </td>
                  <td className="border-r border-gray-400 font-bold">
                    Paid Ammount :
                  </td>
                  <td className="border border-gray-400 font-bold">00 TK</td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="m-2">
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

export default SupplierPayment;
