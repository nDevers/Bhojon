import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Button from "../../../components/Button";
import FileInput from "../../../components/FileInput";
import Input from "../../../components/Input";
import Toggle from "../../../components/Toggle";

const UserSettings = () => {
    return (
        <div className="mx-2 md:mx-32 lg:mx-40 h-screen">
            <div className="m-2">
                < Breadcrumbs />
            </div >
            <div className="border rounded-md">
                <h3 className="uppercase font-semibold p-2">Settings</h3>
                <div className="border-t">
                    <div className="flex flex-col gap-5 items-center justify-center m-2 md:m-6 lg:m-10">
                        <Input
                            inputTitle="Email Address"
                            inputType="email"
                            inputPlaceHolder="company@email.com"
                        />
                        <Input
                            inputTitle="Password"
                            inputType="password"
                            inputPlaceHolder="Password"
                        />
                        <Input
                            inputTitle="Confirm Password"
                            inputType="password"
                            inputPlaceHolder="Confirm Password"
                        />
                        <Input
                            inputTitle="Phone"
                            inputType="tel"
                            inputPlaceHolder="+8801700000000"
                        />
                        <Toggle toggleTitle='Deactivate Account' />
                        <Toggle toggleTitle='Delete Account' />
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
