import { FaFirstOrder } from "react-icons/fa";

const footerMenu = [
  {
    name: "About Us",
    icon: <FaFirstOrder />,
    subMenus: [
      {
        name: "Company History",
        link: "/company-history",
        icon: <FaFirstOrder />,
      },
      {
        name: "Meet the Team",
        link: "/meet-the-team",
        icon: <FaFirstOrder />,
      },
      {
        name: "Employee Handbook",
        link: "/employee-handbook",
        icon: <FaFirstOrder />,
      },
      {
        name: "Careers",
        link: "/careers",
        icon: <FaFirstOrder />,
      },
    ],
  },
  {
    name: "Our Services",
    icon: <FaFirstOrder />,
    subMenus: [
      {
        name: "Web Development",
        link: "/web-development",
        icon: <FaFirstOrder />,
      },
      {
        name: "Web Design",
        link: "/web-design",
        icon: <FaFirstOrder />,
      },
      {
        name: "Marketing",
        link: "/marketing",
        icon: <FaFirstOrder />,
      },
      {
        name: "Google Ads",
        link: "/google-ads",
        icon: <FaFirstOrder />,
      },
    ],
  },
  {
    name: "Helpful Links",
    icon: <FaFirstOrder />,
    subMenus: [
      {
        name: "FAQs",
        link: "/faqs",
        icon: <FaFirstOrder />,
      },
      {
        name: "Support",
        link: "/support",
        icon: <FaFirstOrder />,
      },
      {
        name: "Live Chat",
        link: "/live-chat",
        icon: <FaFirstOrder />,
      },
    ],
  },
];

export default footerMenu;
