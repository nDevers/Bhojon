import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCube, BiLineChartDown } from 'react-icons/bi';
import { BsArrowsFullscreen, BsBell, BsCart4, BsTags } from 'react-icons/bs';
import { CgMenuGridR } from 'react-icons/cg';
import { FaFirstOrder, FaUser } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { GiRiceCooker } from 'react-icons/gi';
import { HiMenu, HiOutlineUserGroup } from 'react-icons/hi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RiListUnordered, RiSettings5Fill } from 'react-icons/ri';
import { SiProducthunt } from 'react-icons/si';
import { SlBriefcase } from 'react-icons/sl';
import { TbLanguage } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const DashboardHeader = () => {
    const sideMenus = [
        {
            name: "Dashboard",
            link: "/dashboard",
            icon: <AiOutlineHome />,
        },
        {
            name: "Manage Order",
            link: "/dashboard/manage-order",
            icon: <FaFirstOrder />,
            subMenus: [
                {
                    name: "Order List",
                    link: "/dashboard/manage-order/order-list",
                },
                {
                    name: "Pending Order",
                    link: "/dashboard/manage-order/pending-order",
                },
                {
                    name: "Complete Order",
                    link: "/dashboard/manage-order/complete-order",
                },
                {
                    name: "Cancel Order",
                    link: "/dashboard/manage-order/cancel-order",
                },
            ],
        },
        {
            name: "Reservation",
            link: "/dashboard/reservation",
            icon: <BsTags />,
            subMenus: [
                {
                    name: "Add Booking",
                    link: "/dashboard/reservation/add-booking",
                },
                {
                    name: "Reserved Day",
                    link: "/dashboard/reservation/reserved-day",
                },
                {
                    name: "Unavailable Day",
                    link: "/dashboard/reservation/unavailable-day",
                },
                {
                    name: "Reservation Settings",
                    link: "/dashboard/reservation/reservation-settings",
                },
            ],
        },
        {
            name: "Purchase Manage",
            link: "/dashboard/purchase-manage",
            icon: <BsCart4 />,
            subMenus: [
                {
                    name: "Purchase Item",
                    link: "/dashboard/purchase-manage/purchase-item",
                },
                {
                    name: "Add Purchase",
                    link: "/dashboard/purchase-manage/add-purchase",
                },
                {
                    name: "Purchase Return",
                    link: "/dashboard/purchase-manage/purchase-return",
                },
                {
                    name: "Return Invoice",
                    link: "/dashboard/purchase-manage/return-invoice",
                },
                {
                    name: "Supplier Manage",
                    link: "/dashboard/purchase-manage/supplier-manage",
                },
                {
                    name: "Supplier Ledger",
                    link: "/dashboard/purchase-manage/supplier-ledger",
                },
                {
                    name: "Stock Out Ingredients",
                    link: "/dashboard/purchase-manage/stock-out-ingredients",
                },
            ],
        },
        {
            name: "Report",
            link: "/dashboard/report",
            icon: <BiLineChartDown />,
            subMenus: [
                {
                    name: "Purchase Report",
                    link: "/dashboard/report/purchase-report",
                },
                {
                    name: "Stock Report",
                    link: "/dashboard/report/stock-report",
                },
                {
                    name: "Sell Report",
                    link: "/dashboard/report/sell-report",
                },
                {
                    name: "Cash Register Report",
                    link: "/dashboard/report/cash-register-report",
                },
            ],
        },
        {
            name: "Food Management",
            link: "/dashboard/food-management",
            icon: <BiCube />,
            subMenus: [
                {
                    name: "Manage Category",
                    link: "/dashboard/food-management/manage-category",
                    subSubMenus: [
                        {
                            name: "Add Category",
                            link: "/dashboard/food-management/manage-category/add-category",
                        },
                        {
                            name: "Category List",
                            link: "/dashboard/food-management/manage-category/category-list",
                        },
                    ],
                },
                {
                    name: "Manage Food",
                    link: "/dashboard/food-management/manage-food",
                    subSubMenus: [
                        {
                            name: "Add Food",
                            link: "/dashboard/food-management/manage-food/add-food",
                        },
                        {
                            name: "Food Availability",
                            link: "/dashboard/food-management/manage-food/food-availability",
                        },
                        {
                            name: "Add Food Group",
                            link: "/dashboard/food-management/manage-food/add-food-group",
                        },
                        {
                            name: "Food List",
                            link: "/dashboard/food-management/manage-food/food-list",
                        },
                        {
                            name: "Food Variant",
                            link: "/dashboard/food-management/manage-food/food-variant",
                        },
                        {
                            name: "Menu Type",
                            link: "/dashboard/food-management/manage-food/menu-type",
                        },
                    ],
                },
            ],
        },
        {
            name: "Production",
            link: "/dashboard/production",
            icon: <SiProducthunt />,
            subMenus: [
                {
                    name: "Add Production",
                    link: "/dashboard/production/add-production",
                },
                {
                    name: "Production List",
                    link: "/dashboard/production/production-list",
                },
                {
                    name: "Set Production Unit",
                    link: "/dashboard/production/set-production-unit",
                },
                {
                    name: "Production Settings",
                    link: "/dashboard/production/production-settings",
                },
            ],
        },
        {
            name: "Settings",
            link: "/dashboard/settings",
            icon: <RiSettings5Fill />,
            subMenus: [
                {
                    name: "Purchase Report",
                    link: "/dashboard/settings/application-settings",
                },
                {
                    name: "Country",
                    link: "/dashboard/settings/country",
                },
                {
                    name: "Currency",
                    link: "/dashboard/settings/currency",
                },
                {
                    name: "Factory Reset",
                    link: "/dashboard/settings/factory-reset",
                },
                {
                    name: "Language",
                    link: "/dashboard/settings/language",
                },
                {
                    name: "Payroll Commission",
                    link: "/dashboard/settings/pay-role-commission",
                },
            ],
        },
        {
            name: "Accounts",
            link: "/dashboard/accounts",
            icon: <SlBriefcase />,
            subMenus: [
                {
                    name: "Accounts Report",
                    link: "/dashboard/accounts/accounts-report",
                },
                {
                    name: "Supplier Payment",
                    link: "/dashboard/accounts/supplier-payment",
                },
            ],
        },
        {
            name: "Human Resource",
            link: "/dashboard/human-resource",
            icon: <HiOutlineUserGroup />,
            subMenus: [
                {
                    name: "Designation",
                    link: "/dashboard/human-resource/designation",
                },
                {
                    name: "Add Employee",
                    link: "/dashboard/human-resource/add-employee",
                },
                {
                    name: "Manage Employee",
                    link: "/dashboard/human-resource/manage-employee",
                },
                {
                    name: "Manage Employee Salary",
                    link: "/dashboard/human-resource/manage-employee-salary",
                },
            ],
        },
        {
            name: "User Management",
            link: "/dashboard/user-management",
            icon: <FaUser />,
            subMenus: [
                {
                    name: "Add User",
                    link: "/dashboard/user-management/add-user",
                },
                {
                    name: "User List",
                    link: "/dashboard/user-management/user-list",
                },
            ],
        },
        {
            name: "User",
            link: "/user",
            icon: <AiOutlineHome />,
            subMenus: [
                {
                    name: "Profile",
                    link: "/user/profile",
                },
                {
                    name: "Settings",
                    link: "/user/settings",
                },
            ],
        },
        {
            name: "Authentication",
            link: "/authentication",
            icon: <AiOutlineHome />,
            subMenus: [
                {
                    name: "Login",
                    link: "/authentication/login",
                },
                {
                    name: "Signup",
                    link: "/authentication/signup",
                },
                {
                    name: "Reset Password",
                    link: "/authentication/reset-password",
                },
                {
                    name: "Verify Email",
                    link: "/authentication/verify-email",
                },
            ],
        },
    ];

    const navbarMiddle = [
        {
            name: "Order List",
            link: "/dashboard/order-list",
            icon: <RiListUnordered />,
        },
        {
            name: "Kitchen Dashboard",
            link: "/dashboard/kitchen-dashboard",
            icon: <GiRiceCooker />,
        },
        {
            name: "Counter Dashboard",
            link: "/dashboard/counter-dashboard",
            icon: <CgMenuGridR />,
        },
    ];

    const navbarRight = [
        {
            icon: <BsArrowsFullscreen />,
            link: "",
        },
        {
            icon: <BsBell />,
            link: "/dashboard/notification",
        },
        {
            icon: <FiSettings />,
            link: "/dashboard/settings",
        },
        {
            icon: <TbLanguage />,
            link: "/dashboard/select-language",
        },
    ];

    return (
        <header className="navbar sticky top-0 z-50 bg-base-100 border-b">
            {/* navbar left */}
            <div className="navbar-start">
                <Logo />

                <label tabIndex={0} className="btn btn-ghost hidden lg:flex">
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

            {/* navbar middle */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-x-4 text-sm">
                    {navbarMiddle.map((navbarItems) => (
                        <Link
                            to={navbarItems.link}
                            key={navbarItems.link}
                            className="border rounded-md p-1 md:p-2 lg:p-2"
                        >
                            <span className="flex items-center gap-x-2">
                                {navbarItems?.icon}
                                {navbarItems.name}
                            </span>
                        </Link>
                    ))}
                </ul>
            </div>

            {/* navbar right */}
            <div className="navbar-end">
                <ul className="menu menu-horizontal gap-x-4 hidden lg:flex">
                    {navbarRight.map((navbarItems) => (
                        <Link
                            to={navbarItems.link}
                            key={navbarItems.link}
                            className="bg-gray-200 p-1 md:p-2 lg:p-2 rounded-md"
                        >
                            <Link>{navbarItems.icon}</Link>
                        </Link>
                    ))}
                </ul>

                {/* mobile navbar */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <HiMenu className='text-2xl text-black' />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-2 md:mt-3 lg:mt-3 shadow bg-base-100 rounded-box w-52"
                    >
                        {sideMenus?.map((sideMenu) => (
                            <li key={sideMenu?.link}>
                                {
                                    <Link
                                        className="flex items-center justify-between"
                                        to={sideMenu?.link}
                                    >
                                        <span className="flex items-center justify-end">
                                            <span className="mr-3">{sideMenu?.icon}</span>
                                            {sideMenu?.name}
                                        </span>
                                        <MdKeyboardArrowLeft className="text-xl" />
                                    </Link>
                                }
                            </li>
                        ))}
                        {navbarMiddle.map((navbarItems) => (
                            <li li key={navbarItems?.link}>
                                {
                                    <Link
                                        className="flex items-center justify-between"
                                        to={navbarItems?.link}
                                    >
                                        <span className="flex items-center justify-end gap-x-3">
                                            {navbarItems?.icon}
                                            {navbarItems?.name}
                                        </span>
                                        <MdKeyboardArrowLeft className="text-xl" />
                                    </Link>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;