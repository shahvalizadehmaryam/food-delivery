import Image from "next/image";
import { Category } from "./categories.types";
import Link from "next/link";

type CategoryCardProps = {
  category: Category;
};

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group flex flex-col items-start justify-center gap-1 rounded-lg border border-border bg-card transition hover:border-primary"
    >
      <Image
        src={category.image}
        alt={category.label}
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
      <div className="py-1 px-4 my-2">
        <p className="text-sm font-bold text-secondary">{category.label}</p>
        <p className="text-xs text-primary font-medium">
          {category.numberOfItems} Restaurants
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;
