import React from "react";
import privacyPolicyImage from "../../assets/images/privacyPolicy.jpg";

const PrivacyPolicy = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src={privacyPolicyImage}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-primary">Privacy</span> Policy
            </h2>

            <p className="mt-4 text-gray-600 text-justify">
              “WE”,” US”,” OUR”, “COMPANY” are sincerely devoted to respect and
              safeguard the privacy of everyone who visits the{" "}
              <span className="font-semibold">STRING LAB SOLUTION</span>{" "}
              website.{" "}
              <span className="font-semibold">STRING LAB SOLUTION</span> is a
              software development company, [collectively hereinafter referred
              to as “<span className="font-semibold">STRING LAB SOLUTION</span>{" "}
              ”].
            </p>
          </div>
        </div>

        <div className="mt-10 text-justify">
          <p>
            <span className="font-semibold">STRING LAB SOLUTION</span>{" "}
            specialized in fabricating customized & ready-made software
            solutions, website development, mobile app development, theme design
            & development service.
            <br />
            <br />
            Every member of{" "}
            <span className="font-semibold">STRING LAB SOLUTION</span> is a
            separate legal entity that depends on the purpose of processing, we
            act as a data controller of the website and service users' personal
            data.
            <br />
            <br />
            The main objective of this privacy policy; is to notify you “how and
            “where” we use users’ personal data also refer as [“personal
            information” & “personal identification”] and also inform you of the
            rights; you as a “user” get in exchange of personal information.
            <br />
            <br />
            Moreover, <span className="font-semibold">
              STRING LAB SOLUTION
            </span>{" "}
            holds the cookies policy, so that users get a better user
            experience; simultaneously ensuring the safety of our website. “We”,
            “<span className="font-semibold">STRING LAB SOLUTION</span> ” ask
            for consent to use the cookies at the initial phase of the visit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
