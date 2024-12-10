import SideNav from "@/components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row md:overflow-hidden">
      <div className="flex-none w-24 md:w-64 hidden sm:block">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-6">{children}</div>
    </div>
  );
}
