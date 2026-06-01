"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { label: "Introduction", href: "/" },
  { label: "Projects", href: "/Projects" },
  { label: "Skills & tools", href: "/Skills" },
  { label: "Experience", href: "/Experience" },
  { label: "Education", href: "/Education" },
  { label: "Contact", href: "/Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null);

  const isActivePath = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(path + "/");

  useEffect(() => {
    activeLinkRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [pathname]);

  const linkClass = (path: string) => {
    const isActive = isActivePath(path);

    return `whitespace-nowrap rounded-md px-3 py-2 transition duration-200 ${
      isActive ? "bg-foreground/10 font-medium" : "hover:bg-foreground/10"
    }`;
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-foreground/10 bg-background/95 px-4 py-3 backdrop-blur md:h-screen md:w-52 md:border-b-0 md:py-6 md:pr-4 md:pl-0 lg:py-8">
      <div className="flex gap-2 overflow-x-auto no-scrollbar md:ml-6 md:flex-col md:gap-1 md:overflow-visible">
        <h4 className="hidden p-2 text-lg font-semibold md:block">
          Sections
        </h4>

        <div className="flex gap-2 text-sm md:flex-col md:gap-1 md:text-lg">
          {navItems.map((item) => {
            const isActive = isActivePath(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                ref={isActive ? activeLinkRef : null}
                className={linkClass(item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;