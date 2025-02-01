"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import ArrowDown from "@/public/svg/ArrowDown";

const Second = () => {
  const { scrollY } = useScroll();

  // Parallax Effect for Background Image
  const bgY = useTransform(scrollY, [0, 500], ["0%", "30%"]);

  return (
    <div className="relative  h-[80vh]">
      {/* Background Image */}
      <motion.div
        style={{
          backgroundPositionY: bgY,
          backgroundImage: "url(/images/air-conditioner-3.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.5)",
          transform: "translateZ(0)",
        }}
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-fixed"
      ></motion.div>

      {/* Content Section */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center space-y-16 text-center text-white">
        <h1 className="font-bold font-olive drop-shadow-md uppercase">
          Welcome to the JR Air Conditioner
        </h1>
        <Link href={`#hero`}>
          <div className="w-10 h-10 animate-bounce transition-all delay-75 ease-in-out">
            <ArrowDown />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Second;
