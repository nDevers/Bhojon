import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
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
import ManageCategory from "./pages/dashboard/FoodManagement/ManageCategory";
import ManageFood from "./pages/dashboard/FoodManagement/ManageFood";

import Production from "./pages/dashboard/production";
import Settings from "./pages/dashboard/settings";
import Accounts from "./pages/dashboard/accounts";
import HumanResource from "./pages/dashboard/humanResource";

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

import NotFound from "./pages/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />

      // dashboard routes
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<DashboardSummary />} />

        // orders routes
        <Route path="manage-order" element={<ManageOrderSummary />} >
          <Route index element={<ManageOrderSummary />} />
          <Route path="order-list" element={<OrderList />} />
          <Route path="pending-order" element={<PendingOrder />} />
          <Route path="complete-order" element={<CompleteOrder />} />
          <Route path="cancel-order" element={<CancelOrder />} />
        </Route>

        // reservation routes
        <Route path="reservation" element={<ReservationSummary />} >
          <Route index element={<ReservationSummary />} />
          <Route path="add-booking" element={<AddBooking />} />
          <Route path="unavailable-day" element={<UnavailableDay />} />
          <Route path="reservation-settings" element={<ReservationSettings />} />
        </Route>

        // purchase management routes
        <Route path="purchase-manage" element={<PurchaseManageSummary />} >
          <Route index element={<PurchaseManageSummary />} />
          <Route path="purchase-item" element={<PurchaseItem />} />
          <Route path="add-purchase" element={<AddPurchase />} />
          <Route path="purchase-return" element={<PurchaseReturn />} />
        </Route>

        // report routes
        <Route path="report" element={<ReportSummary />} >
          <Route index element={<ReportSummary />} />
          <Route path="purchase-report" element={<PurchaseReport />} />
          <Route path="stock-report" element={<StockReport />} />
          <Route path="sell-report" element={<SellReport />} />
          <Route path="cash-register-report" element={<CashRegisterReport />} />
        </Route>

        // food management routes
        <Route path="food-management" element={<FoodManagement />} >
          <Route index element={<FoodManagementSummary />} />
          <Route path="manage-category" element={<ManageCategory />} />
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
        <Route path="user-settings" element={<UserSettings />} />
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
