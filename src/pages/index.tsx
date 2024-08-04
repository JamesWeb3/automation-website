import Navbar from "@/layouts/navbar";
import { AuthDialogIndex } from "@/components/auth";
import SearchBar from "@/components/ui/search-bars/hero";
import { DealsCarousel } from "@/components/deals-carousel";
import Logo from "../../public/travallr_logo.png";
import Image from "next/image";
import { MainLayout } from "@/layouts/main-layout";

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Navbar />

      <div className="flex flex-col gap-4 items-center gap- mt-12">
        <Image src={Logo} alt="logo" width={500} height={250} />

        <h3>Travel the world, all in one app</h3>
        <SearchBar />
      </div>
      <div className="mt-4">
        <DealsCarousel />
      </div>
      <AuthDialogIndex />
    </MainLayout>
  );
};

export default HomePage;
