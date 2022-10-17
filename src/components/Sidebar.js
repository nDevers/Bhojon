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
import DefaultUserImage from '../assets/images/defaultUser.png';
import DashboardNavbar from './DashboardNavbar';

const Sidebar = () => {
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
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content p-4 flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <DashboardNavbar />
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className='bg-[#2c3136] overflow-hidden'>
                    <div className='flex gap-x-4 items-center justify-center text-2xl text-center text-stone-100 font-semibold uppercase p-4 border-b'>
                        <SiFoodpanda />
                        <h1><span className='text-red-500'>B</span>hojon</h1>
                    </div>

                    <div className='flex flex-col items-center justify-center mb-4'>
                        <div className='w-20 p-2 m-4 border rounded-full'>
                            <img src={DefaultUserImage} alt="default user image" />
                        </div>

                        <p className='text-sm text-sky-500 flex items-center gap-x-1 mb-1'><GoPrimitiveDot /> Admin</p>
                        <h3 className='text-md text-white font-semibold uppercase'>John Doe</h3>
                    </div>

                    <ul className="menu p-1 w-60 text-[#fff2e6] text-sm">
                        {
                            sideMenus.map(sideMenu =>
                                <li key={sideMenu?.link}>
                                    {
                                        <Link className='flex items-center justify-between' to={sideMenu?.link}>
                                            <span className='flex items-center justify-end'>
                                                <span className='mr-3'>{sideMenu?.icon}</span>{sideMenu?.name}
                                            </span>
                                            <MdKeyboardArrowLeft className='text-xl' />
                                        </Link>
                                    }
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;