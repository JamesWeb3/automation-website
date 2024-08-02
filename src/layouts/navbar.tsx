import React from "react";

import { AuthDialogIndex } from "@/components/auth";
import { useAuthModal } from "@/contexts/AuthContext";
import { PreferenceModal } from "@/components/preference-modal";
import DropdownMenuComponent from "@/components/dropdown-menu";
import Logo from "../../public/travallr_logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar: React.FC = () => {
  const { openModal } = useAuthModal();

  return (
    <nav className="flex justify-between items-center w-full">
      <Image width={80} src={Logo} alt="logo" />

      <div className="flex items-center gap-6">
        <PreferenceModal />
        <Link href="/">Home</Link>
        <Link href="/my-trips">My Trips</Link>
        <Link href="/deals">Deals</Link>
        <DropdownMenuComponent />
      </div>
      <AuthDialogIndex />
    </nav>
  );
};

export default Navbar;
