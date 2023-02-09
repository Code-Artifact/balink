import {
  MdSettings,
  MdNotificationsActive,
  MdContactSupport,
} from "react-icons/md";

export default function Info({ Tdate }) {
  return (
    <div className="px-4 w-full">
      <div className="h-40 bg-white rounded-lg shadow-md w-full  ">
        <div className="h-2/3 border border-b-2 flex flex-col items-center justify-evenly ">
          <div className=" h-14 w-14 bg-blue-700 rounded-full relative bottom-7 " />
          <h3 className="relative bottom-5">{"نام فروشگاه"}</h3>
          <h2 className="bg-gray-400 px-1 rounded-xl relative bottom-3 text-sm">
            balinkadress
          </h2>
        </div>
        <div className=" h-1/3 flex items-center justify-evenly">
          <span className="py-1 px-2 bg-gray-300 rounded-xl text-right text-sm max-sm:text-xs">
            {Tdate}
          </span>
          <span className="py-2 px-5 max-mob:px-2  bg-gray-300 rounded-xl">
            <MdSettings size={20} className="text-gray-500" />
          </span>
          <span className="py-2 px-5 max-mob:px-2  bg-gray-300 rounded-xl">
            <MdContactSupport size={20} className="text-gray-500" />
          </span>
          <span className="py-2 px-5 max-mob:px-2 bg-gray-300 rounded-xl">
            <MdNotificationsActive size={20} className="text-gray-500" />
          </span>
        </div>
      </div>
    </div>
  );
}
