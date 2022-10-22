import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsFillSave2Fill } from "react-icons/bs";
import Pagination from "../../../components/Pagination";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const ProductionList = () => {
    const summaryData = [
        {
            name: "Lifetime Orders",
            value: 1000,
        },
        {
            name: "Today Orders",
            value: 100,
        },
        {
            name: "Today Sell",
            value: 80,
        },
        {
            name: "Total Customer",
            value: 8000,
        },
        {
            name: "Total Delivered",
            value: 6000,
        },
        {
            name: "Total Reservation",
            value: 90,
        },
    ];

    const latestSummary = [
        {
            title: "Latest Order",
            data: [
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
            ],
        },
        {
            title: "Delivered Order",
            data: [
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
            ],
        },
        {
            title: "Cancel Order",
            data: [
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
                {
                    name: "Kamal Hassan",
                    phone: "0171742241476",
                    order: 8787,
                    table: "",
                    time: "23:20:04",
                },
            ],
        },
    ];

    // set website title
    useWebsiteTitle('Production | Production List')

    return (
        <div className="border rounded-md">
            <div className="flex items-center justify-between border-b p-2 mb-4">
                <h2 className="uppercase font-semibold">Production List</h2>

                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            className="input input-xs input-bordered"
                        />
                        <button className="btn btn-xs flex items-center gap-x-2 uppercase">
                            <BiSearch /> Search
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-x-4">
                    <div className="form-control">
                        <label className="input-group input-group-xs">
                            <span className="btn btn-xs bg-gray-700">From</span>
                            <input
                                type="date"
                                placeholder="Start Date"
                                className="input input-bordered input-xs"
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-xs">
                            <span className="btn btn-xs bg-gray-700">To</span>
                            <input
                                type="date"
                                placeholder="End Date"
                                className="input input-bordered input-xs"
                            />
                        </label>
                    </div>

                    <button className="btn btn-xs">Search</button>
                    <button className="btn btn-xs">Reset</button>
                </div>
            </div>

            <div className="scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 p-2">
                <table className="table table-zebra table-compact w-full">
                    <thead className="text-gray-600">
                        <tr>
                            <th>SL</th>
                            <th>Food Name</th>
                            <th>Variant Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>1</th>
                            <td>invoice00001</td>
                            <td>Food Panda</td>
                            <td>21-10-2022</td>
                            <td>10000 TK</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Paid</option>
                                    <option>Due</option>
                                    <option>Cancled</option>
                                </select>
                            </td>
                            <td className="flex items-center gap-x-2">
                                <AiFillEdit className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <BsFillSave2Fill className="text-stone-500 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination />
        </div>
    );
};

export default ProductionList;
