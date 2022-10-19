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
import { SiProducthunt, SiFoodpanda } from "react-icons/si";
import { SlBriefcase } from "react-icons/sl";
import { TbLanguage } from "react-icons/tb";
import DefaultUserImage from "../../assets/images/defaultUser.png";
import Breadcrumbs from "../../components/Breadcrumbs";

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
    },
    {
      name: "Purchase Manage",
      link: "/dashboard/purchase-manage",
      icon: <BsCart4 />,
    },
    {
      name: "Report",
      link: "/dashboard/report",
      icon: <BiLineChartDown />,
    },
    {
      name: "Food Management",
      link: "/dashboard/food-management",
      icon: <BiCube />,
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
    },
    {
      name: "Accounts",
      link: "/dashboard/accounts",
      icon: <SlBriefcase />,
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
          <navbar className="navbar sticky top-0 z-50 bg-base-100 border-b">
            {/* navbar left */}
            <div className="navbar-start">
              <div className="flex lg:hidden gap-x-3 items-center justify-center text-xl md:text-2xl lg:text-2xl text-center text-black font-semibold font-mono uppercase pl-4">
                <SiFoodpanda />
                <h1>
                  <span className="text-red-500">B</span>hojon
                </h1>
              </div>

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
          </navbar>

          <main className="scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 overflow-x-auto">
            <div className="m-2">
              {/* <Breadcrumbs /> */}

              <Outlet />
            </div>
          </main>

          {/* footer is always bottom */}
          <footer className="footer footer-center py-2 bg-gray-300 text-base-content sticky top-[100vh] font-mono">
            <div>
              <p className="flex items-center">
                Copyright <span>&copy; {currentYear}</span> - All right reserved
                by
                <Link to="/" className="ml-2">
                  <span className="flex gap-x-2 items-center justify-center text-md md:text-lg lg:text-lg text-center text-black-50 font-semibold uppercase">
                    <SiFoodpanda />
                    <h1>
                      <span className="text-red-500">B</span>hojon
                    </h1>
                  </span>
                </Link>
              </p>
            </div>
          </footer>
        </div>
        {/* <div className="drawer-side bg-slate-900 text-gray-50">
                    <label htmlFor="sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60">
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
                </div> */}

        <div className="drawer-side bg-base-100 text-gray-50">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <div className="bg-[#2c3136] overflow-hidden">
            <div className="flex gap-x-4 items-center justify-center text-2xl text-center text-stone-100 font-semibold uppercase p-4 border-b">
              <SiFoodpanda />
              <h1>
                <span className="text-red-500">B</span>hojon
              </h1>
            </div>

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

            <ul className="menu p-4 w-60 text-[#fff2e6] text-sm overflow-y-auto">
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
