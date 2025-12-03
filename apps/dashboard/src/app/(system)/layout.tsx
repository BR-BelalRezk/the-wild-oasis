import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid h-screen grid-cols-[23rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <div className="pt-16 px-[4.8rem] pb-[6.4rem] bg-grey-50 overflow-scroll">
        <div className="max-w-480 mx-auto flex flex-col gap-[3.2rem]">
          {children}
        </div>
      </div>
    </main>
  );
}
