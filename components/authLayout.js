import Layout from "./layout";
import { useRouter } from "next/router";

export default function AuthLayout({ title, children }) {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex flex-col w-full h-full bg-wh  justify-between border-2 rounded-2xl">
        <div className="flex justify-between items-center px-6 w-full h-1/6  ">
          <button
            onClick={() => router.back()}
            className=" h-fit rounded-md border border-transparent bg-slate-300 text-center p-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
          >
            {"< مرحله قبل"}
          </button>
          <h1 className="text-pri-dark">{title}</h1>
        </div>
        <div className="w-full h-full bg-white px-4 rounded-2xl">
          {children}
        </div>
      </div>
    </Layout>
  );
}
