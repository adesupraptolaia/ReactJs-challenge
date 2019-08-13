import React from "react";
import "../Styles/blogs_listing.css";
import axios from "axios";

const apikey = "5ede65c8bcb74c88a86d0aced4410532";
const baseUrl = "https://newsapi.org/v2/everything?";
const UrlHeadline = baseUrl + "sources=bbc-sport" + "&apiKey=" + apikey;

class BlogsListingContentLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: []
    };
  }

  componentDidMount() {
    axios.get(UrlHeadline).then(response => {
      this.setState({ listNews: response.data.articles });
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item active">Berita Terkini</li>
          {this.state.listNews.map((item, index) => {
            if (index < 7) {
              return (
                <li className="list-group-item">
                  <span className="badge">#{index + 1}</span>
                  <br />
                  <span className="font-warna"> {item.title} </span>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default BlogsListingContentLeft;
