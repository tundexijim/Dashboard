import Charts from "@/components/Charts";
import RecentOrders from "@/components/RecentOrders";
import Widget from "@/components/Widget/Widget";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-4 lg:mt-8">
      <Widget />

      <div className="flex mt-4 gap-4 h-[70vh]">
        <Charts />
        <RecentOrders />
      </div>
    </main>
  );
}
