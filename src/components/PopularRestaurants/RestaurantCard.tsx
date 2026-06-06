import Image from "next/image";
import Link from "next/link";
import { Restaurant } from "./restaurants.types";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      href={restaurant.href}
      className="group flex flex-col  overflow-hidden rounded-xl"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-primary px-3 py-2.5 sm:px-4 sm:py-3">
        <p className="truncate text-xs font-bold text-white sm:text-sm text-start">
          {restaurant.name}
        </p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
