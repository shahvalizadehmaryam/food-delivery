import Link from "next/link";
import { NavItem as NavItemType } from "./navbar.types";

type Props = {
  item: NavItemType;
  isActive?: boolean;
};

export default function NavItem({ item, isActive }: Props) {
  return (
    <Link
      href={item.href}
      className={`text-base font-medium px-7 py-2 rounded-full transition ${
        isActive ? "bg-primary text-white " : "text-black"
      }`}
    >
      {item.label}
    </Link>
  );
}
