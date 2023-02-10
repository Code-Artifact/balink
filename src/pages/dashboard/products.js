import HeadCard from "components/dashboard/headCard";
import { FaDollarSign, FaInfoCircle, FaTruck, FaUserAlt } from "react-icons/fa";
import DashboardLayout from "./../../../components/dashboradLayout";
import { useState } from "react";
import Image from "next/image";

const focusedClass =
  "bg-sec p-2 flex items-center justify-center gap-1 rounded-lg text-sm max-mob-sm:text-xs text-white ";
const regClass =
  "bg-wh p-2 flex items-center justify-center gap-1 rounded-lg text-sm max-mob-sm:text-xs text-gray-500 ";

const orderInfoTab = (
  <div className="flex flex-col gap-2 w-full rounded-md shadow-md ">
    <div className="bg-white rounded-md shadow-lg p-2">
      <div className="flex relative justify-center px-4 items-center p-3 border-b-2 border-dashed">
        <h2 className="text-gray-500">جزئیات سفارش</h2>
        <div className="absolute top-85/100 -left-4 h-4 w-4 rounded-full bg-wh" />
        <div className="absolute top-85/100 -right-4 h-4 w-4 rounded-full bg-wh" />
      </div>
      <div className="flex flex-col gap-2 items-center p-4">
        <div className="relative">
          <Image
            alt="product-Image"
            src="/assets/images/product1.svg"
            width={130}
            height={130}
            className="relative mx-auto  w-auto h-auto z-100"
          />
          {/* <div className=" absolute bg-gray-300 top-8 w-full h-4 my-15 rounded-2xl z-10" /> */}
        </div>
        <div className="w-full grid grid-cols-2 gap-2 p-2">
          <div className="items-center justify-center bg-gray-200 text-sm max-sm:text-xs text-gray-500 hover:bg-slate-300 py-1 rounded-md text-center px-4 col-span-2 ">
            {"Galaxy M  موبایل سامسونگ مدل"}
          </div>
          <div className="flex items-center justify-center bg-gray-200 text-sm max-sm:text-xs text-gray-500 py-1 rounded-md text-center px-4">
            <span>ریال</span>
            <span>{"73/5/00/00"}</span>
          </div>
          <div className="flex items-center justify-center gap-1 bg-gray-200 text-sm max-sm:text-xs text-gray-500 py-1 rounded-md text-center px-4">
            <span>عدد</span>
            <span>{2}</span>
          </div>
        </div>
      </div>
      <div className="flex relative justify-between mx-2 py-2 items-center">
        <div className="w-full border-2 rounded-lg p-0 flex items-center justify-end gap-2">
          <div className="h-full  ">
            <span className="bg-wh rounded-xl text-xs px-2">
              {"رنگ: آبی رویال"}
            </span>{" "}
            <span className="bg-wh rounded-xl text-xs px-2 mx-2">
              {"گارانتی: با گارانتی"}
            </span>
          </div>
          <span className="bg-wh h-10 px-1 text-xs py-2 text-center">
            ویژگی ها
          </span>
        </div>
        {/* <div className="absolute top-58 -left-2 h-4 w-4 rounded-full bg-wh" /> */}
        {/* <div className="absolute top-58 -right-2 h-4 w-4 rounded-full bg-wh" /> */}
      </div>
    </div>
  </div>
);
const fiscalTab = (
  <div>
    {/* <div className="flex flex-col gap-2 w-full rounded-md shadow-md ">
      <div className="bg-white rounded-md shadow-lg p-2">
        <div className="flex relative justify-center px-4 items-center p-3 border-b-2 border-dashed">
          <h2 className="text-gray-500">جزئیات مالی سفارش</h2>
          <div className="absolute top-85/100 -left-4 h-4 w-4 rounded-full bg-wh" />
          <div className="absolute top-85/100 -right-4 h-4 w-4 rounded-full bg-wh" />
        </div>
        <div className="flex flex-col gap-2 items-center p-4">
          <div className="w-full relative overflow-x-auto shadow-md rounded-lg">
            <table className=" w-full border-collapse border rounded-lg border-gray-600 ...">
              <thead className="bg-sec">
                <tr>
                  <th className="border p-2 text-sm text-white border-gray-600 ">
                    {"73/5/00/00 ريال"}
                  </th>
                  <th className="flex items-center justify-end gap-2 border p-2 text-sm text-white border-gray-600 ">
                    مبلغ کل سفارش
                    <FaEquals />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 text-sm text-gray-500  border-gray-600 ">
                    {"73/5/00/00 ريال"}
                  </td>
                  <td className="flex items-center justify-end gap-2 border p-2 text-sm text-gray-500  border-gray-600 ">
                    هزینه حمل و نقل
                    <FaTruck />
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 text-sm text-gray-500  border-gray-600 ">
                    {"73/5/00/00 ريال"}
                  </td>
                  <td className="flex items-center justify-end gap-2 border p-2 text-sm text-gray-500  border-gray-600 ">
                    هزینه بسته بندی
                    <FaBoxOpen />
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 text-sm text-gray-500  border-gray-600 ">
                    {"0"}
                  </td>
                  <td className="flex items-center justify-end gap-2 border p-2 text-sm text-gray-500  border-gray-600 ">
                    تخفیف
                    <FaPercentage />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */}
  </div>
);
const buyerTab = (
  <div>
    <FaUserAlt />
  </div>
);
const consignmentTab = (
  <div>
    <FaTruck />
  </div>
);

export default function Products({ product = "1234123" }) {
  const [orderInfo, setOrderInfo] = useState(true);
  const [fiscal, setFiscal] = useState(false);
  const [buyer, setBuyer] = useState(false);
  const [consignment, setConsignment] = useState(false);

  let content;

  if (orderInfo) {
    content = orderInfoTab;
  } else if (fiscal) {
    content = fiscalTab;
  } else if (buyer) {
    content = buyerTab;
  } else if (consignment) {
    content = consignmentTab;
  }

  const handleClick = (btn1, setbtn1, setbtn2, setbtn3, setbtn4) => {
    if (!btn1) {
      setbtn1(true);
      setbtn2(false);
      setbtn3(false);
      setbtn4(false);
    }
  };

  return (
    <DashboardLayout>
      <HeadCard title={product + " سفارش شماره "} />
      <div className="w-full px-4">
        <div className="bg-white p-3  flex justify-center flex-row-reverse gap-2 rounded-md">
          <button
            onClick={() =>
              handleClick(
                orderInfo,
                setOrderInfo,
                setBuyer,
                setConsignment,
                setFiscal
              )
            }
            className={orderInfo ? focusedClass : regClass}
          >
            جزئیات سفارش
            <FaInfoCircle />
          </button>
          <button
            onClick={() =>
              handleClick(
                fiscal,
                setFiscal,
                setBuyer,
                setConsignment,
                setOrderInfo
              )
            }
            className={fiscal ? focusedClass : regClass}
          >
            مالی
            <FaDollarSign />
          </button>
          <button
            onClick={() =>
              handleClick(
                buyer,
                setBuyer,
                setConsignment,
                setFiscal,
                setOrderInfo
              )
            }
            className={buyer ? focusedClass : regClass}
          >
            خریدار
            <FaUserAlt />
          </button>
          <button
            onClick={() =>
              handleClick(
                consignment,
                setConsignment,
                setBuyer,
                setFiscal,
                setOrderInfo
              )
            }
            className={consignment ? focusedClass : regClass}
          >
            ارسال
            <FaTruck />
          </button>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="flex items-center">{content}</div>
      </div>
    </DashboardLayout>
  );
}
