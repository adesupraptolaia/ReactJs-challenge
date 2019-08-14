import React from "react";
import "../Styles/blogs_listing.css";
import axios from "axios";

const apikey = "&apiKey=881fa38ba26f4be0b673f16840cdbf8e";
const baseUrl = "https://newsapi.org/v2/top-headlines?country=us&category=";
const baseUrlSearch = "https://newsapi.org/v2/top-headlines?country=us&q=";

class CategoryContentLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNews: [],
      category: ""
    };
  }

  //   componentDidMount = () => {
  //     axios.get(baseUrl + apikey).then(response => {
  //       this.setState({ listNews: response.data.articles });
  //     });
  //   };

  //   componentWillUpdate() {
  //     axios.get(baseUrlSearch + this.props.cari3 + apikey).then(response => {
  //       this.setState({ listNews: response.data.articles });
  //     });
  //   }

  componentDidUpdate() {
    // console.log(prevProps);
    // console.log(baseUrl + this.props.cat + apikey);
    axios.get(baseUrl + this.props.cat + apikey).then(response => {
      this.setState({ listNews: response.data.articles });
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item active">Berita Terkini</li>
          {this.state.listNews.map((item, index) => {
            if (index < 5) {
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

export default CategoryContentLeft;
