import Image from "next/image";
import { MenuItem } from "../types/menu.types";
import AddToCartButton from "./AddToCartButton";

type MenuCardProps = {
  menuItem: MenuItem;
};

function MenuCard({ menuItem }: MenuCardProps) {
  return (
    <article className="flex cursor-pointer items-stretch gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-[0_2px_16px_rgba(3,8,31,0.08)] transition-colors duration-300 ease-in-out hover:border-primary">
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold leading-snug text-secondary sm:text-base">
            {menuItem.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
            {menuItem.description}
          </p>
        </div>
        <p className="text-sm font-bold text-secondary sm:text-base">
          GBP {menuItem.price.toFixed(2)}
        </p>
      </div>

      <div className="relative shrink-0 rounded-2xl bg-primary sm:h-[130px] sm:w-[130px]">
        <div className="overflow-hidden rounded-2xl sm:h-[130px] sm:w-[130px]">
          <Image
            src={menuItem.image}
            alt={menuItem.title}
            fill
            className="h-full w-full object-cover rounded-2xl object-center"
          />
        </div>
        <AddToCartButton />
      </div>
    </article>
  );
}

export default MenuCard;
