import React from "react";
import { MdOutlineDashboard } from "../../assets/icons/index";
import { AiOutlineEye } from "../../assets/icons/index";
import { icons } from "../../config/Varible";
import ListItems from "./ListItems";

function SlideBar() {
  return (
    <div className="flex-shrink max-w-full w-full  ">
      <div className="flex justify-center items-center gap-y-5 ">
        <ul className="text-light-gray max-w-14 w-14  text-2xl">
          <div className="flex items-center justify-center max-w-8 w-8 h-8 bg-transparent backdrop-blur-xl  rounded-3xl mb-10px mx-auto p-2">
            <li className="text-slate-100 text-center text-sm p-5 ">
              <AiOutlineEye />
            </li>
          </div>

          <li className=" bg-light-white max-w-16 w-16 h-16 p-5 rounded-2xl mb-10px">
            <a to="#">
              <MdOutlineDashboard />
            </a>
          </li>
          {icons.map((icon, id) => (
            <ListItems key={id} icon={icon.icon} count={icon.count} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SlideBar;
