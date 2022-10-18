import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLineChartDown, BiCube } from 'react-icons/bi';
import { BsTags, BsCart4 } from 'react-icons/bs';
import { FaFirstOrder, FaUser } from 'react-icons/fa';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RiSettings5Fill } from 'react-icons/ri';
import { SiProducthunt, SiFoodpanda } from 'react-icons/si';
import { SlBriefcase } from 'react-icons/sl';
import DefaultUserImage from '../../assets/images/defaultUser.png';
import DashboardNavbar from '../../components/DashboardNavbar';

const dashboard = () => {
    const sideMenus = [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: <AiOutlineHome />
        },
        {
            name: 'Manage Order',
            link: '/dashboard/manage-order',
            icon: <FaFirstOrder />,
            subMenus: [
                {
                    name: 'Order List',
                    link: '/dashboard/manage-order/order-list'
                },
                {
                    name: 'Pending Order',
                    link: '/dashboard/manage-order/pending-order'
                },
                {
                    name: 'Complete Order',
                    link: '/dashboard/manage-order/complete-order'
                },
                {
                    name: 'Cancel Order',
                    link: '/dashboard/manage-order/cancel-order'
                }
            ]
        },
        {
            name: 'Reservation',
            link: '/dashboard/reservation',
            icon: <BsTags />
        },
        {
            name: 'Purchase Manage',
            link: '/dashboard/purchase-manage',
            icon: <BsCart4 />
        },
        {
            name: 'Report',
            link: '/dashboard/report',
            icon: <BiLineChartDown />
        },
        {
            name: 'Food Management',
            link: '/dashboard/food-management',
            icon: <BiCube />
        },
        {
            name: 'Production',
            link: '/dashboard/production',
            icon: <SiProducthunt />
        },
        {
            name: 'Settings',
            link: '/dashboard/settings',
            icon: <RiSettings5Fill />
        },
        {
            name: 'Accounts',
            link: '/dashboard/accounts',
            icon: <SlBriefcase />
        },
        {
            name: 'Human Resource',
            link: '/dashboard/human-resource',
            icon: <HiOutlineUserGroup />
        },
        {
            name: 'User Management',
            link: '/dashboard/user-management',
            icon: <FaUser />
        }
    ];

    return (
        <div data-theme="light">
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <navbar className="navbar sticky top-0 z-50 bg-base-100 border-b">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a>Item 1</a>
                                    </li>
                                    <li tabIndex={0}>
                                        <a className="justify-between">
                                            Parent
                                            <svg
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                            </svg>
                                        </a>
                                        <ul className="p-2">
                                            <li>
                                                <a>Submenu 1</a>
                                            </li>
                                            <li>
                                                <a>Submenu 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a>Item 3</a>
                                    </li>
                                </ul>
                            </div>
                            <label
                                htmlFor="my-drawer-2"
                                tabIndex={0}
                                className="btn btn-ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                <li>
                                    <a>Item 1</a>
                                </li>
                                <li tabIndex={0}>
                                    <a>
                                        Parent
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                        </svg>
                                    </a>
                                    <ul className="p-2">
                                        <li>
                                            <a>Submenu 1</a>
                                        </li>
                                        <li>
                                            <a>Submenu 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Item 3</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a className="btn btn-md">Get started</a>
                        </div>
                    </navbar>

                    <main className="m-4 relative">
                        <div className="text-sm breadcrumbs mb-4 top-0">
                            <ul>
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4 mr-2 stroke-current"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            ></path>
                                        </svg>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4 mr-2 stroke-current"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                            ></path>
                                        </svg>
                                        Documents
                                    </a>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="w-4 h-4 mr-2 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        ></path>
                                    </svg>
                                    Add Document
                                </li>
                            </ul>
                        </div>

                        <div className="overflow-x-auto border p-4">
                            <table className="table table-compact w-full">
                                <thead>
                                    <tr>
                                        <th>SN</th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>company</th>
                                        <th>location</th>
                                        <th>Last Login</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Littel, Schaden and Vandervort</td>
                                        <td>Canada</td>
                                        <td>12/16/2020</td>
                                        <td>Blue</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Zemlak, Daniel and Leannon</td>
                                        <td>United States</td>
                                        <td>12/5/2020</td>
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Carroll Group</td>
                                        <td>China</td>
                                        <td>8/15/2020</td>
                                        <td>Red</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Marjy Ferencz</td>
                                        <td>Office Assistant I</td>
                                        <td>Rowe-Schoen</td>
                                        <td>Russia</td>
                                        <td>3/25/2021</td>
                                        <td>Crimson</td>
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
                                    <tr>
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Littel, Schaden and Vandervort</td>
                                        <td>Canada</td>
                                        <td>12/16/2020</td>
                                        <td>Blue</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Zemlak, Daniel and Leannon</td>
                                        <td>United States</td>
                                        <td>12/5/2020</td>
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Carroll Group</td>
                                        <td>China</td>
                                        <td>8/15/2020</td>
                                        <td>Red</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>Marjy Ferencz</td>
                                        <td>Office Assistant I</td>
                                        <td>Rowe-Schoen</td>
                                        <td>Russia</td>
                                        <td>3/25/2021</td>
                                        <td>Crimson</td>
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
                    </main>

                    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                        <div>
                            <p>
                                Copyright © 2022 - All right reserved by ACME Industries Ltd
                            </p>
                        </div>
                    </footer>
                </div>
                <div className="drawer-side bg-slate-900 text-gray-50">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60">
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default dashboard;