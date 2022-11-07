import React from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Pagination from "../../../components/Pagination";
import Select from "../../../components/Select";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const SellReport = () => {
  // set website title
  useWebsiteTitle("Report | Sell Report");

  return (
    <div>
      <div className="border rounded-md">
        <h3 className="uppercase font-semibold p-2">Sell Report</h3>
        <div className="border-t">
          <div className="flex flex-col gap-y-5 m-2 md:m-6 lg:mx-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-x-12 lg:gap-y-5 items-center">
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
              <Select
                selectTitle="Customer Type"
                selectOptions={["Dine In", "Take Away", "Home Delivary"]}
                selectComponentsCustomclassName="flex items-center justify-between w-50"
              />
            </div>

            <div className="flex justify-end gap-x-2">
              <Button
                customclassName="btn btn-xs md:btn-sm lg:btn-sm btn-primary text-xs text-white"
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
                  <th>Sell Date</th>
                  <th>Invoice No</th>
                  <th>Customer ID</th>
                  <th>Waiter</th>
                  <th>Sales Type</th>
                  <th>Total Discount</th>
                  <th>Third Party Commission</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
                </tr>
                <tr className="hover">
                  <th>1</th>
                  <td>01-01-2023</td>
                  <td>Invoice-0001</td>
                  <td>#0001</td>
                  <td>John Doe</td>
                  <td>Take Away</td>
                  <td>30</td>
                  <td>0</td>
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

export default SellReport;
