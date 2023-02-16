import AuthLayout from "components/authLayout";
import AuthCode from "react-auth-code-input";
import { useRouter } from "next/router";

export default function LogIn() {
  const handleOnChange = (res) => {
    console.log(res);
  };
  const router = useRouter();

  const handleSubmit = () =>
    router.push(
      { pathname: "/auth/authPhoneLogIn", query: { name: "/auth" } },
      "/authPhone"
    );
  return (
    <AuthLayout title={"ورود به حساب کاربری"}>
      <div className="flex justify-evenly pt-12">
        <div className="border-gray-500 border-b-2 w-1/6 h-4 border-dotted" />
        <h1 className="text-gray-500">شماره موبایل خود را وارد کنید</h1>
        <div className=" border-gray-500 border-b-2 w-1/6 h-4 border-dotted" />
      </div>
      <form className="pt-4">
        <div>
          <label
            htmlFor="full-name"
            className="sr-only block text-right text-gray-500 pb-2"
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
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-pri mt-5 py-3 px-4 text-base font-medium text-white hover:bg-pri-dark"
            onClick={handleSubmit}
          >
            ارسال کد تایید
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
