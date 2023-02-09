export default function DashboardLayout({ children }) {
  return (
    <main className="w-screen flex items-center justify-center bg-wh min-h-screen sm:p-4">
      <div className="flex flex-col gap-4 items-center justify-center h-fit mob-sm:max-mob:w-screen w-mob rounded-2xl py-10">
        {children}
      </div>
    </main>
  );
}
