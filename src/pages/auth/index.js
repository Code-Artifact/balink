import Layout from "components/layout";
import Image from "next/image";
import Link from "next/link";

export default function SignUpIn() {
  return (
    <Layout>
      <div className="px-4 flex flex-col items-center justify-center gap-2">
        <Image
          src="/assets/images/footage1.svg"
          width={"450"}
          height={"400"}
          priority={true}
          className="w-auto h-auto pb-6"
          alt="footage-1"
        />

        <Link
          href="../logo"
          className="group relative flex w-full justify-center items-center rounded-md bg-pri py-3 px-4 text-base font-bold text-white hover:bg-pri-dark shadow-md"
        >
          ورود به حساب کاربری
        </Link>
        <Link
          href="/auth/signUp"
          className="group relative flex w-full justify-center items-center rounded-md bg-sec py-3 px-4 text-base font-bold text-white hover:bg-sec-dark shadow-md"
        >
          ثبت نام
        </Link>
      </div>
    </Layout>
  );
}
