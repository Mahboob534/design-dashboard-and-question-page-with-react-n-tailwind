import iranFlag from "../assets/images/iranFlag.jpg";
import franceFlag from "../assets/images/franceFlag.png";
import spainFlag from "../assets/images/spainFlag.jpg";
 export const courses = [
  {
    flag_first: <img className=" max-w-14 w-14 h-14" src={iranFlag} />,
    flag_second: <img className=" max-w-14 w-14 h-14" src={franceFlag} />,
    courseName: " دوره آموزش فرانسوی",
    progress_percent:70,
  },
  {
    flag_first:<img className=" max-w-14 w-14 h-14" src={franceFlag} />,
    flag_second:<img className=" max-w-14 w-14 h-14" src={iranFlag} /> ,
    courseName: " دوره آموزش فارسی",
    progress_percent:20,
  },
  {
    flag_first:<img className=" max-w-14 w-14 h-14" src={iranFlag} />,
    flag_second: <img className=" max-w-14 w-14 h-14" src={spainFlag} /> ,
    courseName: " دوره آموزش اسپانیایی",
    progress_percent:50,
  }


];
