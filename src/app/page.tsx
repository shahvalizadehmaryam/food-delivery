import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import ExclusiveDeals from "@/components/ExclusiveDeals/ExclusiveDeals";
import GetTheApp from "@/components/GetTheApp/GetTheApp";
import PopularRestaurants from "@/components/PopularRestaurants/PopularRestaurants";

export default function Home() {
  return (
    <main className="flex-1 px-4 pb-8 sm:px-6">
      <Banner />
      <ExclusiveDeals />
      <Categories />
      <PopularRestaurants />
      <GetTheApp />
    </main>
  );
}
