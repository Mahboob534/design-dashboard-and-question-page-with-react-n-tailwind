import React from "react";
import BoxCourse from "./BoxCourse";
import { BsArrowLeft } from "../../../assets/icons/index";
import { courses } from "../../../config/Courses";
import List from "./List";
import { ListInfo } from "../../../config/ListInto";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
function Main() {
  return (
    <div className=" flex flex-col w-full gap-2 ">
      <div className="flex flex-wrap w-full justify-around items-center mx-3 ">
        {courses.map((course) => (
          <BoxCourse course={course} key={course.id} />
        ))}
        <div className="flex flex-wrap xl:justify-center items-center  lg:w-6/12 lg:gap-y-2 xl:w-3/12   ">
          <div className="max-w-60 w-60  h-60 rounded-2xl border-2 border-dashed border-light-gray/100 py-5  ">
            <div className="flex flex-col justify-center items-center ">
              <button className=" max-w-13 w-13 h-13 text-center text-light-gray text-2xl rounded-xl  bg-light-white/80 hover:bg-gray-900 focus:outline-none p-3 ">
                <BsArrowLeft />
              </button>
              <p className="font-yekan-bakh text-light-gray  text-xl mt-8">
                {" "}
                مشاهده همه دوره ها{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-wrap lg:flex-wrap xl:flex-nowrap  w-full justify-around items-center gap-3">
        <div className="flex flex-wrap justify-center items-center lg:full xl:w-6/12 lg:order-last xl:order-first">
          <div className="max-w-534px w-534px h-60 bg-light-white/90 rounded-3xl  ">
            <div className="font-yekan-bakh text-light-gray px-5 py-3">
              <p className="text-xl"> آخرین ورودها</p>
            </div>
            <div className="font-yekan-bakh px-5 ">
              <ul className=" max-w-full w-full  ">
                {ListInfo.map((list) => (
                  <List list={list.title} key={list.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:justify-start xl:justify-center items-center  lg:w-5/12 xl:w-3/12 ">
          <div className=" flex flex-col items-center w-200px h-60 bg-white/90 rounded-3xl  ">
            <div className="font-yekan-bakh text-lg text-light-gray p-3">
              <p className="text-center">لورم ایپسوم</p>
              <div className="w-32 h-32 mx-auto pt-5">
                <DoughnutChart />
              </div>
            </div>
          </div>
         
        </div>
        <div className="flex flex-wrap lg:justify-start xl:justify-center items-center lg:w-6/12 xl:w-3/12 ">
        <div className="flex flex-col items-center w-64 h-60 bg-white/90 rounded-3xl  ">
            <div className="font-yekan-bakh text-lg text-light-gray p-3">
              <p className="text-center">ساعات گذرانده این ماه</p>
            </div>
            <div className="w-64 h-14  pt-5 ">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
