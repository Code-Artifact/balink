import Link from "next/link";

export default function NotifBox() {
  return (
    <div className="w-full px-4">
      <div className="bg-white flex flex-col gap-1 px-2 py-4 rounded-md justify-center items-center">
        <h4 className="text-gray-400 pb-2">اطلاعیه های بالینک</h4>
        <div className="flex justify-between px-2 py-1 bg-wh rounded-md w-full">
          <span className="text-xs text-gray-500">1401/08/05</span>
          <span className="flex justify-end gap-2">
            <span className="text-pri font-semibold text-xs">
              احتمال کندی سرویس ها
            </span>
            <span className="text-xs text-sec">■</span>
          </span>
        </div>
        <div className="flex justify-between px-2 py-1 bg-wh rounded-md w-full">
          <span className="text-xs text-gray-500">1401/08/05</span>
          <span className="flex justify-end gap-2">
            <span className="text-pri font-semibold text-xs">
              احتمال کندی سرویس ها
            </span>
            <span className="text-xs text-sec">■</span>
          </span>
        </div>
        <div className="flex justify-between px-2 py-1 bg-wh rounded-md w-full">
          <span className="text-xs text-gray-500">1401/08/05</span>
          <span className="flex justify-end gap-2">
            <span className="text-pri font-semibold text-xs">
              احتمال کندی سرویس ها
            </span>
            <span className="text-xs text-sec">■</span>
          </span>
        </div>
        <Link
          href="#"
          className="w-full text-xs font-semibold bg-sec text-wh text-center py-1 rounded-md mt-1"
        >
          همه اطلاعیه ها
        </Link>
      </div>
    </div>
  );
}
