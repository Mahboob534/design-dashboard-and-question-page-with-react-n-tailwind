import React from "react";
import QuestionMain from "./components/QuestionMain";
import Header from "../../layout/header/Header";
import Button from "../../components/button/Button";
import { BsQuestionCircle } from "../../assets/icons/index";
function Question() {
  return (
    <div className=" 2xl:container  ">
      <div className=" bg-backgroundSea bg-100%  contrast-75  bg-no-repeat  lg:p-1 xl:p-8">
        <div className="  mx-auto">
          <div className="w-full mb-14">
            <Header />
          </div>
          <div className="flex flex-wrap mx-auto">
            <div className="flex flex-wrap  mx-auto">
              <div className=" bg-light-white/90 rounded-3xl">
                <QuestionMain />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center max-w-full w-full text-dark-green my-5">
            <Button active={false} icon={<BsQuestionCircle />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
