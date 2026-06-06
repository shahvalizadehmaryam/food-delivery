import { restaurants } from "./restaurants.data";
import RestaurantGrid from "./RestaurantGrid";

export default function PopularRestaurants() {
  return (
    <section className="py-3">
      <h2 className="mb-6 text-2xl font-bold text-secondary">
        Popular Restaurants
      </h2>
      <RestaurantGrid restaurants={restaurants} />
    </section>
  );
}
