"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarClient from "./NavbarClient";

export default function Navbar() {


  return (
    <header className="w-full px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo/logo.svg"
          alt="OrderUK"
          width={215}
          height={53}
          className="h-8 w-auto"
          priority
        />
      </Link>

      {/* Nav Links */}
      <NavbarClient />

      {/* Auth Button */}
      <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2">
        <Image
          src="/images/icons/user.svg"
          alt=""
          width={20}
          height={20}
          className="h-7 w-7"
          aria-hidden
        />
        Login/Signup
      </button>
    </header>
  );
}