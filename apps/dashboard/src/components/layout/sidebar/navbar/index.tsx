"use client";
import { navbarItems } from "@/constants";
import NavbarItem from "./navbar-item";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-col gap-[0.8rem]">
        {navbarItems.map((item) => (
          <li key={item.label}>
            <NavbarItem href={item.href} Icon={item.icon} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
