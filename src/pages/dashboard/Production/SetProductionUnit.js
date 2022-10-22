import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const SetProductionUnit = () => {
    // set website title
    useWebsiteTitle('Production | Set Production Unit')

    return (
        <div>
            <div className="border rounded-md">
                <h3 className="uppercase font-semibold p-2">Set Production Unit</h3>
                <div className="flex flex-col gap-y-5 border-t">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-x-12 lg:gap-y-5 items-center m-2 md:m-6 lg:mx-10">
                        <Select
                            selectTitle="Food Name"
                            selectOptions={["Food Panda", "Hungry Naki", "Coca Cola", "Shopno"]}
                            selectComponentsCustomClass="flex items-center justify-between w-50"
                        />
                        <Select
                            selectTitle="Variant Name"
                            selectOptions={["Food Panda", "Hungry Naki", "Coca Cola", "Shopno"]}
                            selectComponentsCustomClass="flex items-center justify-between w-50"
                        />
                    </div>

                    <div className="scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 p-2">
                        <table className="table table-compact w-full">
                            <thead className="text-gray-600">
                                <tr>
                                    <th className="border border-gray-400">SL</th>
                                    <th className="border border-gray-400">Item Information</th>
                                    <th className="border border-gray-400">Qty</th>
                                    <th className="border border-gray-400">Price</th>
                                    <th className="border border-gray-400">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover border border-gray-400">
                                    <th className="border border-gray-400">1</th>
                                    <td className="border border-gray-400">
                                        <select className="select select-error select-xs w-full max-w-xs">
                                            <option selected>Rice</option>
                                            <option>Onion</option>
                                            <option>Salt</option>
                                            <option>Tea</option>
                                        </select>
                                    </td>
                                    <td className="border border-gray-400">00 TK</td>
                                    <td className="border border-gray-400">00 TK</td>
                                    <td className="flex items-center gap-x-2">
                                        <button className="btn btn-xs btn-error text-xs text-white">
                                            <AiFillDelete className="text-sm mr-1" />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover border border-gray-400">
                                    <th></th>
                                    <td>
                                        <button className="btn btn-xs btn-info text-xs text-white">
                                            <BiAddToQueue className="text-sm mr-1" />
                                            Add More Item
                                        </button>
                                    </td>
                                    <td className="border-r border-gray-400 font-bold">Paid Ammount :</td>
                                    <td className="border border-gray-400 font-bold">00 TK</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="m-2">
                        <div className="flex justify-end gap-x-2">
                            <Button customClass='btn btn-sm btn-error text-xs text-white' buttonTitle='Reset' />
                            <Button buttonTitle='Save' />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SetProductionUnit;
