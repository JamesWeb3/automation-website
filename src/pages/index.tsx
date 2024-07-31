import Navbar from "@/layouts/navbar";
import { AuthDialogIndex } from "@/components/auth";
import SearchBar from "@/components/search-bar";
import { DealsCarousel } from "@/components/deals-carousel";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen p-6 items-center overflow-hidden">
      <Navbar />

      <div className="flex flex-col items-center gap-4 mt-12">
        <h1 className="text-8xl font-semibold">Travallr</h1>
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
