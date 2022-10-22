import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const AddProduction = () => {
    // set website title
    useWebsiteTitle('Production | Add Production')

    return (
        <div>
            <div className="border rounded-md">
                <h3 className="uppercase font-semibold p-2">Add Production</h3>
                <div className="flex flex-col gap-y-5 m-2 md:m-6 lg:mx-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-x-12 lg:gap-y-5 items-center">
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
                        <Input
                            inputTitle="Production Date"
                            inputType="date"
                            inputComponentsCustomClass='flex items-center justify-between w-50'
                        />
                        <Input
                            inputTitle="Expiry Date"
                            inputType="date"
                            inputComponentsCustomClass='flex items-center justify-between w-50'
                        />
                        <Input
                            inputTitle="Serving Unit"
                            inputType="number"
                            inputPlaceHolder="Serving Unit"
                            inputComponentsCustomClass='flex items-center justify-between w-50'
                        />
                    </div>

                    <div className="flex justify-end gap-x-2">
                        <Button customClass='btn btn-xs md:btn-sm lg:btn-sm btn-error text-xs text-white' buttonTitle='Reset' />
                        <Button buttonTitle='Save' />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddProduction;
