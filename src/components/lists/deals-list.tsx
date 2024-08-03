import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import DealData from "@/data/test-deal-data.json";
import { Users } from "lucide-react";
import { useRouter } from "next/router";
const DealsList: React.FC = () => {
  const router = useRouter();

  const handleDealClick = (id: string) => {
    router.push(`/deals/${id}`);
  };

  return (
    <ScrollArea className="h-[60vh]">
      <div className="grid grid-cols-4 gap-4">
        {DealData.map((deal: any, index: any) => (
          <div
            onClick={() => handleDealClick(deal.id)}
            key={index}
            className="rounded-lg bg-white"
          >
            <Image
              alt="hotel thumbnail"
              src={deal.thumbnail}
              layout="responsive"
              width={500}
              height={350}
              className="w-full max-h-[250px] aspect-w-16 aspect-h-9 rounded-tl-xl rounded-tr-xl"
            />
            <div className="p-2">
              <div className="flex w-full justify-between rounded-bl-xl rounded-br-xl">
                <p className="text-lg font-semibold leading-6">{deal.name}</p>
                <div className="flex items-center gap-2 text-xs">
                  {" "}
                  <Users className="w-5 h-5" /> {deal.persons}
                </div>
              </div>
              <p className="text-lg font-medium">{deal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default DealsList;
