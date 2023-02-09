import Image from "next/image";
import Link from "next/link";

export default function FinishedSignUp() {
  return (
    <div className="bg-wh flex justify-center items-center h-screen">
      <div className="relative w-96  bg-white shadow-lg rounded-2xl flex flex-col justify-center items-center gap-3 h-3/6 border-2">
        <Image
          src="/assets/images/footage2.svg"
          width={400}
          height={400}
          className="absolute w-4/6 bottom-96 "
        />
        <div className="absolute bottom-16 flex gap-3 flex-col items-center justify-center">
          <div className="bg-gray-200 text-pri rounded text-xl font-bold px-3 py-1 w-fit flex items-center justify-center">
            {"محمد حسن محسنی خو"}
          </div>
          حساب کاربری شما در پلتفرم بالینک برای فروشگاه
          <div className="bg-gray-200 text-sec rounded text-xl font-bold px-3 py-1 w-fit flex items-center justify-center">
            {"محصولات بتنی مداد"}
          </div>
          بالینک آدرس
          <div className="bg-gray-200 text-sec rounded text-xl font-bold px-3 py-1 w-fit flex items-center justify-center">
            <span className="font-normal text-gray-400">balink.io/</span>
            {"medad.online"}
          </div>
          ساخته شد و بعد از احراز هویت در دسترس خواهد بود
          <div className="border-gray-200 border-b-2 w-full h-0 border-dashed" />
          <Link
            href="/dashboard"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-sec py-2 px-4 text-base font-medium text-white hover:bg-sec-dark"
          >
            ورود به پیشخوان
          </Link>
        </div>
      </div>
    </div>
  );
}
