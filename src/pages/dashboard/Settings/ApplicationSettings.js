import React from "react";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const ApplicationSettings = () => {
  // set website title
  useWebsiteTitle('Settings | Application Settings')

  return <div>Application Settings</div>;
};

export default ApplicationSettings;
