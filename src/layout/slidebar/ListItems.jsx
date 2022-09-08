import React from "react";
import { toFarsiNumber } from "../../utils/Utils";
import {Link} from 'react-router-dom'
function ListItems(props) {
  
  const icon = props.icon;
  const count=props.count 
  return (
    <div>
      <li className="relative w-16 h-16 p-5 mb-10px bg-dark-white  rounded-2xl">
        <Link to="#">{icon}</Link>
        <div className={count !=0 ? "absolute w-6 h-6 rounded-lg text-center font-bold font-yekan-bakh bg-red-badget  text-white text-lg  bottom-3 left-12 z-10 " : "hidden"} >
          {toFarsiNumber(count)}
        </div>
      </li>
    </div>
  );
}

export default ListItems;
