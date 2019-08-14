import React from "react";
import CategoryContent from "./CategoryContent";

function Category({ match }) {
  return <CategoryContent value={match.params.source_name} />;
}

export default Category;
