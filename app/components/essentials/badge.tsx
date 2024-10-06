"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Badge = ({ text }: { text: string }) => {
  const [isMove, setIsMove] = useState(false);

  const handleMouseEnter = () => {
    setIsMove(true);
  };

  const handleMouseLeave = () => {
    setIsMove(false);
  };

  return (
    <div
      className="w-[250px] h-[40px] rounded-full flex items-center justify-center shadow-[inset_0_-5px_10px_#42456E] transition-shadow duration-500 ease-out hover:shadow-[inset_0_7px_10px_#8fdfff3f] border border-[#ffffff30] outline-none gap-[8px] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-[15px] bg-gradient-to-r from-[#8b8b8b] via-white to-[#8b8b8b] bg-clip-text text-transparent">
        {text}
      </p>
      <motion.svg
        strokeLinecap="round"
        className="text-[#ffffff]"
        strokeWidth="1.5"
        aria-hidden="true"
        viewBox="0 0 10 10"
        height="11"
        width="11"
        stroke="currentColor"
        fill="none"
        animate={{
          x: isMove ? 3 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <path
          strokeLinecap="round"
          d="M0 5h7"
          className="opacity-0 transition group-hover:opacity-100"
        ></path>
        <path
          strokeLinecap="round"
          d="M1 1l4 4-4 4"
          className="transition group-hover:translate-x-[3px]"
        ></path>
      </motion.svg>
    </div>
  );
};
