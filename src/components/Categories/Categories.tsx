import { categories } from "./categories.data";
import CategoryGrid from "./CategoryGrid";

export default function Categories() {
  return (
    <section className="py-10">
      <h2 className="mb-6 text-2xl font-bold text-secondary">
      Order.uk Popular Categories 🤩
      </h2>
      <CategoryGrid categories={categories} />
    </section>
  );
}