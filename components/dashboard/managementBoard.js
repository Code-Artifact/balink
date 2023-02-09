import Link from "next/link";
import { MdAllInbox } from "react-icons/md";
import { FaBoxes, FaCalculator, FaUsers } from "react-icons/fa";
import FatButton from "./fatButton";

export default function ManagementBoard() {
  return (
    <div className="w-full px-4">
      <div className="bg-white flex gap-2 flex-col items-center py-2 rounded-md shadow-md ">
        <h2>پیشخوان مدیریت</h2>
        <div className="grid grid-cols-2 gap-2 w-full px-2">
          <FatButton href={"#"} text="مدیریت محصولات">
            <FaBoxes size={28} className="text-sec" />
          </FatButton>
          <FatButton href={"/dashboard/orderManagment"} text="مدیریت سفارشات">
            <MdAllInbox size={28} className="text-sec" />
          </FatButton>
          <FatButton href={"#"} text="مدیریت کاربران">
            <FaUsers size={28} className="text-sec" />
          </FatButton>
          <FatButton href={"#"} text="حساب و کتاب">
            <FaCalculator size={28} className="text-sec" />
          </FatButton>
        </div>
      </div>
    </div>
  );
}
