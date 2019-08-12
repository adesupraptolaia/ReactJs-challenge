import React from "react";
import BlogsListingHeader from "./BlogsListingHeader";
import BlogsListingContentLeft from "./BlogsListingContentLeft";
import BlogsListingContentRight from "./BlogsListingContentRight";

function BlogsListing() {
  return (
    <div>
      <BlogsListingHeader />
      <div className="Container mt-3">
        <div className="row justify-content-center">
          <div className="col-3">
            <BlogsListingContentLeft />
          </div>
          <div className="col-8">
            <BlogsListingContentRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsListing;
