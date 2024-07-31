import React from "react";

import { AuthDialogIndex } from "@/components/auth";
import { useAuthModal } from "@/contexts/AuthContext";
import { PreferenceModal } from "@/components/preference-modal";
import DropdownMenuComponent from "@/components/dropdown-menu";

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
        <DropdownMenuComponent/>
      </div>
      <AuthDialogIndex />
    </nav>
  );
};

export default Navbar;
