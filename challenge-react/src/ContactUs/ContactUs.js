import React from "react";
import ContactUsLeft from "./ContactUsLeft";
import ContactUsRight from "./ContactUsRight";
import "../Styles/Home.css";

function ContactUs() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <ContactUsLeft />
          <ContactUsRight />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
