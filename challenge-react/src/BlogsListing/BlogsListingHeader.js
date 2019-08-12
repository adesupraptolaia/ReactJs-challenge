import React from "react";
import logoReact from "../img/logo-React.png";
import "../Styles/blogs_listing.css";
import search from "../img/search.png";
import BlogsListingSearch from "./BlogsListingSearch";

function BlogsListingHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        <img className="logo" src={logoReact} />
      </div>
      <a className="navbar-brand" href="#">
        Kabar-kabar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Beranda <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sepakbola
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ekonomi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Politik
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Hiburan
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Lainnya
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Kesehatan
              </a>
              <a className="dropdown-item" href="#">
                Teknologi
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <BlogsListingSearch />

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Masuk
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Daftar
              </a>
            </li>
          </ul>
        </form>
      </div>
    </nav>
  );
}

export default BlogsListingHeader;
