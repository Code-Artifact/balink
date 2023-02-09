export default function Layout({ children }) {
  return (
    <main className="w-screen flex items-center justify-center mob:bg-wh bg-white h-screen sm:p-4">
      <div className="flex flex-col gap-4 items-center justify-center h-5/6 mob-sm:max-mob:w-screen w-mob bg-white rounded-2xl shadow-md">
        {children}
      </div>
    </main>
  );
}
