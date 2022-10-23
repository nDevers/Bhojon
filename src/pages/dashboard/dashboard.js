import { Link, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiLineChartDown, BiCube } from "react-icons/bi";
import { BsTags, BsCart4, BsArrowsFullscreen, BsBell, BsDot } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FaFirstOrder, FaUser } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GiRiceCooker } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { RiSettings5Fill, RiListUnordered } from "react-icons/ri";
import { SiProducthunt } from "react-icons/si";
import { SlBriefcase } from "react-icons/sl";
import { TbLanguage } from "react-icons/tb";
import Logo from "../../components/Logo";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import Footer from "../../components/Footer";
import DashboardHeader from "../../components/DashboardHeader";
import ScrollToTop from "../../components/ScrollToTop";
import defaultUserImage from "../../assets/images/defaultUser.png";

const Dashboard = () => {
  const sideMenus = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <AiOutlineHome />,
    },
    {
      name: "Manage Order",
      link: "/dashboard/manage-order",
      icon: <FaFirstOrder />,
      subMenus: [
        {
          name: "Order List",
          link: "/dashboard/manage-order/order-list",
          icon: <FaFirstOrder />,
        },
        {
          name: "Pending Order",
          link: "/dashboard/manage-order/pending-order",
          icon: <FaFirstOrder />,
        },
        {
          name: "Complete Order",
          link: "/dashboard/manage-order/complete-order",
          icon: <FaFirstOrder />,
        },
        {
          name: "Cancel Order",
          link: "/dashboard/manage-order/cancel-order",
          icon: <FaFirstOrder />,
        },
      ],
    },
    {
      name: "Reservation",
      link: "/dashboard/reservation",
      icon: <BsTags />,
      subMenus: [
        {
          name: "Add Booking",
          link: "/dashboard/reservation/add-booking",
          icon: <BsTags />,
        },
        {
          name: "Reserved Day",
          link: "/dashboard/reservation/reserved-day",
          icon: <BsTags />,
        },
        {
          name: "Unavailable Day",
          link: "/dashboard/reservation/unavailable-day",
          icon: <BsTags />,
        },
        {
          name: "Reservation Settings",
          link: "/dashboard/reservation/reservation-settings",
          icon: <BsTags />,
        },
      ],
    },
    {
      name: "Purchase Manage",
      link: "/dashboard/purchase-manage",
      icon: <BsCart4 />,
      subMenus: [
        {
          name: "Purchase Item",
          link: "/dashboard/purchase-manage/purchase-item",
          icon: <BsCart4 />,
        },
        {
          name: "Add Purchase",
          link: "/dashboard/purchase-manage/add-purchase",
          icon: <BsCart4 />,
        },
        {
          name: "Purchase Return",
          link: "/dashboard/purchase-manage/purchase-return",
          icon: <BsCart4 />,
        },
        {
          name: "Return Invoice",
          link: "/dashboard/purchase-manage/return-invoice",
          icon: <BsCart4 />,
        },
        {
          name: "Supplier Manage",
          link: "/dashboard/purchase-manage/supplier-manage",
          icon: <BsCart4 />,
        },
        {
          name: "Supplier Ledger",
          link: "/dashboard/purchase-manage/supplier-ledger",
          icon: <BsCart4 />,
        },
        {
          name: "Stock Out Ingredients",
          link: "/dashboard/purchase-manage/stock-out-ingredients",
          icon: <BsCart4 />,
        },
      ],
    },
    {
      name: "Report",
      link: "/dashboard/report",
      icon: <BiLineChartDown />,
      subMenus: [
        {
          name: "Purchase Report",
          link: "/dashboard/report/purchase-report",
          icon: <BiLineChartDown />,
        },
        {
          name: "Stock Report",
          link: "/dashboard/report/stock-report",
          icon: <BiLineChartDown />,
        },
        {
          name: "Sell Report",
          link: "/dashboard/report/sell-report",
          icon: <BiLineChartDown />,
        },
        {
          name: "Cash Register Report",
          link: "/dashboard/report/cash-register-report",
          icon: <BiLineChartDown />,
        },
      ],
    },
    {
      name: "Food Management",
      link: "/dashboard/food-management",
      icon: <BiCube />,
      subMenus: [
        {
          name: "Manage Category",
          link: "/dashboard/food-management/manage-category",
          icon: <BiCube />,
          subSubMenus: [
            {
              name: "Add Category",
              link: "/dashboard/food-management/manage-category/add-category",
              icon: <BiCube />,
            },
            {
              name: "Category List",
              link: "/dashboard/food-management/manage-category/category-list",
              icon: <BiCube />,
            },
          ],
        },
        {
          name: "Manage Food",
          link: "/dashboard/food-management/manage-food",
          icon: <BiCube />,
          subSubMenus: [
            {
              name: "Add Food",
              link: "/dashboard/food-management/manage-food/add-food",
              icon: <BiCube />,
            },
            {
              name: "Food Availability",
              link: "/dashboard/food-management/manage-food/food-availability",
              icon: <BiCube />,
            },
            {
              name: "Add Food Group",
              link: "/dashboard/food-management/manage-food/add-food-group",
              icon: <BiCube />,
            },
            {
              name: "Food List",
              link: "/dashboard/food-management/manage-food/food-list",
              icon: <BiCube />,
            },
            {
              name: "Food Variant",
              link: "/dashboard/food-management/manage-food/food-variant",
              icon: <BiCube />,
            },
            {
              name: "Menu Type",
              link: "/dashboard/food-management/manage-food/menu-type",
              icon: <BiCube />,
            },
          ],
        },
      ],
    },
    {
      name: "Production",
      link: "/dashboard/production",
      icon: <SiProducthunt />,
      subMenus: [
        {
          name: "Add Production",
          link: "/dashboard/production/add-production",
          icon: <SiProducthunt />,
        },
        {
          name: "Production List",
          link: "/dashboard/production/production-list",
          icon: <SiProducthunt />,
        },
        {
          name: "Set Production Unit",
          link: "/dashboard/production/set-production-unit",
          icon: <SiProducthunt />,
        },
        {
          name: "Production Settings",
          link: "/dashboard/production/production-settings",
          icon: <SiProducthunt />,
        },
      ],
    },
    {
      name: "Settings",
      link: "/dashboard/settings",
      icon: <RiSettings5Fill />,
      subMenus: [
        {
          name: "Purchase Report",
          link: "/dashboard/settings/application-settings",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Country",
          link: "/dashboard/settings/country",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Currency",
          link: "/dashboard/settings/currency",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Factory Reset",
          link: "/dashboard/settings/factory-reset",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Language",
          link: "/dashboard/settings/language",
          icon: <RiSettings5Fill />,
        },
        {
          name: "Payroll Commission",
          link: "/dashboard/settings/pay-role-commission",
          icon: <RiSettings5Fill />,
        },
      ],
    },
    {
      name: "Accounts",
      link: "/dashboard/accounts",
      icon: <SlBriefcase />,
      subMenus: [
        {
          name: "Accounts Report",
          link: "/dashboard/accounts/accounts-report",
          icon: <SlBriefcase />,
        },
        {
          name: "Supplier Payment",
          link: "/dashboard/accounts/supplier-payment",
          icon: <SlBriefcase />,
        },
      ],
    },
    {
      name: "Human Resource",
      link: "/dashboard/human-resource",
      icon: <HiOutlineUserGroup />,
      subMenus: [
        {
          name: "Designation",
          link: "/dashboard/human-resource/designation",
          icon: <HiOutlineUserGroup />,
        },
        {
          name: "Add Employee",
          link: "/dashboard/human-resource/add-employee",
          icon: <HiOutlineUserGroup />,
        },
        {
          name: "Manage Employee",
          link: "/dashboard/human-resource/manage-employee",
          icon: <HiOutlineUserGroup />,
        },
        {
          name: "Manage Employee Salary",
          link: "/dashboard/human-resource/manage-employee-salary",
          icon: <HiOutlineUserGroup />,
        },
      ],
    },
    {
      name: "User Management",
      link: "/dashboard/user-management",
      icon: <FaUser />,
      subMenus: [
        {
          name: "Add User",
          link: "/dashboard/user-management/add-user",
          icon: <FaUser />,
        },
        {
          name: "User List",
          link: "/dashboard/user-management/user-list",
          icon: <FaUser />,
        },
      ],
    },
    {
      name: "User",
      link: "/user",
      icon: <AiOutlineHome />,
      subMenus: [
        {
          name: "Profile",
          link: "/user/profile",
          icon: <FaUser />,
        },
        {
          name: "Settings",
          link: "/user/settings",
          icon: <FaUser />,
        },
      ],
    },
    {
      name: "Authentication",
      link: "/authentication",
      icon: <AiOutlineHome />,
      subMenus: [
        {
          name: "Login",
          link: "/authentication/login",
          icon: <FaUser />,
        },
        {
          name: "Signup",
          link: "/authentication/signup",
          icon: <FaUser />,
        },
        {
          name: "Reset Password",
          link: "/authentication/reset-password",
          icon: <FaUser />,
        },
        {
          name: "Verify Email",
          link: "/authentication/verify-email",
          icon: <FaUser />,
        },
      ],
    },
  ];

  const navbarMiddle = [
    {
      name: "Order List",
      link: "/dashboard/order-list",
      icon: <RiListUnordered />,
    },
    {
      name: "Kitchen Dashboard",
      link: "/dashboard/kitchen-dashboard",
      icon: <GiRiceCooker />,
    },
    {
      name: "Counter Dashboard",
      link: "/dashboard/counter-dashboard",
      icon: <CgMenuGridR />,
    },
  ];

  const navbarRight = [
    {
      icon: <BsArrowsFullscreen />,
      link: "",
    },
    {
      icon: <BsBell />,
      link: "/dashboard/notification",
    },
    {
      icon: <FiSettings />,
      link: "/dashboard/settings",
    },
    {
      icon: <TbLanguage />,
      link: "/dashboard/select-language",
    },
  ];

  // set website title
  useWebsiteTitle('Bhojon | Dashboard')

  return (
    <div data-theme="light">
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <DashboardHeader />

          <div className="m-2 ">
            <Outlet />
          </div>

          {/*    to top button */}
          <ScrollToTop />

          <div className="flex flex-col justify-end h-screen">
            {/* footer is always bottom */}
            <Footer />
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <div class="flex flex-col justify-between bg-[#2c3136] w-60">
            <div>
              <Logo customClass='flex gap-x-4 items-center justify-center text-2xl text-center text-stone-100 font-semibold uppercase p-4' />

              <div class="text-gray-50 border-t">
                <Link
                  to="/user"
                  class="flex gap-x-3 items-center p-4"
                >
                  <img
                    alt="Default user"
                    src={defaultUserImage}
                    class="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="flex flex-col items-start gap-y-2">
                    <p class="flex items-center text-sm text-success">Super Admin <BsDot className="text-xl" /></p>
                    <p className="text-xs underline"> admin@bhojon.com </p>
                  </div>
                </Link>
              </div>

              <nav aria-label="Main Nav" class="mt-6 p-2 flex flex-col space-y-1">
                <>
                  {
                    sideMenus?.map(sideMenu =>
                      sideMenu?.subMenus ? <details class="group">
                        <summary
                          class="flex cursor-pointer items-center px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                        >
                          {sideMenu?.icon}

                          <span class="ml-3 text-sm font-medium"> {sideMenu?.name} </span>

                          <span
                            class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180"
                          >
                            <IoIosArrowUp />
                          </span>
                        </summary>

                        <nav aria-label="Teams Nav" class="mt-1.5 ml-8 flex flex-col">
                          {
                            sideMenu?.subMenus?.map(subMenu =>
                              subMenu?.subSubMenus ?
                                <details class="group">
                                  <summary
                                    class="flex cursor-pointer items-center px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                                  >
                                    {subMenu?.icon}

                                    <span class="ml-3 text-sm font-medium"> {subMenu?.name} </span>

                                    <span
                                      class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180"
                                    >
                                      <IoIosArrowUp />
                                    </span>
                                  </summary>

                                  <nav aria-label="Teams Nav" class="mt-1.5 ml-8 flex flex-col">
                                    {
                                      subMenu?.subSubMenus?.map(subSubMenu =>
                                        <Link
                                          to={subSubMenu?.link}
                                          class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                                        >
                                          {subSubMenu?.icon}

                                          <span class="ml-3 text-sm font-medium"> {subSubMenu?.name} </span>
                                        </Link>
                                      )
                                    }
                                  </nav>
                                </details>
                                :
                                <Link
                                  to={subMenu?.link}
                                  class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                                >
                                  {subMenu?.icon}

                                  <span class="ml-3 text-sm font-medium"> {subMenu?.name} </span>
                                </Link>
                            )
                          }


                        </nav>
                      </details>
                        :
                        <Link
                          to={sideMenu?.link}
                          class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-100 hover:text-gray-900 focus:border-l-4 border-l-success"
                        >
                          {sideMenu?.icon}

                          <span class="ml-3 text-sm font-medium"> {sideMenu?.name} </span>
                        </Link>
                    )
                  }
                </>


              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
