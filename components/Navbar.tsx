import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center  px-6 py-4 lg:px-10">
      {/* Logo */}
      <svg
        height="19"
        width="90"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 94 20"
        className="sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-28 lg:h-14"
      >
        <text
          x="0"
          y="15"
          fill="black"
          stroke="black"
          fontSize="20"
          className="sm:text-sm md:text-base lg:text-lg"
        >
          Cuberto
        </text>
      </svg>

      {/* Menu Button */}
      <div className="flex justify-center items-center gap-4  px-3 w-fit sm:px-2 md:px-3">
        <div className="text-xl font-light sm:text-sm md:text-base">menu</div>
        <div className="grid gap-1 w-6 sm:w-4 md:w-5">
          <span className="block h-[1px] w-full bg-black border" />
          <span className="block h-[1px] w-full bg-black border" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
