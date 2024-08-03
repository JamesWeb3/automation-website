import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import DealsForm from "@/components/forms/deals-form";
import DealList from "@/components/lists/deals-list";
import { MainLayout } from "@/layouts/main-layout";

const DealsPage: React.FC = () => {
  return (
    <MainLayout>
      <Navbar />

    
      <GridLayout leftChild={<DealsForm />} rightChild={<DealList />} />
    </MainLayout>
  );
};

export default DealsPage;
