import Image from "next/image";

export default function TicketOrder() {
  return (
    <div className="w-full px-4">
      <div className="bg-white relative h-72 rounded-md shadow-lg">
        <div className="flex justify-between px-4 items-center h-1/6 border-b-2 border-dashed">
          <span className="text-gray-300 text-sm">{"476653"}</span>
          <span className="bg-sec px-1 py-1 rounded-lg text-center text-wh text-sm">
            {"1ساعت پیش"}
          </span>
          <div className="absolute top-9n -left-2 h-4 w-4 rounded-full bg-wh" />
          <div className="absolute top-9n -right-2 h-4 w-4 rounded-full bg-wh" />
        </div>
        <div className="h-4/6 flex flex-col items-center p-2">
          <div className="relative">
            <Image
              src="/assets/images/footage3.svg"
              width={100}
              height={100}
              className="relative mx-auto  w-4/5 h-24 z-100"
            />
            {/* <div className=" absolute bg-gray-300 top-8 w-full h-4 my-15 rounded-2xl z-10" /> */}
          </div>
          <div className="grid grid-cols-2 gap-2 p-2">
            <div className="flex items-center justify-center bg-gray-200 text-sm max-sm:text-xs text-gray-500 py-1 rounded-md text-center px-4">
              لاهیجان
            </div>
            <div className="flex items-center justify-center bg-gray-200 text-sm max-sm:text-xs text-gray-500 py-1 rounded-md text-center px-4">
              محبوبه داودی دیلمی
            </div>
            <button className="items-center justify-center bg-gray-200 text-sm max-sm:text-xs text-gray-500 hover:bg-slate-300 py-1 rounded-md text-center px-4 col-span-2 ">
              نمایش فاکتور
            </button>
          </div>
        </div>
        <div className="flex justify-between px-4 items-center h-1/6 border-t-2 border-dashed">
          <span className="bg-green-700 px-1 py-1 rounded-lg text-center text-wh text-sm">
            {"کارت به کارت"}
          </span>
          <span className="text-gray-300 font-semibold">
            {"ریال 125/000/000"}
          </span>
          <div className="absolute top-58 -left-2 h-4 w-4 rounded-full bg-wh" />
          <div className="absolute top-58 -right-2 h-4 w-4 rounded-full bg-wh" />
        </div>
      </div>
    </div>
  );
}
