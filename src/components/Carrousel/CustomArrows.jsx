import React from "react";

const CustomLeftArrow = ({ onClick }) => (
  <span onClick={() => onClick()} className="custom-left-arrow">
    G
  </span>
);

const CustomRightArrow = ({ onClick }) => (
  <span onClick={() => onClick()} className="custom-right-arrow">
    G
  </span>
);

export {
  CustomLeftArrow,
  CustomRightArrow,
};