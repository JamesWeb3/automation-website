import Navbar from "@/layouts/navbar";
import { AuthDialogIndex } from "@/components/auth";
import SearchBar from "@/components/search-bar";
const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen p-6 items-center">
      <Navbar />

      <div className="flex flex-col items-center gap-8 mt-20">
        <h1 className="text-8xl font-semibold">Travallr</h1>
        <h2 className="">Travel the world, all in one app</h2>

        <SearchBar />
      </div>
      <AuthDialogIndex />
      <div className="absolute bottom-8 left-8">View Deals</div>
    </main>
  );
};

export default HomePage;
