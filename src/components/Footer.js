import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlinePlus,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  let temporaryEmailAddressMatchedText;

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

  // checking temporary email
  const checkTemporaryEmailAddress = () => {
    watch("email") &&
      fetch(`https://www.disify.com/api/email/${watch("email")}`)
        .then((response) => response.json())
        .then((isTemporaryEmail) => {
          if (isTemporaryEmail?.disposable === true) {
            temporaryEmailAddressMatchedText =
              "Sorry temporary email address is not allowed";
          }
        });
  };

  // sent email request
  const onSubmit = async (data, errors) => {
    // prevent signup using temporary email
    if (temporaryEmailAddressMatchedText) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${temporaryEmailAddressMatchedText}`,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Email sent successfully",
        text: "We will contact you soon",
        confirmButtonText: "Yes",
        customClass: {
          actions: "my-actions",
          cancelButton: "order-2 right-gap",
          confirmButton: "order-1",
        },
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
    }
  };

  const footerLinks = [
    {
      category: "About Us",
      links: [
        {
          name: "Company History",
          link: "/company-history",
        },
        {
          name: "Meet the Team",
          link: "/meet-the-team",
        },
        {
          name: "Employee Handbook",
          link: "/employee-handbook",
        },
        {
          name: "Careers",
          link: "/careers",
        },
      ],
    },
    {
      category: "Our Services",
      links: [
        {
          name: "Web Development",
          link: "/web-development",
        },
        {
          name: "Web Design",
          link: "/web-design",
        },
        {
          name: "Marketing",
          link: "/marketing",
        },
        {
          name: "Google Ads",
          link: "//google-ads",
        },
      ],
    },
    {
      category: "Helpful Links",
      links: [
        {
          name: "FAQs",
          link: "/faqs",
        },
        {
          name: "Support",
          link: "/support",
        },
        {
          name: "Live Chat",
          link: "/live-chat",
        },
      ],
    },
  ];

  const otherLinks = [
    {
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      link: "/terms-and-conditions",
    },
    {
      name: "Cookie Policy",
      link: "/cookie-policy",
    },
  ];

  const socialMediaLinks = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/montasim",
      icon: <AiFillLinkedin />,
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/montasim",
      icon: <AiFillGithub />,
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://www.facebook.com/montasimmamun/",
      icon: <AiFillFacebook />,
    },
  ];

  return (
    <footer aria-label="Site Footer" className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div className="border-b border-gray-800 py-16 lg:order-last lg:border-b-0 lg:border-l lg:py-24 lg:pl-12">
            <div className="flex justify-center text-white lg:hidden">
              <Logo />
            </div>

            <div className="mt-12 space-y-4 lg:mt-0">
              <span className="rounded bg-primary lg:block lg:h-1 lg:w-10"></span>

              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-medium text-white">
                  Request a Demo
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400 lg:mx-0">
                  Here all software, apps, themes, plugins, are our own
                  property. Therefore copying or reselling is strictly
                  prohibited.
                </p>
              </div>

              <form
                className="mt-6"
                onSubmit={handleSubmit(onSubmit)}
                action=""
              >
                <div className="relative mx-auto max-w-lg lg:mx-0">
                  <label className="sr-only" htmlFor="email">
                    Email{watch("email")}
                  </label>

                  <input
                    onBlur={checkTemporaryEmailAddress()}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    {...register("email", {
                      required: "* Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,40}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />

                  <button
                    type="submit"
                    className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded bg-primary p-3 text-white transition hover:bg-neutral"
                  >
                    <span className="sr-only">Submit Search</span>

                    <AiOutlinePlus />
                  </button>
                </div>

                {errors.email?.message && (
                  <p role="alert" className="text-primary text-sm mt-2 mx-4">
                    {errors.email?.message}
                  </p>
                )}

                <p role="alert" className="text-primary text-sm mt-2 mx-4">
                  {temporaryEmailAddressMatchedText}
                </p>
              </form>
            </div>

            {/* social media links */}
            <div className="flex items-center justify-center md:justify-start lg:justify-start col-span-2 space-x-4 text-gray-300 lg:col-span-5 mt-10">
              {socialMediaLinks.map((socialMediaLink) => (
                <a
                  key={socialMediaLink?.link}
                  className="hover:text-primary"
                  href={socialMediaLink?.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> {socialMediaLink?.name} </span>

                  <span className="text-2xl">{socialMediaLink?.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-16 pb-8 lg:pt-24 lg:pr-12">
            <Link className="hidden text-white lg:flex" to="/">
              <Logo />
            </Link>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:mt-12">
              {footerLinks?.map((footerLink) => (
                <div
                  className="text-center lg:text-left"
                  key={footerLink?.category}
                >
                  <p className="text-lg font-medium text-white">
                    {footerLink?.category}
                  </p>

                  <nav aria-label="Footer About Nav" className="mt-4">
                    <ul className="space-y-1.5 text-sm">
                      {footerLink?.links?.map((link) => (
                        <li key={link?.name}>
                          <Link
                            className="text-white transition hover:text-primary hover:underline"
                            to={link?.link}
                          >
                            {link?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-gray-800 pt-8 text-sm text-white lg:mt-24">
              <p className="flex gap-x-4 items-center justify-center md:justify-start lg:justify-start md:text-center lg:text-left">
                {otherLinks?.map((otherLink) => (
                  <>
                    <Link
                      key={otherLink?.name}
                      className="inline-block text-white hover:underline transition hover:text-primary"
                      to={otherLink?.link}
                    >
                      {otherLink?.name}
                    </Link>

                    <span>&middot;</span>
                  </>
                ))}
              </p>

              <p className="mt-4 text-center lg:text-left flex items-center justify-center md:justify-start lg:justify-start gap-3">
                &copy; {currentYear}
                <Logo customClass="flex gap-x-2 items-center text-md text-center text-black-50 font-semibold font-mono uppercase" />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
