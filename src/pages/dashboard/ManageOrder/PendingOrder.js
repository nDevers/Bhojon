import React from 'react';
import { AiFillEye, AiFillPrinter } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';

const PendingOrder = () => {
    const summaryData = [
        {
            name: 'Lifetime Orders',
            value: 1000
        },
        {
            name: 'Today Orders',
            value: 100
        },
        {
            name: 'Today Sell',
            value: 80
        },
        {
            name: 'Total Customer',
            value: 8000
        },
        {
            name: 'Total Delivered',
            value: 6000
        },
        {
            name: 'Total Reservation',
            value: 90
        }
    ];

    const latestSummary = [
        {
            title: 'Latest Order',
            data: [
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },

            ]
        },
        {
            title: 'Delivered Order',
            data: [
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },

            ]
        },
        {
            title: 'Cancel Order',
            data: [
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },
                {
                    name: 'Kamal Hassan',
                    phone: '0171742241476',
                    order: 8787,
                    table: '',
                    time: '23:20:04'
                },

            ]
        }
    ];

    // set website title
    useWebsiteTitle('Manage Order | Pending Order')

    return (
        <div className='border rounded-md'>
            <div className='flex items-center justify-between border-b p-2 mb-4'>
                <h2 className='uppercase font-semibold'>Pending Order</h2>

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-xs input-bordered" />
                        <button className="btn btn-xs flex items-center gap-x-2 uppercase">
                            <BiSearch /> Search
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-x-4'>
                    <div className="form-control">
                        <label className="input-group input-group-xs">
                            <span className='btn btn-xs bg-gray-700'>From</span>
                            <input type="date" placeholder="Start Date" className="input input-bordered input-xs" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group input-group-xs">
                            <span className='btn btn-xs bg-gray-700'>To</span>
                            <input type="date" placeholder="End Date" className="input input-bordered input-xs" />
                        </label>
                    </div>

                    <button className="btn btn-xs">Search</button>
                    <button className="btn btn-xs">Reset</button>
                </div>
            </div>

            <div className='scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 p-2'>
                <table className="table table-zebra table-compact w-full">
                    <thead className='text-gray-600'>
                        <tr>
                            <th>SL</th>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Customer Type</th>
                            <th>Waiter</th>
                            <th>Table</th>
                            <th>Order Date</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>
                                <select className="select select-error select-xs w-fullmax-w-xs">
                                    <option selected>Pending</option>
                                    <option>Completed</option>
                                    <option>Canceled</option>
                                </select>
                            </td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td className='flex items-center gap-x-2'>
                                <AiFillEye className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillPrinter className="text-violet-400 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr className="active">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Zemlak, Daniel and Leannon</td>
                            <td>United States</td>
                            <td>
                                <select className="select select-warning select-xs w-fullmax-w-xs">
                                    <option >Pending</option>
                                    <option selected>Completed</option>
                                    <option>Canceled</option>
                                </select>
                            </td>
                            <td>Purple</td>
                            <td>Purple</td>
                            <td className='flex items-center gap-x-2'>
                                <AiFillEye className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillPrinter className="text-violet-400 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Carroll Group</td>
                            <td>China</td>
                            <td>
                                <select className="select select-info select-xs w-fullmax-w-xs">
                                    <option>Pending</option>
                                    <option>Completed</option>
                                    <option selected>Canceled</option>
                                </select>
                            </td>
                            <td>China</td>
                            <td>8/15/2020</td>
                            <td className='flex items-center gap-x-2'>
                                <AiFillEye className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillPrinter className="text-violet-400 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Marjy Ferencz</td>
                            <td>Office Assistant I</td>
                            <td>Rowe-Schoen</td>
                            <td>Russia</td>
                            <td>3/25/2021</td>
                            <td>3/25/2021</td>
                            <td>3/25/2021</td>
                            <td className='flex items-center gap-x-2'>
                                <AiFillEye className="text-cyan-400 text-2xl border rounded-md p-1" />
                                <AiFillPrinter className="text-violet-400 text-2xl border rounded-md p-1" />
                            </td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Yancy Tear</td>
                            <td>Community Outreach Specialist</td>
                            <td>Wyman-Ledner</td>
                            <td>Brazil</td>
                            <td>5/22/2020</td>
                            <td>Indigo</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Irma Vasilik</td>
                            <td>Editor</td>
                            <td>Wiza, Bins and Emard</td>
                            <td>Venezuela</td>
                            <td>12/8/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Meghann Durtnal</td>
                            <td>Staff Accountant IV</td>
                            <td>Schuster-Schimmel</td>
                            <td>Philippines</td>
                            <td>2/17/2021</td>
                            <td>Yellow</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Sammy Seston</td>
                            <td>Accountant I</td>
                            <td>O'Hara, Welch and Keebler</td>
                            <td>Indonesia</td>
                            <td>5/23/2020</td>
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Lesya Tinham</td>
                            <td>Safety Technician IV</td>
                            <td>Turner-Kuhlman</td>
                            <td>Philippines</td>
                            <td>2/21/2021</td>
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>Zaneta Tewkesbury</td>
                            <td>VP Marketing</td>
                            <td>Sauer LLC</td>
                            <td>Chad</td>
                            <td>6/23/2020</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th>11</th>
                            <td>Andy Tipple</td>
                            <td>Librarian</td>
                            <td>Hilpert Group</td>
                            <td>Poland</td>
                            <td>7/9/2020</td>
                            <td>Indigo</td>
                        </tr>
                        <tr>
                            <th>12</th>
                            <td>Sophi Biles</td>
                            <td>Recruiting Manager</td>
                            <td>Gutmann Inc</td>
                            <td>Indonesia</td>
                            <td>2/12/2021</td>
                            <td>Maroon</td>
                        </tr>
                        <tr>
                            <th>13</th>
                            <td>Florida Garces</td>
                            <td>Web Developer IV</td>
                            <td>Gaylord, Pacocha and Baumbach</td>
                            <td>Poland</td>
                            <td>5/31/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>14</th>
                            <td>Maribeth Popping</td>
                            <td>Analyst Programmer</td>
                            <td>Deckow-Pouros</td>
                            <td>Portugal</td>
                            <td>4/27/2021</td>
                            <td>Aquamarine</td>
                        </tr>
                        <tr>
                            <th>15</th>
                            <td>Moritz Dryburgh</td>
                            <td>Dental Hygienist</td>
                            <td>Schiller, Cole and Hackett</td>
                            <td>Sri Lanka</td>
                            <td>8/8/2020</td>
                            <td>Crimson</td>
                        </tr>
                        <tr>
                            <th>16</th>
                            <td>Reid Semiras</td>
                            <td>Teacher</td>
                            <td>Sporer, Sipes and Rogahn</td>
                            <td>Poland</td>
                            <td>7/30/2020</td>
                            <td>Green</td>
                        </tr>
                        <tr>
                            <th>17</th>
                            <td>Alec Lethby</td>
                            <td>Teacher</td>
                            <td>Reichel, Glover and Hamill</td>
                            <td>China</td>
                            <td>2/28/2021</td>
                            <td>Khaki</td>
                        </tr>
                        <tr>
                            <th>18</th>
                            <td>Aland Wilber</td>
                            <td>Quality Control Specialist</td>
                            <td>Kshlerin, Rogahn and Swaniawski</td>
                            <td>Czech Republic</td>
                            <td>9/29/2020</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <th>19</th>
                            <td>Teddie Duerden</td>
                            <td>Staff Accountant III</td>
                            <td>Pouros, Ullrich and Windler</td>
                            <td>France</td>
                            <td>10/27/2020</td>
                            <td>Aquamarine</td>
                        </tr>
                        <tr>
                            <th>20</th>
                            <td>Lorelei Blackstone</td>
                            <td>Data Coordiator</td>
                            <td>Witting, Kutch and Greenfelder</td>
                            <td>Kazakhstan</td>
                            <td>6/3/2020</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingOrder;