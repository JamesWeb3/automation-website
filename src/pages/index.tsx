import Navbar from "@/components/navbar";
import Globe from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";
import { PlaneSVG, TrainSVG, AccomodationSVG } from "@/components/ui/icons";
import { BookTripDialog } from "@/components/book-trip-dialog";
import { AuthDialogIndex } from "@/components/auth";

const HomePage: React.FC = () => {
  return (
    <main className="bg-[#EAEAEA] min-h-screen p-8 flex-col items-center justify-between">
      <Navbar />

      <div className="flex flex-col items-center gap-8 mt-8">
        <h1 className="text-8xl font-semibold">Travella</h1>
        <h2>Lorem Ipsum, sub heading could go here ..</h2>
        <div className="flex gap-2 z-10">
          <BookTripDialog />

          <Button>
            <PlaneSVG />
          </Button>
          <Button>
            <TrainSVG />
          </Button>
          <Button>
            <AccomodationSVG />
          </Button>
        </div>

        <Globe className="top-80 absolute" />
      </div>
      <AuthDialogIndex/>
    </main>
  );
}

export default HomePage;
