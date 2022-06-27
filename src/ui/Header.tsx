import Link from "next/link";
import React, { useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { useRouter } from "next/router";

const websiteLinks = [
  { href: "/", name: "HOME" },
  { href: "/about", name: "ABOUT" },
  { href: "/portfolios", name: "PORTFOLIOS" },
  { href: "/team", name: "TEAM" },
  { href: "/blog", name: "BLOG" },
  { href: "/contact", name: "CONTACT" },
];

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  return (
    <div className="bg-primary w-full">
      <header className="relative flex justify-between items-center px-5 py-10 sm:px-14 max-w-7xl mx-auto text-white">
        <div>
          <Link href="/">
            <a className="font-bold text-2xl md:text-4xl">Mairala</a>
          </Link>
        </div>
        <nav>
          <ul className="hidden md:flex items-center gap-5">
            {websiteLinks.map((link) => (
              <li
                key={link.href}
                className={`pb-2 ${
                  router.pathname === link.href
                    ? "border-b-4 border-darkFont mb-[-4px]"
                    : ""
                }`}
              >
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenu(!menu)}
            className="hover:bg-darkFont hover:bg-opacity-30 transition-colors duration-300 px-2 py-2  rounded-full md:hidden"
          >
            <MenuIcon />
          </button>
        </nav>
        {/* Dropdown Nav */}
        {menu && (
          <nav className="absolute py-5 top-[120px] z-50 left-0 bg-black w-full">
            <ul className="flex flex-col md:hidden items-center gap-5">
              {websiteLinks.map((link) => (
                <li
                  key={link.href}
                  className={`pb-2 ${
                    router.pathname === link.href
                      ? "border-b-4 border-darkFont mb-[-4px]"
                      : ""
                  }`}
                >
                  <Link href={link.href}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};
