import { MenuSection } from "../types/menu.types";
import MenuCard from "./MenuCard";

type MenuGridProps = {
  sections: MenuSection[];
};

export default function MenuGrid({ sections }: MenuGridProps) {
  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.title}>
          <h2 className="py-4 text-2xl font-bold text-primary">{section.title}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {section.items.map((menuItem) => (
              <MenuCard key={menuItem.id} menuItem={menuItem} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
