import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "./restaurants.types";

type RestaurantGridProps = {
  restaurants: Restaurant[];
};

export default function RestaurantGrid({ restaurants }: RestaurantGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
