import React from "react";
import greeting from "../../../assets/images/greeting.jpg";
import franceFlag from "../../../assets/images/franceFlag.png";
import {
  BsChevronRight,
  FiPlay,
  BsCheck,
  IoClose,
  AiOutlineQuestionCircle,
} from "../../../assets/icons/index";
import Button from "../../../components/button/Button";
import ButtonBigSize from "../../../components/button/ButtonBigSize";

function QuestionMain() {
  return (
    <div className="flex-shrink w-1021px h-728px">
      <div className="flex justify-around  ">
        <div className="w-1/12  text-light-gray px-10 relative bottom-6">
          <Button icon={<BsChevronRight />} />
        </div>
        <div className="w-10/12 relative bottom-16  mx-auto ">
          <img
            className="  rounded-3xl max-w-693px w-693px h-374px mx-auto"
            src={greeting}
            alt="greeting"
          />
          <div className="flex justify-center  relative bottom-8 ">
            <div className=" w-4/12 ">
              <label className=" bg-light-white text-4.5xl rounded-2xl border-2 border-dark-green max-w-64 w-64 h-16 py-2 px-3 capitalize">
                blackboard
              </label>
            </div>
            <div className="w-2/12 ">
              <button className="text-dark-green bg-light-white max-w-16 w-16 h-16 rounded-2xl border-2 border-dark-green px-5">
                <FiPlay />
              </button>
            </div>
          </div>
          <div className="flex  flex-col justify-center items-center   ">
            <div className=" max-w-full w-full mx-auto mb-5">
              <p className="font-yekan-bakh text-xl text-center">
                با توجه به تصویر، کلمه و صدا گزینه صحیح را انتخاب کنید.
              </p>
            </div>
            <div className=" flex max-w-full w-6/12  mx-auto  ">
              <div className="border-2 border-red-icon  rounded-2xl font-yekan-bakh  text-3xl font-thin  mx-auto">
                <ButtonBigSize
                  icon={<IoClose className="text-6xl text-red-icon mx-auto" />}
                  text="غلط"
                />
              </div>
              <div className="border-2 border-dark-green  rounded-2xl font-yekan-bakh  text-3xl font-thin  mx-auto">
                <ButtonBigSize
                  icon={
                    <BsCheck className="text-6xl text-dark-green mx-auto" />
                  }
                  text="درست"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/12 relative bottom-6">
          <img
            className=" bg-transparent  rounded-3xl w-12 h-12  "
            src={franceFlag}
            alt="franceFlag"
          />
        </div>
      </div>
      <div className=" flex w-full justify-center items-center  ">
        <div className=" flex justify-center items-center  w-10/12">
          <div className="text-dark-green border-dark-green mr-20">
            <Button icon={<BsChevronRight />} />
          </div>
          <div>
            <button className="bg-dark-green text-light-white text-lg w-max-107px w-107px h-50px rounded-2xl mr-12 ml-32">
              ادامه{" "}
            </button>
          </div>
        </div>

        <div className="text-light-gray 2/12">
          <Button icon={<AiOutlineQuestionCircle />} />
        </div>
      </div>
    </div>
  );
}

export default QuestionMain;
