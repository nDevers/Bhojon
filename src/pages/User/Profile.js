import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import FileInput from "../../components/FileInput";
import Input from "../../components/Input";

const UserSettings = () => {
    return (
        <div className="mx-2 md:mx-32 lg:mx-40 h-screen">
            <div className="m-2">
                < Breadcrumbs />
            </div >
            <div className="border rounded-md">
                <h3 className="uppercase font-semibold p-2">Profile</h3>
                <div className="border-t">
                    <div className="flex flex-col gap-5 items-center justify-center m-2 md:m-6 lg:m-10">
                        <Input
                            inputTitle="First Name"
                            inputType="text"
                            inputPlaceHolder="First Name"
                        />
                        <Input
                            inputTitle="Last Name"
                            inputType="text"
                            inputPlaceHolder="Last Name"
                        />
                        <FileInput fileInputTitle="Profile Picture" />
                        <Input
                            inputTitle="Address"
                            inputType="text"
                            inputPlaceHolder="Address"
                        />
                        <div className="grid w-full md:w-3/6 lg:w-3/6">
                            <div className="flex justify-end gap-x-2">
                                <Button buttonTitle='Save' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserSettings;
