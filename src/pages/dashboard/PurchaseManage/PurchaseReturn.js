import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Button from "../../../components/Button";
import Select from "../../../components/Select";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const PurchaseReturn = () => {
    // set website title
    useWebsiteTitle('Purchase Manage | Purchase Return')

    return (
        <div>
            <div className="m-2">
                < Breadcrumbs />
            </div >
            <div className="border rounded-md">
                <h3 className="uppercase font-semibold p-2">Purchase Return</h3>
                <div className="border-t">
                    <div className="flex flex-col gap-5 items-center justify-center m-2 md:m-6 lg:m-10">
                        <Select
                            selectTitle="Supplier name"
                            selectOptions={["Food Panda", "Hungry Naki"]}
                        />
                        <Select
                            selectTitle="Invoice"
                            selectOptions={["invoice-00001", "invoice-00002"]}
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

export default PurchaseReturn;
