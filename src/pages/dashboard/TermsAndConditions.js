import React from "react";
import termsAndConditions from "../../assets/images/termsAndConditions.jpg";

const TermsAndConditions = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src={termsAndConditions}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                <span className="text-primary">Terms And Conditions</span>
              </h2>

              <p className="mt-4 text-gray-600 text-justify">
                <span className="font-semibold">STRING LAB SOLUTION</span>{" "}
                establishes itself as a recognized software development company
                worldwide. We provide various readymade software solutions and
                customized services. Our readymade software assists
                entrepreneurs to start their businesses with dynamic and
                automatic coverage.
                <br />
                <br />
                Our software and services will be suitable for small, medium,
                and large size businesses. We are committed to provide the best
                service to our clients as well as ensure to build customized
                solutions according to our customer’s demands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
