import React from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import SocialMediaLoginButton from "../../components/SocialMediaLogin";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../hooks/firebase.init";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../../components/LoadingSpinner";
import veridyEmailImage from "../../assets/svgs/verifyEmail.svg";

const VerifyEmail = () => {
  const [currentUser, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

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

  const [
    sendEmailVerification,
    sendEmailVerificationSending,
    sendEmailVerificationError,
  ] = useSendEmailVerification(auth);

  let temporaryEmailAddressMatchedText;

  // set website title
  useWebsiteTitle("Bhojon | Verify Email");

  // prevent logged in user to visit login page
  currentUser && navigate("/");

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

  // send verification email
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
        title: "Verification email sent",
        text: "Please check your inbox",
        confirmButtonText: "Yes",
        customClass: {
          actions: "my-actions",
          cancelButton: "order-2 right-gap",
          confirmButton: "order-1",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          sendEmailVerification();
        }
      });
    }
  };

  // display loading spinner
  sendEmailVerificationSending && <LoadingSpinner />;

  // display verification email error
  sendEmailVerificationError &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${sendEmailVerificationError}`,
    });

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Verify Your <span className="text-primary">Email</span>
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
              Email
            </label>

            <div className="relative">
              <input
                onBlur={checkTemporaryEmailAddress()}
                type="text"
                className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
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
              <p>Already a member?</p>

              <Link
                to="/authentication/login"
                className="underline hover:text-primary"
              >
                Login
              </Link>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Forgot password?</p>

              <Link
                to="/authentication/reset-password"
                className="underline hover:text-primary"
              >
                Reset password
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
          src={veridyEmailImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default VerifyEmail;
