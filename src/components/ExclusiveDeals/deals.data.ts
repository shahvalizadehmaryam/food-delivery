import { Deal } from "./deals.types";

export const deals: Deal[] = [
  {
    id: 1,
    restaurantName: "Chef Burgers London",
    discount: "-40%",
    image: "/images/deals/chef-burgers-london.png",
    category: "pizza-fast-food",
    href: "/restaurants/chef-burgers-london",
  },
  {
    id: 2,
    restaurantName: "Grand Ai Cafe London",
    discount: "-20%",
    image: "/images/deals/grand-ai-cafe-london.png",
    category: "pizza-fast-food",
    href: "/restaurants/grand-ai-cafe-london",
  },
  {
    id: 3,
    restaurantName: "Butterbrot Caf'e London",
    discount: "-17%",
    image: "/images/deals/butterbrot-cafe-london.png",
    category: "pizza-fast-food",
    href: "/restaurants/butterbrot-cafe-london",
  },
  {
    id: 4,
    restaurantName: "Green Bowl Vegan",
    discount: "-25%",
    image: "/images/deals/green-bowl-vegan.png",
    category: "vegan",
    href: "/restaurants/green-bowl-vegan",
  },
  {
    id: 5,
    restaurantName: "Tokyo Sushi Bar",
    discount: "-30%",
    image: "/images/deals/tokyo-sushi-bar.png",
    category: "sushi",
    href: "/restaurants/tokyo-sushi-bar",
  },
  {
    id: 6,
    restaurantName: "Corner Bistro",
    discount: "-15%",
    image: "/images/deals/corner-bistro.png",
    category: "others",
    href: "/restaurants/corner-bistro",
  },
];
