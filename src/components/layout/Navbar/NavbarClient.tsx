"use client";

import { usePathname } from "next/navigation";
import { navItems } from "./nav.data";
import NavItem from "./NavItem";

export default function NavbarClient() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 items-center">
      {navItems.map((item) => (
        <NavItem
          key={item.href}
          item={item}
          isActive={pathname === item.href}
        />
      ))}
    </nav>
  );
}