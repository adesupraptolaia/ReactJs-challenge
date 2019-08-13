import React from "react";
import "../Styles/blogs_listing.css";
import hasil from "../img/foto-berita.jpg";
import axios from "axios";

const apikey1 = "5ede65c8bcb74c88a86d0aced4410532";
const baseUrl1 = "https://newsapi.org/v2/top-headlines?";
const UrlHeadline1 =
  baseUrl1 + "country=id" + "&category=sports" + "&apiKey=" + apikey1;

class BlogsListingContentRight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNews: []
    };
  }
  componentDidMount() {
    axios.get(UrlHeadline1).then(response => {
      this.setState({ topNews: response.data.articles[0] });
      console.log(this.state.topNews);
    });
  }

  render() {
    return (
      <div className="card kartu">
        <img
          className="card-img-top hasil"
          src={this.state.topNews.urlToImage}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            <span className="Judul"> {this.state.topNews.title} </span> <br />
            <span className="Judul-isi">
              {this.state.topNews.description}
            </span>{" "}
            <br />
            <span className="Judul-update">Last update 3 hours</span>
          </p>
        </div>
      </div>
    );
  }
}

export default BlogsListingContentRight;
