import React from "react";

import { BsArrowLeft } from "../../../assets/icons/index";
import { Link } from "react-router-dom";

function BoxCourse(props) {
  const course = props.course;

  return (
 <div className="flex flex-wrap   lg:w-6/12 xl:w-3/12 my-3"> 
 <div className="bg-white/90 w-64 h-60 rounded-2xl">
        <div className=" pt-5">
          <div className="flex justify-center items-center px-5">
            {course.flag_first}
            <span className="max-w-14 w-14 h-14 text-center text-xl text-light-gray p-5">
              <BsArrowLeft />
            </span>
            {course.flag_second}
          </div>
          <div className="w-full mx-auto py-5">
            <p className="text-light-gray text-center text-xl font-yekan-bakh">
              {" "}
              <Link to="/FrancyLanguage">{course.courseName}</Link>
            </p>
          </div>
          <div className="w-full mx-auto px-5 ">
            <div
              className="w-full bg-white-progress  rounded-full h-1.5 mb-4"
              style={{ direction: "ltr" }}
            >
              <div
                className="bg-gray-progress  h-1.5 rounded-full"
                style={{
                  width: `${course.progress_percent}%`,
                  direction: "ltr",
                }}
              ></div>
            </div>
          </div>
          <div className="w-full px-5 ">
            <button className=" max-w-52 w-52 h-10 text-white font-yekan-bakh text-sm font-medium rounded-xl py-1 bg-gray-button hover:bg-gray-900 focus:outline-none  ">
              شروع جلسه جدید
            </button>
          </div>
        </div>
      </div>
  </div>
     
    
  );
}

export default BoxCourse;
