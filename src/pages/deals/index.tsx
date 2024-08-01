import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import FindDealsForm from "@/components/deals/deals-form";
import DealList from "@/components/deals/deals.list";
import { MainLayout } from "@/layouts/main-layout";

const DealsPage: React.FC = () => {
  return (
    <MainLayout>
      <Navbar />

    
      <GridLayout leftChild={<FindDealsForm />} rightChild={<DealList />} />
    </MainLayout>
  );
};

export default DealsPage;
