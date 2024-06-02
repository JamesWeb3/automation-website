import React from "react";
import ShineBorder from "@/ui/shine-border";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between w-full">
      <div>Logo</div>
      <div className="flex items-center gap-12">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ShineBorder
          className="text-center justify-center"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          Schedule Call
        </ShineBorder>
      </div>
    </nav>
  );
};

export default Navbar;
