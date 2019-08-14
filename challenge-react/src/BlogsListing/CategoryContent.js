import React from "react";
import BlogsListingHeader from "./BlogsListingHeader";
import CategoryContentLeft from "./CategoryContentLeft";
import BlogsListingContentRight from "./BlogsListingContentRight";
import { Redirect } from "react-router-dom";

class CategoryContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({ keyword: e.target.value });
  }

  render() {
    const is_login = JSON.parse(localStorage.getItem("is_login"));
    console.log(is_login);
    if (is_login === null) {
      return <Redirect to={{ pathname: "/" }} />;
    } else {
      return (
        <div>
          <BlogsListingHeader
            kata={this.handleOnChange}
            nilai={this.state.keyword}
            delete={this.props.hapus}
          />
          <div className="Container mt-3">
            <div className="row justify-content-center">
              <div className="col-3">
                <CategoryContentLeft cat={this.props.value} />
              </div>
              <div className="col-8">
                <BlogsListingContentRight />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CategoryContent;
