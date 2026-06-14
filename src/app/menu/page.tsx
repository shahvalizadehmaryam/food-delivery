import MenuGrid from "@/features/menu/components/MenuGrid";
import RestaurantInfo from "@/features/menu/components/RestaurantInfo";
import { menuSections } from "@/features/menu/data/menu.data";

export default function MenuPage() {
  return (
    <main className="flex-1 px-4 pb-8 sm:px-6">
      <MenuGrid sections={menuSections} />
      <RestaurantInfo />
    </main>
  );
}
