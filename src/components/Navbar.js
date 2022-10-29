import React from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { HiMenuAlt3, HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import auth from "../hooks/firebase.init";
import LoadingSpinner from "./LoadingSpinner";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const navbar = [
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
    {
      name: <BsSearch />,
      link: "/search",
    },
    {
      name: <BsCart3 />,
      link: "/cart",
    },
  ];

  const navbarMenu = navbar.map((navbarItems) => (
    <li key={navbarItems.link}>
      <Link to={navbarItems.link}>{navbarItems.name}</Link>
    </li>
  ));

  const useSignOut = user && (
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
      >
        <Link>
          <HiOutlineLogout />
        </Link>
      </Link>
    </li>
  );

  loading && <LoadingSpinner />;

  error &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${error}`,
    });

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <Logo />
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal font-medium p-0 lg:flex hidden">
          {navbarMenu}

          {
            !user &&
            <li>
              <Link to='/authentication/login'>Login</Link>
            </li>
          }

          {useSignOut}
        </ul>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt3 className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 font-medium p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarMenu}

            {
              !user &&
              <li>
                <Link to='/authentication/login'>Login</Link>
              </li>
            }

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

                      toast.success("See you soon!");
                    }
                  })
                }
                className="bg-gray-200 p-1 md:p-2 lg:p-2 rounded-md"
              >
                <Link>
                  <HiOutlineLogout />
                </Link>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
