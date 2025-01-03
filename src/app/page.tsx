import Content from "@/components/Content";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="grid min-h-screen w-full grid-cols-[16rem_1rem_1fr] bg-[var(--background)]">
      <div className="border-r-2 border-[var(--foreground)]">
        <SideBar />
      </div>
      <div></div>
      <div className="left-0 right-0 grid grid-rows-[1fr_16rem] border-l-2 border-[var(--foreground)]">
        <Content />
      </div>
    </div>
  );
}
