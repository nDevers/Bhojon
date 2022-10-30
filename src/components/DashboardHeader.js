import React from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsArrowsFullscreen, BsBell } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { GiRiceCooker } from "react-icons/gi";
import { HiMenu, HiOutlineLogout } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { RiListUnordered } from "react-icons/ri";
import { TbLanguage } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import dasboardMenus from "../hooks/useDashboardMenu";
import auth from "../hooks/firebase.init";
import LoadingSpinner from "./LoadingSpinner";
import Logo from "./Logo";

const DashboardHeader = () => {
  const [user, loading, error] = useAuthState(auth);

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

  const navigate = useNavigate();

  loading && <LoadingSpinner />;

  error &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${error}`,
    });

  return (
    <header className="navbar sticky top-0 z-50 bg-base-100 border-b">
      {/* navbar left */}
      <div className="navbar-start">
        <Logo customClass="flex md:flex lg:hidden gap-x-3 items-center text-xl md:text-2xl lg:text-2xl text-center text-black-50 font-semibold font-mono uppercase ml-4" link="/dashboard" />

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
              className="border rounded-md p-1 md:p-2 lg:p-2 hover:text-error"
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
              className="bg-gray-200 p-1 md:p-2 lg:p-2 rounded-md hover:text-error"
            >
              <Link>{navbarItems.icon}</Link>
            </Link>
          ))}

          {user && (
            <Link
              onClick={() =>
                Swal.fire({
                  icon: "warning",
                  title: "Are you sure want to sign out?",
                  showCancelButton: true,
                  confirmButtonText: "Yes",
                  customClass: {
                    actions: "my-actions",
                    cancelButton: "order-2 right-gap",
                    confirmButton: "order-1",
                  },
                }).then((result) => {
                  if (result.isConfirmed) {
                    signOut(auth);

                    navigate("/");

                    toast.success("See you soon!");
                  }
                })
              }
              className="bg-gray-200 p-1 md:p-2 lg:p-2 rounded-md hover:text-error"
            >
              <Link>
                <HiOutlineLogout />
              </Link>
            </Link>
          )}
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
                  <details className="group" key={sideMenu?.name}>
                    <summary className="flex cursor-pointer items-center p-2 hover:bg-gray-100 hover:text-error focus:border-l-4 border-l-error">
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
                          <details className="group" key={subMenu?.name}>
                            <summary className="flex cursor-pointer items-center p-2 hover:bg-gray-100 hover:text-error focus:border-l-4 border-l-error">
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
                                  key={subSubMenu?.name}
                                  to={subSubMenu?.link}
                                  className="flex items-center px-4 py-2 hover:bg-gray-100 hover:text-error focus:border-l-4 border-l-error"
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
                            key={subMenu?.link}
                            to={subMenu?.link}
                            className="flex items-center p-2 hover:bg-gray-100 hover:text-error focus:border-l-4 border-l-error"
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
                    key={sideMenu?.link}
                    to={sideMenu?.link}
                    className="flex items-center p-2 hover:bg-gray-100 hover:text-error focus:border-l-4 border-l-error"
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
