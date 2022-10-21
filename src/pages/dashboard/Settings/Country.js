import React from "react";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const Country = () => {
  // set website title
  useWebsiteTitle('Settings | Country')

  return <div>Country</div>;
};

export default Country;
