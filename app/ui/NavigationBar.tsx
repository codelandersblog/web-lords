"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { marker } from "./fonts";

export function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex justify-between">
          <Link href="/" className={marker.className}>
            Web Lords
          </Link>
          <div className="flex items-center justify-end">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className={clsx(" hover:underline", {
                    "font-bold underline": pathname === "/",
                  })}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={clsx("hover:underline", {
                    "font-bold underline": pathname === "/services",
                  })}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={clsx("hover:underline", {
                    "font-bold underline": pathname === "/contact",
                  })}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
