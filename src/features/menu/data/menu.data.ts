import { MenuItem, MenuSection } from "../types/menu.types";

const burgers: MenuItem[] = [
  {
    id: 1,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 23.1,
    image: "/images/menu/burger/burger-1.svg",
  },
  {
    id: 2,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 26.6,
    image: "/images/menu/burger/burger-2.svg",
  },
  {
    id: 3,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 25.12,
    image: "/images/menu/burger/burger-3.svg",
  },
  {
    id: 4,
    title: "The classics for 2",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 27.6,
    image: "/images/menu/burger/burger-4.svg",
  },
  {
    id: 5,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 21.12,
    image: "/images/menu/burger/burger-5.svg",
  },
  {
    id: 6,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 17.4,
    image: "/images/menu/burger/burger-6.svg",
  },
];

const fries: MenuItem[] = [
  {
    id: 7,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 23.1,
    image: "/images/menu/fries/fries-1.svg",
  },
  {
    id: 8,
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 26.6,
    image: "/images/menu/fries/fries-2.svg",
  },
  {
    id: 9,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 25.12,
    image: "/images/menu/fries/fries-3.svg",
  },
  {
    id: 10,
    title: "The classics for 2",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 27.6,
    image: "/images/menu/fries/fries-4.svg",
  },
  {
    id: 11,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 21.12,
    image: "/images/menu/fries/fries-5.svg",
  },
  {
    id: 12,
    title: "Royal Cheese Burger with extra Fries",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
    price: 17.4,
    image: "/images/menu/fries/fries-6.svg",
  },
];

export const menuSections: MenuSection[] = [
  { title: "Burgers", items: burgers },
  { title: "Fries", items: fries },
];
