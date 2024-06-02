import Navbar from "@/components/navbar"
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex bg-[#EAEAEA] min-h-screen p-8 flex-col items-center justify-between">
      
      <Navbar />
      <Hero/>
      
    </main>
  );
}
