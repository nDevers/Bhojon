import React from "react";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const FactoryReset = () => {
  // set website title
  useWebsiteTitle('Settings | Factory Reset')

  return <div>Factory Reset</div>;
};

export default FactoryReset;
