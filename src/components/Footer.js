import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data, errors) => {
    console.log(data, errors);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Email send successfully!",
    });
  };

  return (
    // <footer className="p-3 bg-gray-300 text-xs md:text-sm lg:text-sm text-base-content font-mono z-10">
    //   <p className="flex items-center justify-center">
    //     Copyright <span>&copy; {currentYear}</span> - All right reserved by
    //     <Link to="/">
    //       <Logo />
    //     </Link>
    //   </p>
    // </footer>

    <footer aria-label="Site Footer" className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-800 py-16 lg:order-last lg:border-b-0 lg:border-l lg:py-24 lg:pl-12">
            <div className="flex justify-center text-teal-300 lg:hidden">
              <Logo />
            </div>

            <div className="mt-12 space-y-4 lg:mt-0">
              <span className="rounded bg-teal-500 lg:block lg:h-1 lg:w-10"></span>

              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-medium text-white">
                  Request a Demo
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400 lg:mx-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, harum deserunt nesciunt praesentium, repellendus
                  eum perspiciatis ratione pariatur a aperiam eius numquam
                  doloribus asperiores sunt.
                </p>
              </div>

              <form
                className="mt-6"
                onSubmit={handleSubmit(onSubmit)}
                action=""
              >
                <div className="relative mx-auto max-w-lg lg:mx-0">
                  <label className="sr-only" for="email">
                    {" "}
                    Email{watch("email")}
                  </label>

                  <input
                    type="text"
                    className="w-full rounded-md border-none bg-gray-800 py-4 pl-3 pr-16 text-sm text-white"
                    placeholder="Enter email"
                    {...register("email", {
                      required: "* Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />

                  <button
                    type="submit"
                    className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded bg-indigo-600 p-3 text-white transition hover:bg-indigo-700"
                  >
                    <span className="sr-only">Submit Search</span>

                    <AiOutlinePlus />
                  </button>
                </div>

                <p role="alert" className="text-error text-sm mt-2">
                  {errors.email?.message}
                </p>
              </form>
            </div>
          </div>

          <div className="pt-16 pb-8 lg:pt-24 lg:pr-12">
            <Link className="hidden text-teal-300 lg:flex" to="/">
              <Logo />
            </Link>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-12">
              <div className="text-center lg:text-left">
                <p className="text-lg font-medium text-white">About Us</p>

                <nav aria-label="Footer About Nav" className="mt-4">
                  <ul className="space-y-1.5 text-sm">
                    {
                      <li>
                        <Link
                          className="text-white transition hover:text-white/75 hover:underline"
                          to="/company-history"
                        >
                          Company History
                        </Link>
                      </li>
                    }

                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/meet-the-team"
                      >
                        Meet the Team
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/employee-handbook"
                      >
                        Employee Handbook
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/careers"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg font-medium text-white">Our Services</p>

                <nav aria-label="Footer Services Nav" className="mt-4">
                  <ul className="space-y-1.5 text-sm">
                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/web-development"
                      >
                        Web Development
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/web-design"
                      >
                        Web Design
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/marketing"
                      >
                        Marketing
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/google-ads"
                      >
                        Google Ads
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-lg font-medium text-white">Helpful Links</p>

                <nav aria-label="Footer Helpful Nav" className="mt-4">
                  <ul className="space-y-1.5 text-sm">
                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/faqs"
                      >
                        FAQs
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="text-white transition hover:text-white/75 hover:underline"
                        to="/support"
                      >
                        Support
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="group flex justify-center gap-1.5 lg:justify-start"
                        to="/live-chat"
                      >
                        <span className="text-white transition group-hover:text-white/75 hover:underline">
                          Live Chat
                        </span>

                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="mt-16 border-t border-gray-800 pt-8 text-sm text-white lg:mt-24">
              <p className="flex gap-x-4 items-center justify-center md:justify-start lg:justify-start md:text-center lg:text-left">
                <Link
                  className="inline-block text-white underline transition hover:text-white/75"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </Link>

                <span>&middot;</span>

                <Link
                  className="inline-block text-white underline transition hover:text-white/75"
                  to="/terms-and-conditions"
                >
                  Terms & Conditions
                </Link>

                <span>&middot;</span>

                <Link
                  className="inline-block text-white underline transition hover:text-white/75"
                  to="/cookies"
                >
                  Cookies
                </Link>
              </p>

              <p className="mt-4 text-center lg:text-left">
                &copy; {currentYear} Bhojon. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
