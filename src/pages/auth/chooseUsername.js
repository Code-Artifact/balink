import AuthLayout from "components/authLayout";
import { useRouter } from "next/router";

export default function ChooseUsername() {
  const router = useRouter();

  const handleSubmit = () =>
    router.push(
      { pathname: "/auth/finished", query: { name: "/auth" } },
      "/auth"
    );

  return (
    <AuthLayout title="انتخاب بالینک آدرس">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="mt-4">
            <label
              htmlFor="username"
              className="block text-right text-gray-500 pb-2"
            >
              آدرس بالینک =
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="text"
              required
              className=" pl-20 pr-3 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sec focus:outline-none focus:ring-sec sm:text-sm"
              //   placeholder="شماره موبایل"
            />
          </div>
          <div className="relative bottom-9 left-3 z-20 inline-block text-sec">
            balink.io/
          </div>
          {
            <div className="text-green-500 text-xs text-right flex-end">
              <span>تبریک! بالینک آدرس شما قابل ثبت است </span>
              <span>✅</span>
            </div>
          }
          <div className="bg-notif p-2 my-4 rounded-md text-right text-notif-t text-xs">
            پیشنهاد می کنیم بالینک آدرس انتخابی شما، دقیقا مشابه آی‌دی کسب و کار
            شما در پلتفرم اصلی تجاری شما باشد
          </div>
          <div className="bg-notif p-2 my-4 rounded-md text-notif-t text-right text-xs">
            <span className="block font-bold">
              بالینک آدرس تحت هیچ شرایطی قابل تغییر نخواهد بود
            </span>
            لطفا در انتخاب بالینک آدرس دقت کنید
          </div>
        </div>
        <div className="flex-col items-center gap-3 mb-5">
          <div className="flex flex-row-reverse items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            <label
              for="link-checkbox"
              className="px-2 ml-2 text-sm font-medium text-gray-900"
            >
              من با تمام
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline pr-1"
              >
                قوانین پلتفرم بالینک
              </a>{" "}
              موافقت می کنم
            </label>
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-sec mt-5 py-3 px-4 text-base font-medium text-white hover:bg-sec-dark"
            onClick={handleSubmit}
          >
            ثبت نام در بالینک
          </button>
        </div>
      </div>
    </AuthLayout>
  );
}
