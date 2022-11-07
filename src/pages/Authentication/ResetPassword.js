import React from "react";
import Swal from "sweetalert2";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialMediaLoginButton from "../../components/SocialMediaLogin";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import auth from "../../hooks/firebase.init";
import { MdOutlineAlternateEmail } from "react-icons/md";
import resetPasswordImage from "../../assets/svgs/resetPassword.svg";

const ResetPassword = () => {
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

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const actionCodeSettings = {
    url: "https://www.example.com/login",
  };

  let temporaryEmailAddressMatchedText;

  // set website title
  useWebsiteTitle("Bhojon | Reset Password");

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

  // send reset password email
  const onSubmit = async (data, errors) => {
    // prevent signup using temporary email
    if (temporaryEmailAddressMatchedText) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${temporaryEmailAddressMatchedText}`,
      });
    } else {
      // createUserWithEmailAndPassword(watch("email"), watch("password"));

      // send password reset email
      await sendPasswordResetEmail(watch("email"), actionCodeSettings);

      // after sending password reset email display alert
      Swal.fire({
        icon: "success",
        title: "Pasword reset email sent",
        text: "Please check your email",
      });
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            <span className="text-primary">Reset Password</span> Here
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action=""
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Enter Email
            </label>

            <div className="relative">
              <input
                onBlur={checkTemporaryEmailAddress()}
                type="text"
                className="w-full rounded-lg border-gray-200 focus:bg-primary p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter email"
                {...register("email", {
                  required: "* Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,40}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <MdOutlineAlternateEmail className="text-gray-400" />
              </span>
            </div>

            {errors.email?.message && (
              <p role="alert" className="text-primary text-sm mt-2 mx-4">
                {errors.email?.message}
              </p>
            )}

            <p role="alert" className="text-primary text-sm mt-2 mx-4">
              {temporaryEmailAddressMatchedText}
            </p>
          </div>

          <div className="flex flex-col gap-5 mx-4 py-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Remember your password?</p>

              <Link
                to="/authentication/login"
                className="underline hover:text-primary"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="flex justify-end mr-4">
            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white"
            >
              Send Email
            </button>
          </div>

          <SocialMediaLoginButton />
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden md:block lg:block">
        <img
          alt="Welcome"
          src={resetPasswordImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ResetPassword;
