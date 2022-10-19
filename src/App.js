import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardSummary from "./pages/dashboard/DashboardSummary";

import ManageOrder from "./pages/dashboard/ManageOrder/ManageOrder";
import ManageOrderSummary from "./pages/dashboard/ManageOrder/ManageOrderSummary";
import OrderList from "./pages/dashboard/ManageOrder/OrderList";
import PendingOrder from "./pages/dashboard/ManageOrder/PendingOrder";
import CompleteOrder from "./pages/dashboard/ManageOrder/CompleteOrder";
import CancelOrder from "./pages/dashboard/ManageOrder/CancelOrder";

import Reservation from "./pages/dashboard/Reservation/Reservation";
import ReservationSummary from "./pages/dashboard/Reservation/ReservationSummary";
import AddBooking from "./pages/dashboard/Reservation/AddBooking";
import UnavailableDay from "./pages/dashboard/Reservation/UnavailableDay";
import ReservationSettings from "./pages/dashboard/Reservation/ReservationSettings";

import PurchaseManage from "./pages/dashboard/PurchaseManage/PurchaseManage";
import PurchaseManageSummary from "./pages/dashboard/PurchaseManage/PurchaseManageSummary";
import PurchaseItem from "./pages/dashboard/PurchaseManage/PurchaseItem";
import AddPurchase from "./pages/dashboard/PurchaseManage/AddPurchase";
import PurchaseReturn from "./pages/dashboard/PurchaseManage/PurchaseReturn";

import Report from "./pages/dashboard/Report/Report";
import ReportSummary from "./pages/dashboard/Report/ReportSummary";
import PurchaseReport from "./pages/dashboard/Report/PurchaseReport";
import StockReport from "./pages/dashboard/Report/StockReport";
import SellReport from "./pages/dashboard/Report/SellReport";
import CashRegisterReport from "./pages/dashboard/Report/CashRegisterReport";

import FoodManagement from "./pages/dashboard/FoodManagement/FoodManagement";
import FoodManagementSummary from "./pages/dashboard/FoodManagement/FoodManagementSummary";
import ManageCategory from "./pages/dashboard/FoodManagement/ManageCategory/ManageCategory";
import ManageFood from "./pages/dashboard/FoodManagement/ManageFood";

import Production from "./pages/dashboard/Production";
import Settings from "./pages/dashboard/Settings";
import Accounts from "./pages/dashboard/Accounts";
import HumanResource from "./pages/dashboard/HumanResource";

import UserManagement from "./pages/dashboard/UserManagement/UserManagement";
import UserManagementSummary from "./pages/dashboard/UserManagement/UserManagementSummary";
import AddUser from "./pages/dashboard/UserManagement/AddUser";
import UserList from "./pages/dashboard/UserManagement/UserList";

import User from "./pages/dashboard/User/User";
import UserSummary from "./pages/dashboard/User/UserSummary";
import Profile from "./pages/dashboard/User/Profile";
import UserSettings from "./pages/dashboard/User/UserSettings";

import Authentication from "./pages/dashboard/Authentication/Authentication";
import Login from "./pages/dashboard/Authentication/Login";
import SignUp from "./pages/dashboard/Authentication/SignUp";
import ResetPassword from "./pages/dashboard/Authentication/ResetPassword";

import NotFound from "./pages/NotFound";
import ManageCategorySummary from "./pages/dashboard/FoodManagement/ManageCategory/ManageCategorySummary";
import AddCategory from "./pages/dashboard/FoodManagement/ManageCategory/AddCategory";
import CategoryList from "./pages/dashboard/FoodManagement/ManageCategory/CategoryList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

      // dashboard routes
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashboardSummary />} />

        // orders routes
        <Route path="manage-order" element={<ManageOrder />} >
          <Route index element={<ManageOrderSummary />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="pending-order" element={<PendingOrder />} />
          <Route path="complete-order" element={<CompleteOrder />} />
          <Route path="cancel-order" element={<CancelOrder />} />
        </Route>

        // reservation routes
        <Route path="reservation" element={<Reservation />} >
          <Route index element={<ReservationSummary />} />
          <Route path="add-booking" element={<AddBooking />} />
          <Route path="unavailable-day" element={<UnavailableDay />} />
          <Route path="reservation-settings" element={<ReservationSettings />} />
        </Route>

        // purchase management routes
        <Route path="purchase-manage" element={<PurchaseManage />} >
          <Route index element={<PurchaseManageSummary />} />
          <Route path="purchase-item" element={<PurchaseItem />} />
          <Route path="add-purchase" element={<AddPurchase />} />
          <Route path="purchase-return" element={<PurchaseReturn />} />
        </Route>

        // report routes
        <Route path="report" element={<Report />} >
          <Route index element={<ReportSummary />} />
          <Route path="purchase-report" element={<PurchaseReport />} />
          <Route path="stock-report" element={<StockReport />} />
          <Route path="sell-report" element={<SellReport />} />
          <Route path="cash-register-report" element={<CashRegisterReport />} />
        </Route>

        // food management routes
        <Route path="food-management" element={<FoodManagement />} >
          <Route index element={<FoodManagementSummary />} />

          // manage category routes
          <Route path="manage-category" element={<ManageCategory />} >
            <Route index element={<ManageCategorySummary />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="category-list" element={<CategoryList />} />
          </Route>

          <Route path="manage-food" element={<ManageFood />} />
        </Route>

        <Route path="production" element={<Production />} />
        <Route path="settings" element={<Settings />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="human-resource" element={<HumanResource />} />

        // user management routes
        <Route path="user-management" element={<UserManagement />} >
          <Route index element={<UserManagementSummary />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
      </Route>

      // user routes
      <Route path="user" element={<User />} >
        <Route index element={<UserSummary />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<UserSettings />} />
      </Route>

      // authentication routes
      <Route path="authentication" element={<Authentication />} >
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;
