import React from "react";
import Header from "./Header";
import AboutMeText from "./AboutMeText";
import AboutMeContent from "./AboutMeContent";
import AboutMeFooter from "./AboutMeFooter";
import { Redirect } from "react-router-dom";

function AboutMe() {
  const is_login = JSON.parse(localStorage.getItem("is_login"));

  if (is_login === null) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <AboutMeText />
        <AboutMeContent />
        <AboutMeFooter />
      </div>
    );
  }
}

export default AboutMe;
