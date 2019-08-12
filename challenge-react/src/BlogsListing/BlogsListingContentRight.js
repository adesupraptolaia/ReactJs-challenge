import React from "react";
import "../Styles/blogs_listing.css";
import hasil from "../img/foto-berita.jpg";

function BlogsListingContentRight() {
  return (
    <div className="card kartu">
      <img className="card-img-top hasil" src={hasil} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">
          <span className="Judul">
            {" "}
            Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar
            Kerajaan{" "}
          </span>{" "}
          <br />
          <span className="Judul-isi">
            Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara
            tradisional Jepang yang digelar di kuil Meji Tokyo.
          </span>{" "}
          <br />
          <span className="Judul-update">Last update 3 hours</span>
        </p>
      </div>
    </div>
  );
}

export default BlogsListingContentRight;
