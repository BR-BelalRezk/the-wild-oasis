import Uploader from "@/data/Uploader";
import Logo from "../../ui/logo";
import Navbar from "./navbar";

export default function Sidebar() {
  return (
    <aside className="py-[3.2rem] px-[2.4rem] bg-grey-0 border-r border-grey-100 flex flex-col gap-[3.2rem] row-span-full ">
      <Logo />
      <Navbar />
      <Uploader />
    </aside>
  );
}
