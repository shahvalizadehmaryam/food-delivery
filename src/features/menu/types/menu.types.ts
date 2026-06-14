export type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};
