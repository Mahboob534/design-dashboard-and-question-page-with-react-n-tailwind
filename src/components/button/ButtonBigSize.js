import React from "react";

function ButtonBigSize(props) {
    const icon=props.icon
    const text=props.text
  return (
    <button className=" max-w-36 w-36 h-36 bg-light-white rounded-2xl ">
   {icon}
   {text}
  </button>
  );
}

export default ButtonBigSize;
