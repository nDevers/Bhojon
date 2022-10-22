import React from "react";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const AccountsBoard = () => {
  // set website title
  useWebsiteTitle('Dashboard | Accounts')

  return <div>Accounts Board</div>;
};

export default AccountsBoard;
