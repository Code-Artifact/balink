import { FaFilter, FaListOl, FaSearch } from "react-icons/fa";
import TicketReceipt from "./ticketLikeReceipt";

export default function OrderList({ title, children }) {
  const handleSearch = (input) => {
    console.log(input.target.value);
  };
  return (
    <div className="w-full px-4  ">
      <div className="bg-white py-3 px-4 flex flex-col gap-2 items-center shadow-md  rounded-md">
        <h3 className="py-2 border-b-2 border-dotted w-5/6 text-center">
          {title}
        </h3>
        <div className="flex gap-3 py-2 w-full relative">
          <button className="bg-wh text-gray-600 p-3 rounded-lg">
            <FaFilter />
          </button>
          <button className="bg-wh text-gray-600 p-3 rounded-lg ">
            <FaListOl />
          </button>
          <div className="relative w-full">
            <input
              id="full-name"
              name="fullname"
              type="text"
              autoComplete="text"
              required
              className="text-right pr-10 max-mob-sm:pr-3 max-mob-sm:placeholder-transparent pl-3 block w-full bg-wh appearance-none rounded-lg border border-gray-300 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sec focus:outline-none focus:ring-sec max-sm:text-2xs sm:text-sm"
              placeholder="دنبال سفارش خاصی می گردید؟"
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-9/10 top-1/3 max-mob-sm:left-1/2 z-10 max-mob-sm:z-0 text-gray-600 " />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
