import CategoryCard from "./CategoryCard";
import { Category } from "./categories.types";

type CategoryGridProps = {
  categories: Category[];
};

export default function CategoryGrid({categories} : CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 ">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
