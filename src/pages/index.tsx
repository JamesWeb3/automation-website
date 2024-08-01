import Navbar from "@/layouts/navbar";
import { AuthDialogIndex } from "@/components/auth";
import SearchBar from "@/components/search-bar";
import { DealsCarousel } from "@/components/deals-carousel";
import Logo from "../../public/travallr_logo.png";
import Image from "next/image";


const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen p-6 items-center overflow-hidden">
      <Navbar />

      <div className="flex flex-col gap-4 items-center gap- mt-12">
        <Image src={Logo} alt="logo" width={500} height={250} />

        <h2 className="">Travel the world, all in one app</h2>
        <SearchBar />
      </div>
      <div className="mt-4">
        <DealsCarousel />
      </div>
      <AuthDialogIndex />
    </main>
  );
};

export default HomePage;
