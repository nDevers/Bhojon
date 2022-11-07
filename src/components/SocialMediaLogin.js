import React from "react";
import Swal from "sweetalert2";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../hooks/firebase.init";
import LoadingSpinner from "./LoadingSpinner";

const SocialMediaLoginButton = () => {
  const [
    signInWithGoogle,
    signInWithGoogleUser,
    signInWithGoogleLoading,
    signInWithGoogleError,
  ] = useSignInWithGoogle(auth);

  const [
    signInWithFacebook,
    signInWithFacebookUser,
    signInWithFacebookLoading,
    signInWithFacebookError,
  ] = useSignInWithFacebook(auth);

  const [
    signInWithGithub,
    signInWithGithubUser,
    signInWithGithubLoading,
    signInWithGithubError,
  ] = useSignInWithGithub(auth);

  // display loading spinner
  (signInWithGoogleLoading ||
    signInWithFacebookLoading ||
    signInWithGithubLoading) && <LoadingSpinner />;

  // display signin error
  (signInWithGoogleError || signInWithFacebookError || signInWithGithubError) &&
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${
        signInWithGoogleError ||
        signInWithFacebookError ||
        signInWithGithubError
      }`,
    });

  (signInWithGoogleUser || signInWithFacebookUser || signInWithGithubUser) &&
    toast.success("Welcome", {
      toastId: "socialMedialogin",
    });

  return (
    <div className="flex flex-col gap-2">
      <div className="divider text-gray-400 font-medium">OR</div>

      <button
        onClick={() => signInWithFacebook()}
        className="inline-flex items-center justify-center rounded border-2 border-[#3b5998] bg-[#3b5998] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75"
      >
        Continue with Facebook
        <FaFacebookF className="ml-2" />
      </button>

      <button
        onClick={() => signInWithGoogle()}
        className="inline-flex items-center justify-center rounded border-2 border-[#E5E4E2] bg-[#E5E4E2]  px-5 py-3 text-sm font-medium text-[#757575] transition-colors hover:bg-transparent focus:outline-none focus:ring active:opacity-75 shadow-lg"
      >
        Continue with Google
        <FaGoogle className="ml-2" />
      </button>

      <button
        onClick={() => signInWithGithub()}
        className="inline-flex items-center justify-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
      >
        Continue with GitHub
        <FaGithub className="ml-2" />
      </button>
    </div>
  );
};

export default SocialMediaLoginButton;
