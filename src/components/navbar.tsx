import React from "react";
import Logo from "@/ui/logo";
import { Button } from "@/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <Logo />
      <div className="flex items-center gap-12">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Button>Schedule Call</Button>
      </div>
    </nav>
  );
};

export default Navbar;
