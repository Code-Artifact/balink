import { useRef, useState, useLayoutEffect } from "react";
import { FiPackage } from "react-icons/fi";
import { GoScreenFull } from "react-icons/go";
import { BsBagCheckFill, BsCartCheckFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FaBoxes, FaCalculator, FaTruck } from "react-icons/fa";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import FatButton from "./fatButton";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#0088FE",
  "#FF8042",
  "#FFBB28",
];

export default function ReportCard() {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  //   const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    // setHeight(ref.current.offsetHeight);
  }, []);

  return (
    <div className="w-full px-4">
      <div ref={ref} className="bg-white p-3 rounded-md shadow-md">
        <div className="w-full flex items-center justify-center">
          <PieChart width={width / 2} height={width / 2}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={width / 5}
              fill={"#8884d8"}
              labelLine={false}
              label={data01.value}
              className=""
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <FatButton href={"#"} text="سفارشات در حال پردازش" color="pur">
            <FiPackage size={28} className="text-sec" />
          </FatButton>
          <FatButton
            href={"/dashboard/unprossecedProducts"}
            text="سفارشات پردازش نشده"
            color="greenblue"
          >
            <GoScreenFull size={28} className="text-sec" />
          </FatButton>
          <FatButton href={"#"} text="سفارشات ارسال شده" color="blueJean">
            <FaTruck size={28} className="text-sec" />
          </FatButton>
          <FatButton href={"#"} text="سفارشات پردازش شده" color="yellowgreen">
            <BsCartCheckFill size={28} className="text-sec" />
          </FatButton>
          <FatButton href={"#"} text="سفارشات لغو شده" color="pinkred">
            <MdCancel size={28} className="text-sec" />
          </FatButton>
          <FatButton
            href={"#"}
            text="سفارشات تحویل داده شده"
            color="purpleblue"
          >
            <BsBagCheckFill size={28} className="text-sec" />
          </FatButton>
          {/* <Link
            href="#"
            className="flex flex-col gap-2 items-center group relative justify-center rounded-md border border-transparent bg-gray-200 py-5 px-7 text-base font-medium hover:bg-gray-300 "
          >
            <FaBoxes size={28} className="text-sec" />
            <h3 className="text-pri text-xs">مدیریت محصولات</h3>
            <div className="w-1/2 border-b-10 border-black " />
          </Link>
          <Link
            href="/dashboard/orderManagment"
            className="flex flex-col gap-2 items-center group relative justify-center rounded-md border border-transparent bg-gray-200 py-5 px-7 text-base font-medium hover:bg-gray-300 "
          >
            <MdAllInbox size={28} className="text-sec" />
            <h3 className="text-pri text-xs">مدیریت سفارشات</h3>
            <div className="w-12 border-b-3 border-black " />
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-2 items-center group relative justify-center rounded-md border border-transparent bg-gray-200 py-5 px-7 text-base font-medium hover:bg-gray-300 "
          >
            <FaUsers size={28} className="text-sec" />
            <h3 className="text-pri text-xs">مدیریت کاربران</h3>
            <div className="w-1/2 border-b-10 border-black " />
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-2 items-center group relative justify-center rounded-md border border-transparent bg-gray-200 py-5 px-7 text-base font-medium hover:bg-gray-300 "
          >
            <FaCalculator size={28} className="text-sec" />
            <h3 className="text-pri text-xs">حساب و کتاب</h3>
            <div className="w-1/2 border-b-10 border-black " />
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-2 items-center group relative justify-center rounded-md border border-transparent bg-gray-200 py-5 px-7 text-base font-medium hover:bg-gray-300 "
          >
            <FaCalculator size={28} className="text-sec" />
            <h3 className="text-pri text-xs">حساب و کتاب</h3>
            <div className="w-1/2 border-b-10 border-black " />
          </Link>
          <Link
            href="#"
            className="flex flex-col gap-2 items-center group relative justify-center rounded-md border border-transparent bg-gray-200 py-5 px-7 text-base font-medium hover:bg-gray-300 "
          >
            <FaCalculator size={28} className="text-sec" />
            <h3 className="text-pri text-xs">حساب و کتاب</h3>
            <div className="w-1/2 border-b-10 border-black " />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
