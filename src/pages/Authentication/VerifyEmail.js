import React from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import auth from "../../hooks/firebase.init";
import SocialMediaLoginButton from "../../components/SocialMediaLoginButton";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const VerifyEmail = () => {
  const [
    user,
    loading,
    error
  ] = useAuthState(auth);

  const [
    sendEmailVerification,
    sendEmailVerificationLoading,
    sendEmailVerificationError
  ] = useSendEmailVerification(auth);

  const navigate = useNavigate();

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

  // set website title
  useWebsiteTitle("Bhojon | Verify Email");

  // user ? navigate("/") : navigate("/")

  // display loading spinner 
  (loading || sendEmailVerificationLoading) && <LoadingSpinner />;

  // display error
  error && Swal.fire({
    icon: "error",
    title: "Error",
    text: `${error}`,
  });

  // display verification error
  sendEmailVerificationError && Swal.fire({
    icon: "error",
    title: "Error",
    text: `${sendEmailVerificationError}`,
  });

  // checking temporary email
  const checkTemporaryEmailAddress = () => {
    watch("email") &&
      fetch(`https://www.disify.com/api/email/${watch("email")}`)
        .then(response => response.json())
        .then(isTemporaryEmail => {
          if (isTemporaryEmail?.disposable === true) {
            temporaryEmailAddressMatchedText = 'Sorry temporary email address is not allowed';
          }
        });
  }

  // end email verification
  const onSubmit = async (data, errors) => {
    // prevent signup using temporary email
    if (temporaryEmailAddressMatchedText) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${temporaryEmailAddressMatchedText}`,
      });
    }
    else {
      if (user) {
        if (!user?.emailVerified) {
          // send email verification
          sendEmailVerification();

          Swal.fire({
            icon: "success",
            title: "Verification email sent",
            text: "Please verify your email",
          });
        }
      }
      else {
        navigate('/authentication/login');
      }
    }
  }

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Verify Your Email</h1>

          <p className="mt-4 text-gray-500">
            We have automatically sent a verification link to your email.
            <br />
            Please check your spam folder or wait some time before resending email verification.
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

              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <MdOutlineAlternateEmail className="text-gray-400" />
              </span>
            </div>

            {
              errors.email?.message &&
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {errors.email?.message}
              </p>
            }

            <p role="alert" className="text-error text-sm mt-2 mx-4">
              {temporaryEmailAddressMatchedText}
            </p>
          </div>

          <div className="flex flex-col gap-3 mx-4 py-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Already a member?</p>

              <Link to="/authentication/login" className="underline">
                Login
              </Link>
            </div>
          </div>

          <div className="flex justify-end mr-4">
            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Send Email Verification
            </button>
          </div>

          <SocialMediaLoginButton />
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden md:block lg:block">
        <img
          alt="Welcome"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default VerifyEmail;
