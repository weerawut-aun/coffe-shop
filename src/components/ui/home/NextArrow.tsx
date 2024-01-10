import React from "react";
import { GrFormNext } from "react-icons/gr";

const NextArrow = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <GrFormNext size={30} />
    </div>
  );
};

export default NextArrow;
