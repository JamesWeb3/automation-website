import React from "react";
import ShineBorder from "@/ui/shine-border";
import Logo from "@/ui/logo";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <Logo/>
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
