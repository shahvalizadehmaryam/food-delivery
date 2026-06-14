import MenuGrid from "@/features/menu/components/MenuGrid";
import { menuSections } from "@/features/menu/data/menu.data";

export default function MenuPage() {
  return (
    <main className="flex-1 px-4 pb-8 sm:px-6">
      <MenuGrid sections={menuSections} />
    </main>
  );
}
