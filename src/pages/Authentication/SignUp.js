import React, { useState } from "react";
import Swal from "sweetalert2";
import PasswordStrengthBar from "react-password-strength-bar";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { MdContentCopy, MdEdit, MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import SocialMediaLoginButton from "../../components/SocialMediaLogin";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import LoadingSpinner from "../../components/LoadingSpinner";
import auth from "../../hooks/firebase.init";
import signupImage from "../../assets/svgs/signup.svg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showGeneratedPassword, setShowGeneratedPassword] = useState(false);
  const [visibleGeneratePasswordModal, setVisibleGeneratePasswordModal] =
    useState(false);
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
      generatePassword: "",
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
    <BiHide className="text-gray-400 text-lg hover:text-primary" />
  );

  const showPasswordIcon = (
    <BiShowAlt className="text-gray-400 text-lg hover:text-primary" />
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
  const onSubmitSignup = async (data, errors) => {
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

  // generate password
  const generatePassword = async (data, errors) => {
    const numbers = "0123456789";
    const smallCharacter = "abcdefghijklmnopqrstuvwxyz";
    const capitalCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacter = "!@#$%^&*()";

    let chars = `${numbers}${smallCharacter}${capitalCharacter}${specialCharacter}${capitalCharacter}`;
    let passwordLength = 12;
    let generatedPassword = "";

    for (let i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      generatedPassword += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("setGeneratedPassword1").value = generatedPassword;
    document.getElementById("setGeneratedPassword2").value = generatedPassword;

    toast.success(`Password generated successfully ${generatedPassword}`);

    console.log("generated password");
  };

  // copy password
  const copyPassword = () => {
    toast.success("Password copied successfully.", {
      toastId: "passwordCopiedId",
    });
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
            <span className="text-primary">Signup</span> to continue
          </h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          action=""
          className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          onSubmit={handleSubmit(onSubmitSignup)}
        >
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="email" className="sr-only">
                First Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
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

              <p role="alert" className="text-primary text-sm m-4">
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
                  className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
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

              <p role="alert" className="text-primary text-sm m-4">
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

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              {showPassword ? (
                <input
                  onChange={matchPasswordAndConfirmPassword()}
                  type="text"
                  className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
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
                  onFocus={() => setVisibleGeneratePasswordModal(true)}
                  onBlur={() => setVisibleGeneratePasswordModal(false)}
                  type="password"
                  className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
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

            {visibleGeneratePasswordModal && (
              <label
                role="alert"
                htmlFor="my-modal"
                className="text-[#435a63] text-sm mt-2 mx-4 flex items-center gap-x-2 hover:text-primary cursor-pointer"
              >
                Generate Secure Password <RiLockPasswordLine />
              </label>
            )}

            {/* password strength bar */}
            {watch("password") && (
              <PasswordStrengthBar
                password={watch("password")}
                className="mx-4 mt-4"
              />
            )}

            {passwordNotMatchedText && (
              <p role="alert" className="text-primary text-sm mt-2 mx-4">
                {passwordNotMatchedText}
              </p>
            )}

            {passwordMatchedText && !errors.password?.message && (
              <p role="alert" className="text-success text-sm mt-2 mx-4">
                {passwordMatchedText}
              </p>
            )}

            {errors.password?.message && !passwordNotMatchedText && (
              <p role="alert" className="text-primary text-sm mt-2 mx-4">
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
                  id="copyPasswordField"
                  onChange={matchPasswordAndConfirmPassword()}
                  type="text"
                  className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
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
                  className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
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
              <p role="alert" className="text-primary text-sm mt-2 mx-4">
                {passwordNotMatchedText}
              </p>
            )}

            {passwordMatchedText && !errors.password?.message && (
              <p role="alert" className="text-success text-sm mt-2 mx-4">
                {passwordMatchedText}
              </p>
            )}

            {errors.confirmPassword?.message && !passwordNotMatchedText && (
              <p role="alert" className="text-primary text-sm mt-2 mx-4">
                {errors.confirmPassword?.message}
              </p>
            )}
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
              Signup
            </button>
          </div>

          <SocialMediaLoginButton />
        </form>

        {/* generate password modal */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle hover:btn-primary hover:text-white text-white absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-xl">
              Generate <span className="text-primary">Secure Password</span>
            </h3>

            <div className="my-6">
              <label htmlFor="password" className="sr-only">
                Generate Password
              </label>
              <div className="relative">
                {showGeneratedPassword ? (
                  <input
                    id="setGeneratedPassword2"
                    type="password"
                    className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
                    placeholder="Generate password"
                    {...register("generatePassword", {
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
                    id="setGeneratedPassword1"
                    type="text"
                    className="w-full rounded-lg border-gray-200 focus:bg-secondary p-4 pr-12 text-sm shadow-sm"
                    placeholder="Generate password"
                    {...register("generatePassword", {
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
                  onClick={() =>
                    setShowGeneratedPassword(!showGeneratedPassword)
                  }
                >
                  {showGeneratedPassword ? hidePasswordIcon : showPasswordIcon}
                </span>
              </div>

              {/* password strength bar */}
              {watch("generatePassword") && (
                <span className="flex items-center gap-x-5">
                  <span className="w-full">
                    <PasswordStrengthBar
                      password={watch("generatePassword")}
                      className="mx-4 mt-4"
                    />
                  </span>

                  <MdContentCopy
                    onClick={() => copyPassword()}
                    className="cursor-pointer text-xl hover:text-primary"
                  />
                </span>
              )}
            </div>

            <div className="mb-6">
              <input
                type="range"
                min="10"
                max="30"
                className="range range-xs range-primary"
                step="5"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>10</span>
                <span>15</span>
                <span>20</span>
                <span>25</span>
                <span>30</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="form-control">
                <label className="cursor-pointer flex items-center gap-x-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-primary"
                  />
                  <span className="label-text uppercase text-xs">
                    Lowercase
                  </span>
                </label>
              </div>

              <div className="form-control">
                <label className="cursor-pointer flex items-center gap-x-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-primary"
                  />
                  <span className="label-text uppercase text-xs">
                    Uppercase
                  </span>
                </label>
              </div>

              <div className="form-control">
                <label className="cursor-pointer flex items-center gap-x-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-primary"
                  />
                  <span className="label-text uppercase text-xs">Numbers</span>
                </label>
              </div>

              <div className="form-control">
                <label className="cursor-pointer flex items-center gap-x-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-primary"
                  />
                  <span className="label-text uppercase text-xs">Symbols</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => generatePassword()}
                className="modal-action btn btn-sm btn-primary text-white"
              >
                Generate Password
              </button>
            </div>
          </div>
        </div>
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
