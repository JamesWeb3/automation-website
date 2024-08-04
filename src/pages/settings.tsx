import Navbar from "@/layouts/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProvidersComponent from "@/components/settings/providers";
import AccountComponent from "@/components/settings/account";
import { Card } from "@/components/ui/card";

const SettingsPage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen p-6 items-center overflow-hidden">
      <Navbar />
      <Tabs defaultValue="account" className="flex w-full h-full">
        <Card className="w-1/3">
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
        </Card>

        <Card className="w-2/3">
          <TabsContent value="account">
            <AccountComponent />
          </TabsContent>
          <TabsContent value="trips">hi</TabsContent>
          <TabsContent value="providers">
            Providers
            <ProvidersComponent />
          </TabsContent>
          <TabsContent value="invite">hi</TabsContent>
        </Card>
      </Tabs>
    </main>
  );
};

export default SettingsPage;
