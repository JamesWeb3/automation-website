import Navbar from "@/components/navbar";
import Globe from "@/components/magicui/globe";
import { Button } from "@/ui/button";

export default function Home() {
  return (
    <main className="bg-[#EAEAEA] min-h-screen p-8 flex-col items-center justify-between">
      <Navbar />

      <div className="flex grid grid-cols-2 bg-red-100 h-max">
        <div className="bg-green-100">
          <h1 className="text-7xl">Travella</h1>
          <h2>hi</h2>
          <div>
            <Button>Book Trip</Button>
            <Button>hi</Button>
            <Button>hi</Button>
          </div>
        </div>

        <div className="relative bg-yellow-100">
          {/* <Globe className="top-28 absolute"/> */}
        </div>
      </div>
    </main>
  );
}
