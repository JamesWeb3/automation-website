import { Button } from "@/ui/button"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="flex bg-[#EAEAEA] min-h-screen p-10 flex-col items-center justify-between">
      <Navbar />
      <div className="bg-white p-8 w-full h-full grid grid-cols-2">

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl">We Automate Anything</h1>
          <p>Connecting the dots so you dont have to</p>
          <div className="flex gap-2">
            <Button>Contact Us</Button>
            <Button variant="secondary">Start Trial</Button>
          </div>
        </div>
        

      </div>
      
    </main>
  );
}
