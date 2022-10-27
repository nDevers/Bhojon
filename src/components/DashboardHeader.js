import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsArrowsFullscreen, BsBell } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { GiRiceCooker } from "react-icons/gi";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { RiListUnordered } from "react-icons/ri";
import { TbLanguage } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import dasboardMenus from "../hooks/useDashboardMenu";

const DashboardHeader = () => {
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
          <AiOutlineMenuFold className="text-xl font-black" />
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
            <HiMenu className="text-xl text-black" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-2 md:mt-3 lg:mt-3 shadow bg-base-100 rounded-box w-60"
          >
            <>
              {dasboardMenus?.map((sideMenu) =>
                sideMenu?.subMenus ? (
                  <details className="group">
                    <summary className="flex cursor-pointer items-center p-2 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success">
                      {sideMenu?.icon}

                      <span className="ml-3 text-sm font-medium">
                        {" "}
                        {sideMenu?.name}{" "}
                      </span>

                      <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                        <IoIosArrowUp />
                      </span>
                    </summary>

                    <nav
                      aria-label="Teams Nav"
                      className="mt-1.5 ml-8 flex flex-col"
                    >
                      {sideMenu?.subMenus?.map((subMenu) =>
                        subMenu?.subSubMenus ? (
                          <details className="group">
                            <summary className="flex cursor-pointer items-center p-2 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success">
                              {subMenu?.icon}

                              <span className="ml-3 text-sm font-medium">
                                {" "}
                                {subMenu?.name}{" "}
                              </span>

                              <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                                <IoIosArrowUp />
                              </span>
                            </summary>

                            <nav
                              aria-label="Teams Nav"
                              className="mt-1.5 ml-8 flex flex-col"
                            >
                              {subMenu?.subSubMenus?.map((subSubMenu) => (
                                <Link
                                  to={subSubMenu?.link}
                                  className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                                >
                                  {subSubMenu?.icon}

                                  <span className="ml-3 text-sm font-medium">
                                    {" "}
                                    {subSubMenu?.name}{" "}
                                  </span>
                                </Link>
                              ))}
                            </nav>
                          </details>
                        ) : (
                          <Link
                            to={subMenu?.link}
                            className="flex items-center p-2 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                          >
                            {subMenu?.icon}

                            <span className="ml-3 text-sm font-medium">
                              {" "}
                              {subMenu?.name}{" "}
                            </span>
                          </Link>
                        )
                      )}
                    </nav>
                  </details>
                ) : (
                  <Link
                    to={sideMenu?.link}
                    className="flex items-center p-2 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                  >
                    {sideMenu?.icon}

                    <span className="ml-3 text-sm font-medium">
                      {" "}
                      {sideMenu?.name}{" "}
                    </span>
                  </Link>
                )
              )}
            </>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
