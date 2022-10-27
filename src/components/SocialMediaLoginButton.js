import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMediaLoginButton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link
        class="inline-flex items-center justify-center rounded border-2 border-[#3b5998] bg-[#3b5998] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75"
        to="/facebook"
        target="_blank"
        rel="noreferrer"
      >
        Facebook
        <FaFacebookF className="ml-2" />
      </Link>

      <Link
        class="inline-flex items-center justify-center rounded border-2 border-[#eee]  px-5 py-3 text-sm font-medium text-[#757575] transition-colors hover:bg-transparent focus:outline-none focus:ring active:opacity-75 shadow-lg"
        to="/google"
        target="_blank"
        rel="noreferrer"
      >
        Google
        <FaGoogle className="ml-2" />
      </Link>

      <Link
        class="inline-flex items-center justify-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75"
        to="/github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
        <FaGithub className="ml-2" />
      </Link>

      <Link
        class="inline-flex items-center justify-center rounded border-2 border-[#0077b5] bg-[#0077b5] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#0077b5] focus:outline-none focus:ring active:opacity-75"
        to="/linkedin"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
        <FaLinkedinIn className="ml-2" />
      </Link>
    </div>
  );
};

export default SocialMediaLoginButton;
