import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-10 bg-amber-500">
      <svg
        height="19"
        width="90"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 94 20"
      >
        <text x="0" y="15" fill="black" stroke="black" font-size="20">
          Cuberto
        </text>
      </svg>

      <div className="flex justify-center items-center gap-4 bg-green-400 px-3 w-fit">
        <div className="text-xl font-light">menu</div>
        <div className=" grid gap-1 w-6">
          <span className="block h-[1px] w-full bg-black border" />
          <span className="block h-[1px] w-full bg-black border" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
