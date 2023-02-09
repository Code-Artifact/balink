import { LineChart, Line } from "recharts";
import { useRef, useState, useLayoutEffect } from "react";

const data1 = [
  { name: "Page A", uv: 0, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 600, pv: 2800, amt: 2000 },
  { name: "Page C", uv: 300, pv: 2000, amt: 2400 },
  { name: "Page D", uv: 800, pv: 2200, amt: 2800 },
  { name: "Page F", uv: 600, pv: 2100, amt: 2100 },
];
const data2 = [
  { name: "Page A", uv: 0, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 600, pv: 2800, amt: 2000 },
  { name: "Page C", uv: 300, pv: 2000, amt: 2400 },
  { name: "Page D", uv: 800, pv: 2200, amt: 2800 },
  { name: "Page F", uv: 0, pv: 2100, amt: 2100 },
];

const fucosedClass = "text-center text-xs py-1 rounded-lg bg-sec text-wh";
const regClass = "text-center text-xs py-1 rounded-lg bg-wh text-gray-500";

export default function CalChart() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(true);
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  //   const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    // setHeight(ref.current.offsetHeight);
  }, []);

  const clickHandler = (btn1, setbtn1, setbtn2) => {
    if (btn1) {
      setbtn1(false);
      setbtn2(true);
    } else {
      setbtn1(true);
      setbtn2(false);
    }
  };
  const renderLineChart = (
    <LineChart
      width={width - 100}
      height={width - 160}
      data={button1 ? data1 : data2}
      className="w-fit h-fit"
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
  return (
    <div ref={ref} className="w-full px-4 ">
      <div className="bg-white shadow-md rounded-md p-4 flex flex-col gap-2 items-center justify-center">
        <h3 className="font-semibold text-gray-500">!حساب و کتاب چه خبر؟</h3>
        <div className="bg-wh p-2 rounded-md w-full">{renderLineChart}</div>
        <div className="grid grid-cols-2 gap-1 w-full">
          <button
            className={button1 ? fucosedClass : regClass}
            onClick={() => clickHandler(button1, setButton1, setButton2)}
          >
            بر اساس مبلغ فروش
          </button>
          <button
            className={button2 ? fucosedClass : regClass}
            onClick={() => clickHandler(button2, setButton2, setButton1)}
          >
            بر اساس مبلغ تعداد
          </button>
        </div>
        <p className="text-gray-300 text-xs">
          نمودار بر اساس داده های هفت روز گذشته است
        </p>
      </div>
    </div>
  );
}
