import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";

export default function Home() {
  return (
    <main className="flex-1 px-4 pb-8 sm:px-6">
      <Banner />
      <Categories />
    </main>
  );
}
