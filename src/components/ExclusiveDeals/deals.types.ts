export type DealFilter = {
  id: string;
  label: string;
};

export type Deal = {
  id: number;
  restaurantName: string;
  discount: string;
  image: string;
  category: string;
  href: string;
};
