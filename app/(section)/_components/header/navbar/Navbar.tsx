"use client";
import React, { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { NAVBAR_LINKS } from "./nav";
import Link from "next/link";

const Navbar = () => {
  const [activeDropDown, setActiveDropDown] = useState<number | null>(null);

  const handleToggleDropdown = (id: number) => {
    setActiveDropDown((prev) => (prev === id ? null : id));
  };

  // Close dropdown if clicked outside the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target as Node)) {
        setActiveDropDown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav id="navbar" className="bg-newblue sticky top-0 z-20 w-full p-6">
      <div className="new-container-2 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h1 className="text-white text-xl font-bold">Logo</h1>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex cursor-pointer space-x-6">
            {NAVBAR_LINKS.map((link) => (
              <li
                key={link.id}
                className="relative group"
                onClick={(e) => {
                  e.stopPropagation();
                  if (link.dropdown) handleToggleDropdown(link.id);
                }}
              >
                {link.path ? (
                  <Link
                    href={link.path}
                    className="flex items-center text-white text-base font-olive font-medium hover:text-gray-300"
                  >
                    {link.label}
                    {link.dropdown && (
                      <span className="ml-2 text-olive">
                        {activeDropDown === link.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </Link>
                ) : (
                  <span className="flex items-center text-white text-base font-olive font-medium">
                    {link.label}
                    {link.dropdown && (
                      <span className="ml-2  text-olive">
                        {activeDropDown === link.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </span>
                )}
                {/* Dropdown */}
                {link.dropdown && activeDropDown === link.id && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-10">
                    {link.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.name} className="cursor-pointer">
                        <Link
                          href={`${dropdownItem.path}`}
                          className="block px-4 py-2 text-base font-olive text-gray-800 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Button */}
        <div>
          <Link
            href={`#contact`}
            className="bg-white text-lg text-azureblue font-olive px-4 py-2 rounded-full shadow-2xl hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
