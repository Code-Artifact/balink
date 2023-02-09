import Link from "next/link";
import {
  MdSettings,
  MdNotificationsActive,
  MdContactSupport,
} from "react-icons/md";
import { useRouter } from "next/router";

export default function HeadCard({ Tdate = "پنجشنبه 14 آبان 1401 ", title }) {
  const router = useRouter();

  return (
    <div className="w-full px-4">
      <div className="h-40 bg-white rounded-lg shadow-md ">
        <div className="h-2/3 px-3 border border-b-2 flex items-center justify-between ">
          <button
            onClick={() => router.back()}
            className="px-2 py-2 bg-gray-300 rounded-lg text-center"
          >
            {"< بازگشت"}
          </button>
          <h3 className="text-gray-500 ">{title}</h3>
        </div>
        <div className=" h-1/3 flex items-center justify-evenly">
          <span className="py-2 px-2 bg-gray-300 text-sm max-mob:text-xs max-mob-sm:text-2xs rounded-xl text-gray-500 text-right">
            {Tdate}
          </span>
          <span className="py-2 px-5  bg-gray-300 rounded-xl">
            <MdSettings size={20} className="text-gray-500" />
          </span>
          <span className="py-2 px-5  bg-gray-300 rounded-xl">
            <MdContactSupport size={20} className="text-gray-500" />
          </span>
          <span className="py-2 px-5  bg-gray-300 rounded-xl">
            <MdNotificationsActive size={20} className="text-gray-500" />
          </span>
        </div>
      </div>
    </div>
  );
}
