import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

const AddBooking = () => {
    return (
        <div>
            <div className="m-2">
                < Breadcrumbs />
            </div >
            <div className="border rounded-md">
                <h3 className="uppercase font-semibold p-2">Add Booking</h3>
                <div className="border-t">
                    <div className="flex flex-col gap-5 items-center justify-center m-2 md:m-6 lg:m-10">
                        <Input
                            inputTitle="Booking Date"
                            inputType="date"
                        />
                        <Input
                            inputTitle="Start Time"
                            inputType="time"
                        />
                        <Input
                            inputTitle="End Time"
                            inputType="time"
                        />
                        <Input
                            inputTitle="Number of People"
                            inputType="number"
                            inputPlaceHolder="01"
                        />
                        <div className="grid w-full md:w-3/6 lg:w-3/6">
                            <div className="flex justify-end gap-x-2">
                                <Button buttonTitle='Check Availability' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddBooking;
