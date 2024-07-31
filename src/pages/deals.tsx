import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProvidersComponent from "@/components/settings/providers";

const DealsPage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen p-6 items-center overflow-hidden">
      <Navbar />
      <Tabs defaultValue="account" className="w-full h-full">
        <GridLayout
          leftChild={<div className=""></div>}
          rightChild={<div className="flex h-full "></div>}
        />
      </Tabs>
    </main>
  );
};

export default DealsPage;
