import React from "react";
import "../Styles/blogs_listing.css";

function BlogsListingContentLeft() {
  return (
    <ul className="list-group">
      <li className="list-group-item active">Berita Terkini</li>
      <li className="list-group-item">
        <span className="badge">#1</span>
        <br />
        <span className="font-warna">
          {" "}
          Mengapa Why selalu always dan and tidak no?{" "}
        </span>
      </li>
      <li className="list-group-item">
        <span className="badge">#2</span>
        <br />
        <span className="font-warna"> Apa apa dengan ReactJS? </span>
      </li>
      <li className="list-group-item">
        <span className="badge">#3</span>
        <br />
        <span className="font-warna">
          {" "}
          Aulia 'Python' Hanifan mencoba mendevelop tandingan ReactJS{" "}
        </span>
      </li>
      <li className="list-group-item">
        <span className="badge">#4</span>
        <br />
        <span className="font-warna">
          {" "}
          Tidak kuat untuk menjadi Top One, seorang pemuda memilih Yamalube!{" "}
        </span>
      </li>
      <li className="list-group-item">
        <span className="badge">#5</span>
        <br />
        <span className="font-warna"> Buah manggis kini ada ekstraknya </span>
      </li>
    </ul>
  );
}

export default BlogsListingContentLeft;
