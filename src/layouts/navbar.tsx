import React from "react";
import { Button } from "@/components/ui/button";

import { AuthDialogIndex } from "@/components/auth";
import { useAuthModal } from "@/contexts/AuthContext";
import { PreferenceModal } from "@/components/preference-modal";
//
const Navbar: React.FC = () => {
  const { openModal } = useAuthModal();

  return (
    <nav className="flex justify-between items-center w-full">
      <div>Logo</div>

      <div className="flex items-center gap-6">
        <PreferenceModal />
        <p
          onClick={() => {
            openModal("login");
          }}
  
        >
          Log In
        </p>

        <Button
          
          variant="outline"
        >
         Book Trip
        </Button>
       
      </div>
      <AuthDialogIndex />
    </nav>
  );
};

export default Navbar;
