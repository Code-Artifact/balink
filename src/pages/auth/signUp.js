import AuthLayout from "components/authLayout";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const handleSubmit = () =>
    router.push(
      { pathname: "/auth/authPhone", query: { name: "/auth" } },
      "/auth"
    );

  return (
    <AuthLayout title="!ثبت نام در بالینک">
      <div>
        <form className=" mt-8 space-y-6 px-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md flex flex-col gap-3">
            <div>
              <label
                htmlFor="full-name"
                className="block text-right text-gray-500 pb-2"
              >
                نام و نام خانوادگی =
              </label>
              <input
                id="full-name"
                name="fullname"
                type="text"
                autoComplete="text"
                required
                className="text-right pr-10 pl-3 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sec focus:outline-none focus:ring-sec sm:text-sm"
                //   placeholder="نام و نام خانوادگی"
              />
            </div>
            <div>
              <label
                htmlFor="id-number"
                className="block text-right text-gray-500 pb-2"
              >
                کد ملی =
              </label>
              <input
                id="id-number"
                name="idnumber"
                type="number"
                autoComplete="number"
                required
                className="text-right pr-10 pl-3 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sec focus:outline-none focus:ring-sec sm:text-sm"
                //   placeholder="کد ملی"
              />
            </div>
            <div>
              <label
                htmlFor="birth-date"
                className="block text-right text-gray-500 pb-2"
              >
                تاریخ تولد =
              </label>
              <input
                id="birth-date"
                name="birthdate"
                type="number"
                autoComplete="number"
                required
                className="text-right pr-10 pl-3 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sec focus:outline-none focus:ring-sec sm:text-sm"
                placeholder="روز / ماه / سال"
                maxLength={2}
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="block text-right text-gray-500 pb-2"
              >
                آدرس ایمیل =
              </label>
              <input
                id="email-adress"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="text-right pr-10 pl-3 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sec focus:outline-none focus:ring-sec sm:text-sm"
                //   placeholder="آدرس ایمیل"
              />
            </div>
            <div>
              <label
                htmlFor="phone-number"
                className="block text-right text-gray-500 pb-2"
              >
                شماره موبایل =
              </label>
              <input
                id="phone-number"
                name="phone"
                type="number"
                autoComplete="number"
                required
                className="text-right pr-10 pl-3 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-sec focus:outline-none focus:ring-sec sm:text-sm"
                //   placeholder="شماره موبایل"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-sec py-3 px-4 text-base font-medium text-white hover:bg-sec-dark focus:outline-none focus:ring-2 focus:ring-sec-dark focus:ring-offset-2"
              onClick={handleSubmit}
            >
              ارسال کد تایید به موبایل
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
