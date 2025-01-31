"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVBAR_LINKS } from "../navbar/nav";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index: number): void => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="flex justify-between items-center p-4 z-50 bg-newblue text-textlight  shadow-2xl relative">
      <div>
        {/* Logo */}
        <h1 className="font-olive text-4xl">Logo</h1>
      </div>
      <div>
        <button
          onClick={toggleMenu}
          className="font-semibold text-lg focus:outline-none"
        >
          {/* <Image
            src={`/images/menu.png`}
            width={40}
            height={40}
            alt="menu"
            className="text-white"
          /> */}
          <Menu size={40} />
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 bg-newblue text-textlight font-olive h-full w-full p-6 z-40"
          >
            <div className="flex justify-between w-full items-center mb-4">
              <div></div>
              <button
                onClick={toggleMenu}
                className="font-semibold text-lg focus:outline-none"
              >
                <Image
                  src={`/images/close.png`}
                  width={40}
                  height={40}
                  alt="close"
                />
              </button>
            </div>
            <ul className="space-y-4 text-xl h-full flex flex-col font-semibold">
              {NAVBAR_LINKS.map((link) => (
                <li key={link.id}>
                  <div
                    className={`cursor-pointer text-3xl flex justify-between items-center ${
                      link.dropdown ? "cursor-pointer" : ""
                    }`}
                    onClick={() => link.dropdown && toggleDropdown(link.id)}
                  >
                    {link.path ? (
                      <Link href={link.path} onClick={toggleMenu}>
                        {link.label}
                      </Link>
                    ) : (
                      <span>{link.label}</span>
                    )}
                    {link.dropdown && (
                      <span>
                        {activeDropdown === link.id ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    )}
                  </div>
                  {activeDropdown === link.id && link.dropdown && (
                    <AnimatePresence>
                      <motion.ul
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="ml-4 space-y-2 text-lg"
                      >
                        {link.dropdown.map((subLink) => (
                          <li
                            key={subLink.name}
                            className="hover:underline cursor-pointer"
                          >
                            <Link
                              onClick={toggleMenu}
                              href={subLink.path || "#"}
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
