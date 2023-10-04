import Charts from "@/components/Charts";
import RecentOrders from "@/components/RecentOrders";
import Widget from "@/components/Widget/Widget";

export default function Home() {
  return (
    <main className="mt-4 lg:mt-8">
      <Widget />
      <div className="flex mt-4 lg:mt-8 gap-4 h-[70vh]">
        <Charts />
        <RecentOrders />
      </div>
    </main>
  );
}
