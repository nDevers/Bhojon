import React from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { HiMenu, HiMenuAlt3, HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import auth from "../hooks/firebase.init";
import LoadingSpinner from "./LoadingSpinner";
import { FaFirstOrder } from "react-icons/fa";
import defaultUserImage from "../assets/images/defaultUser.png";
import { RiUser5Fill } from "react-icons/ri";
import { IoIosArrowUp, IoMdSettings } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const [user, loading, primary] = useAuthState(auth);

  const navbarMiddle = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Reservation",
      link: "/reservation",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "About Us",
      link: "/about-Us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const navbarRight = [
    {
      name: <BsSearch />,
      link: "/search",
    },
    {
      name: <BsCart3 />,
      link: "/cart",
    },
  ];

  const userMenu = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      link: "/dashboard",
    },
    {
      name: "Summary",
      icon: <FaFirstOrder />,
      link: "/user/summary",
    },
    {
      name: "Profile",
      icon: <CgProfile />,
      link: "/user/profile",
    },
    {
      name: "Settings",
      icon: <IoMdSettings />,
      link: "/user/settings",
    },
  ];

  const logoutMenu = (
    <li>
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

              toast.success("See you soon!");
            }
          })
        }
        className="flex items-center font-medium px-4 py-2 hover:bg-primary hover:rounded-md hover:text-white focus:border-l-4 border-l-primary"
      >
        <BiLogIn />
        Logout
      </Link>
    </li>
  );

  const loginMenu = !user && (
    <li>
      <Link
        to="/authentication/login"
        className="bg-primary px-5 py-2 rounded-md text-white text-center"
      >
        Login
      </Link>
    </li>
  );

  const currentUserMenu = user && (
    <li className="dropdown dropdown-bottom lg:dropdown-end">
      <label tabIndex={0} className="flex items-center gap-3">
        <img
          alt="Default user"
          src={user?.photoURL ? user?.photoURL : defaultUserImage}
          className="h-7 w-7 rounded-full object-cover"
        />

        <p className="block md:hidden lg:hidden font-medium">
          {user?.email?.split("@")[0]}
        </p>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content dropdown-bottom mt-3 font-medium p-2 shadow bg-base-100 rounded-box w-52"
      >
        {userMenu.map((userMenu) => (
          <li key={userMenu?.link}>
            <Link to={userMenu?.link}>
              {userMenu?.icon}
              {userMenu?.name}
            </Link>
          </li>
        ))}
        {logoutMenu}
      </ul>
    </li>
  );

  loading && <LoadingSpinner />;

  primary &&
    Swal.fire({
      icon: "primary",
      title: "primary",
      text: `${primary}`,
    });

  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* navbar left */}
          <Link to="/">
            <Logo />
          </Link>

          {/* navbar middle */}
          <nav>
            <ul className="hidden md:hidden lg:flex items-center gap-6 text-md font-medium">
              {navbarMiddle.map((navbarItems) => (
                <li
                  key={navbarItems.link}
                  className="hover:text-primary active:text-white active:bg-primary active:px-4 active:py-2 active:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:rounded-md"
                >
                  <Link to={navbarItems.link}>{navbarItems.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* navbar right */}
          <div className="flex items-center gap-4">
            <ul className="hidden md:hidden lg:flex items-center gap-6 text-sm font-medium">
              {navbarRight.map((navbarItems) => (
                <li key={navbarItems.link}>
                  <Link to={navbarItems.link}>{navbarItems.name}</Link>
                </li>
              ))}

              {loginMenu}

              {currentUserMenu}
            </ul>

            {/* mobile navbar */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <HiMenuAlt3 className="text-xl text-black" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-2 md:mt-3 lg:mt-3 shadow bg-base-100 rounded-box w-60"
              >
                <nav
                  aria-label="Teams Nav"
                  className="mt-1.5 p-4 flex flex-col"
                >
                  {navbarMiddle?.map((navbarRightMenu) => (
                    <Link
                      key={navbarRightMenu?.link}
                      to={navbarRightMenu?.link}
                      className="flex items-center p-2 hover:bg-primary hover:rounded-md hover:text-white focus:border-l-4 border-l-primary"
                    >
                      {navbarRightMenu?.icon}

                      <span className="text-sm font-medium">
                        {" "}
                        {navbarRightMenu?.name}
                      </span>
                    </Link>
                  ))}
                  {loginMenu}
                  {user && (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center p-2 hover:bg-primary hover:rounded-md hover:text-white focus:border-l-4 border-l-primary">
                        <span className="text-sm font-medium flex items-center gap-3">
                          <img
                            alt="Default user"
                            src={
                              user?.photoURL ? user?.photoURL : defaultUserImage
                            }
                            className="h-7 w-7 rounded-full object-cover"
                          />

                          {user?.email?.split("@")[0]}
                        </span>

                        <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                          <IoIosArrowUp />
                        </span>
                      </summary>

                      <nav
                        aria-label="Teams Nav"
                        className="mt-1.5 ml-2 flex flex-col"
                      >
                        {userMenu?.map((navbarUserMenu) => (
                          <Link
                            key={navbarUserMenu?.name}
                            to={navbarUserMenu?.link}
                            className="flex items-center px-4 py-2 hover:bg-primary hover:rounded-md hover:text-white focus:border-l-4 border-l-primary"
                          >
                            {navbarUserMenu?.icon}

                            <span className="ml-3 text-sm font-medium">
                              {" "}
                              {navbarUserMenu?.name}{" "}
                            </span>
                          </Link>
                        ))}
                        {logoutMenu}
                      </nav>
                    </details>
                  )}
                </nav>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
