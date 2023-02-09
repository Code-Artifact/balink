import AuthLayout from "components/authLayout";
import AuthCode from "react-auth-code-input";
import { useRouter } from "next/router";

export default function AuthPhone() {
  const handleOnChange = (res) => {
    console.log(res);
  };
  const router = useRouter();

  const handleSubmit = () =>
    router.push(
      { pathname: "/auth/confirmSignUp", query: { name: "/auth" } },
      "/auth"
    );
  return (
    <AuthLayout title={"تایید شماره موبایل"}>
      <div className="flex justify-evenly pt-12">
        <div className="border-gray-500 border-b-2 w-1/6 h-4 border-dotted" />
        <h1 className="text-gray-500">کد تایید دریافت شده را وارد کنید</h1>
        <div className=" border-gray-500 border-b-2 w-1/6 h-4 border-dotted" />
      </div>
      <div>
        <AuthCode
          onChange={handleOnChange}
          containerClassName=" flex justify-evenly pt-4 "
          inputClassName=" w-14 h-14 rounded-md shadow-inner border-2 text-center text-md"
          length={4}
        />
      </div>
      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-sec mt-5 py-3 px-4 text-base font-medium text-white hover:bg-sec-dark"
          onClick={handleSubmit}
        >
          تکمیل ثبت نام
        </button>
      </div>
    </AuthLayout>
  );
}
