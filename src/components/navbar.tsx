import React from "react";
import { Button } from "@/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center w-full">
      <div>Logo</div>
      <div className="flex items-center gap-6">
        <ul className="flex gap-4">
          <li>Register</li>
        </ul>
        <Button variant="outline">Log In</Button>
        Toggle Hotels
      </div>
    </nav>
  );
};

export default Navbar;
