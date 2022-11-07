import React, { useState } from "react";
import Swal from "sweetalert2";
import PasswordStrengthBar from "react-password-strength-bar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { MdEdit, MdOutlineAlternateEmail } from "react-icons/md";
import SocialMediaLoginButton from "../../components/SocialMediaLogin";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LoadingSpinner from "../../components/LoadingSpinner";
import auth from "../../hooks/firebase.init";
import signupImage from "../../assets/svgs/signup.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentUser, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [
    createUserWithEmailAndPassword,
    user,
    createUserWithEmailAndPasswordLoading,
    createUserWithEmailAndPasswordError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [
    sendEmailVerification,
    sendEmailVerificationSending,
    sendEmailVerificationError,
  ] = useSendEmailVerification(auth);

  let passwordMatchedText,
    passwordNotMatchedText,
    temporaryEmailAddressMatchedText;

  // set website title
  useWebsiteTitle("Bhojon | Signup");

  // prevent logged in user to visit signup page
  currentUser && navigate("/");

  // change password visibility icon
  const hidePasswordIcon = (
    <BiHide className="text-gray-400 text-lg hover:text-rose-400" />
  );

  const showPasswordIcon = (
    <BiShowAlt className="text-gray-400 text-lg hover:text-rose-400" />
  );

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

  // signup
  const onSubmit = async (data, errors) => {
    // prevent signup using temporary email
    if (temporaryEmailAddressMatchedText) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${temporaryEmailAddressMatchedText}`,
      });
    } else {
      createUserWithEmailAndPassword(watch("email"), watch("password"));

      navigate("/authentication/verify-email");

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

  // check if password and confirm password are same
  const matchPasswordAndConfirmPassword = () => {
    if (watch("password") === "" || watch("confirmPassword") === "") {
      passwordMatchedText = "";
    } else if (watch("password") === watch("confirmPassword")) {
      passwordMatchedText = "Password matched";
    } else {
      passwordNotMatchedText = "Password do not match";
    }
  };

  // display loading spinner
  (createUserWithEmailAndPasswordLoading ||
    sendEmailVerificationSending ||
    loading) && <LoadingSpinner />;

  // display signup error
  createUserWithEmailAndPasswordError &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${createUserWithEmailAndPasswordError}`,
    });

  // display verification email error
  sendEmailVerificationError &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${sendEmailVerificationError}`,
    });

  // display user error
  createUserWithEmailAndPasswordError &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${error}`,
    });

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            <span className="text-rose-400">Signup</span> to continue
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
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="email" className="sr-only">
                First Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="First name"
                  {...register("firstName", {
                    required: "* First name is required",
                    pattern: {
                      value: /^[a-zA-Z ]{3,20}$/,
                      message: "Invalid first name",
                    },
                  })}
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <MdEdit className="text-gray-400" />
                </span>
              </div>

              <p role="alert" className="text-error text-sm m-4">
                {errors.firstName?.message}
              </p>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Last Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Last name"
                  {...register("lastName", {
                    required: "* Last name is required",
                    pattern: {
                      value: /^[a-zA-Z ]{3,20}$/,
                      message: "Invalid last name",
                    },
                  })}
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <MdEdit className="text-gray-400" />
                </span>
              </div>

              <p role="alert" className="text-error text-sm m-4">
                {errors.lastName?.message}
              </p>
            </div>
          </div>

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

            {errors.email?.message && (
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {errors.email?.message}
              </p>
            )}

            <p role="alert" className="text-error text-sm mt-2 mx-4">
              {temporaryEmailAddressMatchedText}
            </p>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              {showPassword ? (
                <input
                  onChange={matchPasswordAndConfirmPassword()}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "* Password is required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                      message: "Invalid password",
                    },
                  })}
                />
              ) : (
                <input
                  onChange={matchPasswordAndConfirmPassword()}
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "* Password is required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                      message: "Invalid password",
                    },
                  })}
                />
              )}

              <span
                className="absolute inset-y-0 right-4 inline-flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? showPasswordIcon : hidePasswordIcon}
              </span>
            </div>

            {/* password strength bar */}
            {watch("password") && (
              <PasswordStrengthBar
                password={watch("password")}
                className="mx-4 mt-4"
              />
            )}

            {passwordNotMatchedText && (
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {passwordNotMatchedText}
              </p>
            )}

            {passwordMatchedText && !errors.password?.message && (
              <p role="alert" className="text-success text-sm mt-2 mx-4">
                {passwordMatchedText}
              </p>
            )}

            {errors.password?.message && !passwordNotMatchedText && (
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Confirm Password
            </label>
            <div className="relative">
              {showPassword ? (
                <input
                  onChange={matchPasswordAndConfirmPassword()}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "* Confirm Password is required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                      message: "Invalid confirm password",
                    },
                  })}
                />
              ) : (
                <input
                  onChange={matchPasswordAndConfirmPassword()}
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "* Confirm Password is required",
                    pattern: {
                      value:
                        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                      message: "Invalid confirm password",
                    },
                  })}
                />
              )}

              <span
                className="absolute inset-y-0 right-4 inline-flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? showPasswordIcon : hidePasswordIcon}
              </span>
            </div>

            {/* password strength bar */}
            {watch("confirmPassword") && (
              <PasswordStrengthBar
                password={watch("confirmPassword")}
                className="mx-4 mt-4"
              />
            )}

            {passwordNotMatchedText && (
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {passwordNotMatchedText}
              </p>
            )}

            {passwordMatchedText && !errors.password?.message && (
              <p role="alert" className="text-success text-sm mt-2 mx-4">
                {passwordMatchedText}
              </p>
            )}

            {errors.confirmPassword?.message && !passwordNotMatchedText && (
              <p role="alert" className="text-error text-sm mt-2 mx-4">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 mx-4 py-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Already a member?</p>

              <Link
                to="/authentication/login"
                className="underline hover:text-rose-400"
              >
                Login
              </Link>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <p>Forgot password?</p>

              <Link
                to="/authentication/reset-password"
                className="underline hover:text-rose-400"
              >
                Reset password
              </Link>
            </div>
          </div>

          <div className="flex justify-end mr-4">
            <button
              type="submit"
              className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Signup
            </button>
          </div>

          <SocialMediaLoginButton />
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden md:block lg:block">
        <img
          alt="Welcome"
          src={signupImage}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SignUp;
