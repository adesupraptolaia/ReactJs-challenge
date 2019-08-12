import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Home from "./Home/Home";
// import AboutMe from './AboutMe/AboutMe';
// import ContactUs from "./ContactUs/ContactUs";
import BlogsListing from "./BlogsListing/BlogsListing";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<ContactUs />, document.getElementById("root"));
ReactDOM.render(<BlogsListing />, document.getElementById("root"));
// ReactDOM.render(<AboutMe />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
