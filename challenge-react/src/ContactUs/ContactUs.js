import React from "react";
import ContactUsLeft from "./ContactUsLeft";
import ContactUsRight from "./ContactUsRight";
import Header from "../AboutMe/Header";
import { Redirect } from "react-router-dom";
import "../Styles/Home.css";

function ContactUs() {
  const is_login = JSON.parse(localStorage.getItem("is_login"));

  if (is_login === null) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <ContactUsLeft />
            <ContactUsRight />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
