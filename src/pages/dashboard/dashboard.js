import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiLineChartDown, BiCube } from "react-icons/bi";
import { BsTags, BsCart4, BsArrowsFullscreen, BsBell } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FaFirstOrder, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiRiceCooker } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiSettings5Fill, RiListUnordered } from "react-icons/ri";
import { SiProducthunt } from "react-icons/si";
import { SlBriefcase } from "react-icons/sl";
import { TbLanguage } from "react-icons/tb";
import DefaultUserImage from "../../assets/images/defaultUser.png";
import Logo from "../../components/Logo";

const Dashboard = () => {
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
          icon: <FaFirstOrder />,
        },
        {
          name: "Pending Order",
          link: "/dashboard/manage-order/pending-order",
          icon: <FaFirstOrder />,
        },
        {
          name: "Complete Order",
          link: "/dashboard/manage-order/complete-order",
          icon: <FaFirstOrder />,
        },
        {
          name: "Cancel Order",
          link: "/dashboard/manage-order/cancel-order",
          icon: <FaFirstOrder />,
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
          icon: <BsTags />,
        },
        {
          name: "Unavailable Day",
          link: "/dashboard/reservation/unavailable-day",
          icon: <BsTags />,
        },
        {
          name: "Reservation Settings",
          link: "/dashboard/reservation/reservation-settings",
          icon: <BsTags />,
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
          icon: <BsCart4 />,
        },
        {
          name: "Add Purchase",
          link: "/dashboard/purchase-manage/add-purchase",
          icon: <BsCart4 />,
        },
        {
          name: "Purchase Return",
          link: "/dashboard/purchase-manage/purchase-return",
          icon: <BsCart4 />,
        },
        {
          name: "Return Invoice",
          link: "/dashboard/purchase-manage/return-invoice",
          icon: <BsCart4 />,
        },
        {
          name: "Supplier Manage",
          link: "/dashboard/purchase-manage/supplier-manage",
          icon: <BsCart4 />,
        },
        {
          name: "Supplier Ledger",
          link: "/dashboard/purchase-manage/supplier-ledger",
          icon: <BsCart4 />,
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
          icon: <BiLineChartDown />,
        },
        {
          name: "Stock Report",
          link: "/dashboard/report/stock-report",
          icon: <BiLineChartDown />,
        },
        {
          name: "Sell Report",
          link: "/dashboard/report/sell-report",
          icon: <BiLineChartDown />,
        },
        {
          name: "Cash Register Report",
          link: "/dashboard/report/cash-register-report",
          icon: <BiLineChartDown />,
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
          icon: <BiCube />,
          subSubMenus: [
            {
              name: "Manage Category",
              link: "/dashboard/food-management/manage-category/add-category",
              icon: <BiCube />,
            },
            {
              name: "Manage Category",
              link: "/dashboard/food-management/manage-category/category-list",
              icon: <BiCube />,
            },
          ],
        },
        {
          name: "Manage Food",
          link: "/dashboard/food-management/manage-food",
          icon: <BiCube />,
          subSubMenus: [
            {
              name: "Add Food",
              link: "/dashboard/food-management/manage-food/add-food",
              icon: <BiCube />,
            },
            {
              name: "Food Availability",
              link: "/dashboard/food-management/manage-food/food-availability",
              icon: <BiCube />,
            },
            {
              name: "Add Food Group",
              link: "/dashboard/food-management/manage-food/add-food-group",
              icon: <BiCube />,
            },
            {
              name: "Food List",
              link: "/dashboard/food-management/manage-food/food-list",
              icon: <BiCube />,
            },
            {
              name: "Food Variant",
              link: "/dashboard/food-management/manage-food/food-variant",
              icon: <BiCube />,
            },
            {
              name: "Menu Type",
              link: "/dashboard/food-management/manage-food/menu-type",
              icon: <BiCube />,
            },
          ],
        },
      ],
    },
    {
      name: "Production",
      link: "/dashboard/production",
      icon: <SiProducthunt />,
    },
    {
      name: "Settings",
      link: "/dashboard/settings",
      icon: <RiSettings5Fill />,
      subMenus: [
        {
          name: "Purchase Report",
          link: "/dashboard/settings/application-settings",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Country",
          link: "/dashboard/settings/country",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Currency",
          link: "/dashboard/settings/currency",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Factory Reset",
          link: "/dashboard/settings/factory-reset",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Language",
          link: "/dashboard/settings/language",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Payroll Commission",
          link: "/dashboard/settings/pay-role-commission",
          icon: <RiSettings5Fill />,
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
          icon: <SlBriefcase />,
        },
        {
          name: "Supplier Payment",
          link: "/dashboard/accounts/supplier-payment",
          icon: <SlBriefcase />,
        },
      ],
    },
    {
      name: "Human Resource",
      link: "/dashboard/human-resource",
      icon: <HiOutlineUserGroup />,
    },
    {
      name: "User Management",
      link: "/dashboard/user-management",
      icon: <FaUser />,
      subMenus: [
        {
          name: "Add User",
          link: "/dashboard/user-management/add-user",
          icon: <FaUser />,
        },
        {
          name: "User List",
          link: "/dashboard/user-management/user-list",
          icon: <FaUser />,
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
          icon: <FaUser />,
        },
        {
          name: "Settings",
          link: "/user/settings",
          icon: <FaUser />,
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
          icon: <FaUser />,
        },
        {
          name: "Signup",
          link: "/authentication/signup",
          icon: <FaUser />,
        },
        {
          name: "Reset Password",
          link: "/authentication/reset-password",
          icon: <FaUser />,
        },
        {
          name: "Verify Email",
          link: "/authentication/verify-email",
          icon: <FaUser />,
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

  const currentYear = new Date().getFullYear();

  return (
    <div data-theme="light">
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
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
                  className="menu menu-compact dropdown-content mt-2 md:mt-3 lg:mt-3 shadow bg-base-100 rounded-box w-52"
                >
                  {sideMenus.map((sideMenu) => (
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

          <main>
            <div className="m-2">
              <Outlet />
            </div>
          </main>

          {/* footer is always bottom */}
          <footer className="footer footer-center p-4 md:p-3 lg:p-3 mt-10 bg-gray-300 text-xs md:text-sm lg:text-sm text-base-content font-mono">
            <p className="flex items-center">
              Copyright <span>&copy; {currentYear}</span> - All right reserved
              by
              <Link to="/" className="ml-2">
                <Logo customClass='flex gap-x-2 items-center justify-center text-md md:text-lg lg:text-lg text-center text-black-50 font-semibold uppercase' />
              </Link>
            </p>
          </footer>
        </div>

        <div className="drawer-side bg-base-100 text-gray-50">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <div className="bg-[#2c3136]">
            <Logo customClass='flex gap-x-4 items-center justify-center text-2xl text-center text-stone-100 font-semibold uppercase p-4 border-b' />

            <div className="flex flex-col items-center justify-center mb-4">
              <div className="w-20 p-2 m-4 border rounded-full">
                <img src={DefaultUserImage} alt="default user image" />
              </div>

              <p className="text-sm text-sky-500 flex items-center gap-x-1 mb-1">
                <GoPrimitiveDot /> Admin
              </p>
              <h3 className="text-md text-white font-semibold uppercase">
                John Doe
              </h3>
            </div>

            <ul className="menu p-4 w-64 text-[#fff2e6] text-sm overflow-y-auto">
              {sideMenus.map((sideMenu) => (
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
                  {sideMenu?.subMenus &&
                    sideMenu?.subMenus?.map((subMenu) => (
                      <Link
                        key={subMenu?.link}
                        className="flex items-center justify-between ml-4"
                        to={subMenu?.link}
                      >
                        <span className="flex items-center justify-end">
                          <span className="mr-3">{subMenu?.icon}</span>
                          {subMenu?.name}
                        </span>
                        <MdKeyboardArrowLeft className="text-xl" />
                      </Link>
                    ))}
                  {sideMenu?.subMenus?.map((subMenu) => {
                    subMenu?.subSubMenus?.map((subSubMenu) =>
                      console.log(subSubMenu)
                    );
                  })}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
