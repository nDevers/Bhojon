import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import Pagination from '../../../components/Pagination';

const PurchaseReport = () => {
    return (

        <div className="border rounded-md">
            <div className="flex items-center justify-between border-b p-2 mb-4">
                <h2 className="uppercase font-semibold">Purchase Report</h2>

                <div className="flex items-center gap-x-4">
                    <div className="form-control">
                        <label className="input-group input-group-xs">
                            <span className="btn btn-xs bg-gray-700">Date</span>
                            <input
                                type="date"
                                placeholder="Start Date"
                                className="input input-bordered input-xs"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-xs">
                            <span className="btn btn-xs bg-gray-700">Time</span>
                            <input
                                type="time"
                                className="input input-bordered input-xs"
                            />
                        </label>
                    </div>

                    <button className="btn btn-xs">Search</button>
                    <button className="btn btn-xs">Reset</button>
                </div>
            </div>

            <div className="  -smooth   bar-thin   bar-thumb-gray-400 p-2">
                <table className="table table-zebra table-compact w-full">
                    <thead className="text-gray-600">
                        <tr>
                            <th>SL</th>
                            <th>Purchase Date</th>
                            <th>Invoice No</th>
                            <th>Supplier Name</th>
                            <th>Ammount</th>
                            <th>Paid Date</th>
                            <th>Paid By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>01-01-2023</td>
                            <td>Invoice-00001</td>
                            <td>Food Panda</td>
                            <td>25000 TK</td>
                            <td>01-01-2023</td>
                            <td>Manager</td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillDelete className="text-rose-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination />
        </div>
    );
};

export default PurchaseReport;