import React from "react";
import { BsChevronRight } from "../../assets/icons/index";
function Button(props) {
  const icon = props.icon;

  return (
    <button className="border-inherit border-2 bg-light-white text-inherit w-10 h-10 text-lg text-center p-2 rounded-xl">
      {icon}
    </button>
  );
}

export default Button;
