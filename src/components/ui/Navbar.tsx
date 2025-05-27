"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex">
              <h1 className="text-2xl font-bold text-green-600">SmartFarm</h1>
            </div>
            <div className="hidden sm:ml-50 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`border-b-2 px-3 py-2 text-sm font-medium text-gray-900 ${isActive("/") ? "border-green-600" : "border-transparent hover:border-green-600"
                  }`}
              >
                Home
              </Link>
              <Link
                href="/solutions"
                className={`border-b-2 px-3 py-2 text-sm font-medium text-gray-500 ${isActive("/solutions") ? "border-green-600" : "border-transparent hover:border-green-600"
                  }`}
              >
                Solutions
              </Link>
              <Link
                href="/technology"
                className={`border-b-2 px-3 py-2 text-sm font-medium text-gray-500 ${isActive("/technology") ? "border-green-600" : "border-transparent hover:border-green-600"
                  }`}
              >
                Technology
              </Link>
              <Link
                href="/contact"
                className={`border-b-2 px-3 py-2 text-sm font-medium text-gray-500 ${isActive("/contact") ? "border-green-600" : "border-transparent hover:border-green-600"
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
