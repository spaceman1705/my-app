"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Sembunyikan navbar di halaman slug portfolio
  const hideNavbar = pathname.startsWith("/portfolio/") && pathname !== "/portfolio";

  if (hideNavbar) return null;
  return <Navbar />;
}
