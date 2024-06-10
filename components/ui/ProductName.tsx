import React from "react";
import classNames from "classnames";

const ProductName = ({ name, className }) => {
  return <h3 className={classNames("text-lg font-bold mb-2", className)}>{name}</h3>;
};

export default ProductName;
