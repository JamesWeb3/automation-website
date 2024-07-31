import Navbar from "@/layouts/navbar";
import { GridLayout } from "@/layouts/grid-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProvidersComponent from "@/components/settings/providers";
import AccountComponent from "@/components/settings/account";
const SettingsPage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen p-6 items-center overflow-hidden">
      <Navbar />
      <Tabs defaultValue="account" className="w-full h-full">
        <GridLayout
          leftChild={
            <div className="">
              <TabsList className="flex flex-col h-full">
                <TabsTrigger className="text-lg" value="account">
                  Account
                </TabsTrigger>
                <TabsTrigger className="text-lg" value="trips">
                  My Trips
                </TabsTrigger>
                <TabsTrigger className="text-lg" value="providers">
                  Providers
                </TabsTrigger>
                <TabsTrigger className="text-lg" value="invite">
                  Invite Users
                </TabsTrigger>
              </TabsList>
            </div>
          }
          rightChild={
            <div className="flex h-full ">
              <TabsContent value="account"><AccountComponent/></TabsContent>
              <TabsContent value="trips">hi</TabsContent>
              <TabsContent value="providers">
                Providers
                <ProvidersComponent/>
               
              </TabsContent>
              <TabsContent value="invite">hi</TabsContent>
            </div>
          }
        />
      </Tabs>
    </main>
  );
};

export default SettingsPage;
