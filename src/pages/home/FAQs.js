import React from "react";
import faqsImage from "../../assets/svgs/faqs.svg";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

const FAQs = () => {
  const frequentQuestionsAndAnswers = [
    {
      title: "What is a Restaurant Management System?",
      description:
        "Restaurant Management System (RMS) is a versatile software that is a type of point-of-sale (POS) software. It will make your restaurant operation system easy and automated. This is an application that you can use as a computer application or server-based web application or mobile application. It can be used for any type of food business such as restaurants, hotels, bars, bakeries, cafes, food trucks, bistros, delivery businesses, homemade or online restaurant business, etc. It will manage everything from your account billing to staff management and keep the data secure.",
    },
    {
      title: "Is this a global software?",
      description:
        "Bhojon is a restaurant management software that has become very popular with restaurant owners around the world. The restaurant business is booming all over the world so the competition is increasing. So the challenge of maintaining it is increasing day by day. The feedback from the users of our software is very good. Many users from the USA, UK, Canada, Australia, Europe, India, Pakistan, Africa, Russia, and even China are managing their restaurant businesses using this application. So we have made it world-class so that the use of worldwide increases. You can get this software from our website or from various software or web application marketplace.",
    },
    {
      title: "Why choose Bhojon?",
      description:
        "Easy to handle, No need any prior knowledge. All essential features at low cost. All systems within one. Extended version available for mobile application & desktop software. Supported at any device. If you want more customization it is possible for us. Neat and clean code & SEO friendly responsive web application. Support available for any technical problem",
    },
    {
      title: "Do I get any notification for any new online or offline orders?",
      description:
        "Yes. You will get a notification for all orders in the dashboard.",
    },
    {
      title: "May I use this software like POS?",
      description:
        "Yes. There is a special window to use this software as a restaurant POS software.",
    },
  ];

  // set website title
  useWebsiteTitle("Bhojon | FAQs");

  return (
    <section className="mx-2 my-20 md:m-12 lg:m-28">
      <div className="text-center p-3 m-3">
        <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold font capitalize">
          Frequently <span className="text-primary">Asked Questions</span>
        </h3>
        <p className="mt-5">
          We use the latest technologies and tools in order to create a better
          code that not only works great, but it is easy easy to work with too.
        </p>
      </div>

      <div class="divide-y divide-gray-100 mt-20 px-3 mx-3">
        {frequentQuestionsAndAnswers?.map((frequentQuestionAndAnswer) => (
          <details
            class="group group py-8"
            key={frequentQuestionAndAnswer?.title}
          >
            <summary class="flex cursor-pointer items-center justify-between">
              <h2 class="text-lg font-medium text-gray-700">
                {frequentQuestionAndAnswer?.title}
              </h2>

              <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p class="mt-4 leading-relaxed text-gray-700">
              {frequentQuestionAndAnswer?.description}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
