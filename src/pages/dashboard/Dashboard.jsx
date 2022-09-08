import React from "react";
import Header from "../../layout/header/Header";
import Main from "./components/Main";

import SlideBar from "../../layout/slidebar/SlideBar";

function Dashboard() {
  return (
    <div className=" 2xl:container ">
      <div className=" bg-background bg-100% max-w-full w-full h-full contrast-75  bg-no-repeat  pb-40 px-16" >
        <div className=" mx-auto ">
          <Header />
          <div className="flex flex-wrap justify-center items-center  ">
            <div className=" w-2/12 ">
              <SlideBar />
            </div>
            <div className=" w-10/12 ">
              <div className="backdrop-saturate-150 bg-dark-white/90 rounded-3xl p-6">
                <div className="block text-light-gray font-yekan-bakh p-5">
                  <h1 className=" font-semibold text-3xl ">
                    {" "}
                    عصر بخیر، امیر عزیز{" "}
                  </h1>
                  <p className="font-light text-2xl pt-3 pb-2">
                    {" "}
                    دوره های شما{" "}
                  </p>
                </div>
                <Main />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
