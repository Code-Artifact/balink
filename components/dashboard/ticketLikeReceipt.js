import { FaCalendarDay, FaDollarSign, FaUserAlt } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { BiBarcodeReader } from "react-icons/bi";
import { useRouter } from "next/router";

const date = new Date();
const faDate = new Intl.DateTimeFormat("fa", {
  year: "numeric",
  day: "numeric",
  month: "numeric",
  calendar: "persian",
}).format(date);
let classes;
let butText;

export default function TicketReceipt({
  index = 1,
  name = "محبوبه داودی دیلمی",
  number = 2,
  orderCode = 1235643,
  dateR = faDate,
  type = "dp",
  price = "125/000/000",
}) {
  const router = useRouter();

  const handleClick = () =>
    router.push(
      { pathname: "/dashboard/products", query: { name: "/dashboard" } },
      "/unprossecedProducts/products"
    );

  switch (type) {
    case "pn":
      classes +=
        "p-2 col-span-3 text-white rounded-lg text-xs max-sm:text-2xs bg-greenblue";
      butText = "پردازش نشده";
      break;
    case "ps":
      classes +=
        "p-2 col-span-3 text-white rounded-lg text-xs max-sm:text-2xs bg-yellowgreen";
      butText = "پردازش شده";
      break;
    case "dp":
      classes +=
        "p-2 col-span-3 text-white rounded-lg text-xs max-sm:text-2xs bg-pur";
      butText = "در حال پردازش";
      break;
    case "es":
      classes +=
        "p-2 col-span-3 text-white rounded-lg text-xs max-sm:text-2xs bg-blueJean";
      butText = "ارسال شده";
      break;
    case "ts":
      classes +=
        "p-2 col-span-3 text-white rounded-lg text-xs max-sm:text-2xs bg-purpleblue";
      butText = "تحویل داده شده";
      break;
    case "cs":
      classes +=
        "p-2 col-span-3 text-white rounded-lg text-xs max-sm:text-2xs bg-pinkred";
      butText = "لغو شده";
      break;
    case "sec":
      classes +=
        "p-2 col-span-3 text-white rounded-lg text-xs max-sm:text-2xs bg-sec";
      butText = "نمایش سفارش";
      break;

    default:
      break;
  }

  return (
    <div className="flex bg-wh rounded-2xl w-full h-36 ">
      <div className="grid grid-cols-8 p-2 gap-2  w-5/6 border-r-2 border-gray-300 border-dotted">
        <div className="flex gap-2 w-full justify-end items-center text-gray-500 p-2 col-span-8 bg-white rounded-lg text-right text-sm max-sm:text-xs">
          {name}
          <FaUserAlt />
        </div>
        <div className="flex gap-1 w-full justify-center items-center text-gray-500 p-2 col-span-3 bg-white rounded-lg text-sm max-sm:text-xs ">
          <FaCalendarDay />
          {dateR}
        </div>
        <div className="flex gap-1 w-full justify-center items-center text-gray-500 p-2 col-span-3 bg-white rounded-lg text-sm max-sm:text-xs">
          <BiBarcodeReader />
          {orderCode}
        </div>
        <div className="flex gap-1 w-full justify-center items-center text-gray-500 p-2 col-span-2 bg-white rounded-lg text-sm max-sm:text-xs">
          <span>قلم</span>
          {number}
          <FiBox />
        </div>
        <button onClick={handleClick} className={classes}>
          {butText}
        </button>
        <div className="flex gap-2 w-full justify-between items-center text-gray-500 p-2 col-span-5  bg-white rounded-lg text-sm max-sm:text-2xs">
          <FaDollarSign />
          {price + "  ریال "}
        </div>
      </div>
      <div className="flex items-center justify-center relative w-1/6">
        {index}
        <div className="absolute -top-1 right-9/10 bg-white rounded-full w-3 h-3" />
        <div className="absolute -bottom-1 right-9/10 bg-white rounded-full w-3 h-3" />
      </div>
    </div>
  );
}
