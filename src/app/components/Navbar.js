"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", first: "H", rest: "ome", href: "/" },
    { label: "Clients", first: "C", rest: "lients", href: "/clients" },
    { label: "About", first: "A", rest: "bout", href: "/about" },
    { label: "Contact us", first: "C", rest: "ontact us", href: "/contact" },
  ];

  return (
    <>
      {/* Brand Header (Scrolls away) */}
      <header className="font-serif bg-white py-3 min-[360px]:py-4 px-4 min-[360px]:px-6 flex justify-between items-center border-b border-stone-100">
        <div className="relative w-12 h-12 min-[360px]:w-14 min-[360px]:h-14 min-[400px]:w-16 min-[400px]:h-16">
          <Image
            src="/kangaroo_logo.png"
            alt="Style sack logo"
            fill
            sizes="(max-width: 360px) 48px, 64px"
            className="object-contain"
            priority
          />
        </div>
        <div className="flex items-center gap-1.5 italic text-3xl min-[360px]:text-4xl min-[400px]:text-5xl font-bold text-black border-b-2 border-black pb-1">
          <span>Style</span>
          <span>sack</span>
        </div>
        <div className="w-12 h-12 min-[360px]:w-14 min-[360px]:h-14 min-[400px]:w-16 min-[400px]:h-16" />
      </header>

      {/* Navigation (Sticks to top) */}
      <nav className="font-serif sticky top-0 z-50 bg-[#E5E5E5] flex justify-between items-baseline px-4 min-[360px]:px-6 py-3 min-[360px]:py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border-b border-stone-200/60">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-baseline pb-1 whitespace-nowrap group bg-transparent border-none outline-none no-underline ${
                isActive ? "text-black" : "text-stone-500"
              }`}
              style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            >
              <span className="text-3xl font-light">{item.first}</span>
              <span className="font-sans text-[18px] font-light">{item.rest}</span>
              {/* Active underline */}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-black transition-transform duration-300 origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </>
  );
}
