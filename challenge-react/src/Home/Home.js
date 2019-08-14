import React from "react";
import Header from "../AboutMe/Header";
import HomeContent from "./HomeContent";
import { Redirect } from "react-router-dom";

function Home() {
  const is_login = JSON.parse(localStorage.getItem("is_login"));

  if (is_login === null) {
    return <Redirect to={{ pathname: "/" }} />;
  } else {
    return (
      <div>
        <Header />
        <HomeContent />
      </div>
    );
  }
}

export default Home;
