import ProviderData from "@/data/providers.json";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

const ProvidersComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-between gap-4 mt-4 ">
      <div>
        <p>Hotel Providers</p>
        <div className="flex gap-2">
          {ProviderData.filter((provider) => provider.type === "hotel").map(
            (provider, index) => (
              <div
                key={index}
                className="flex items-center w-max gap-2 justify-between p-2 border rounded-xl"
              >
                <Image
                  src={provider.icon}
                  alt={provider.name}
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <label
                  htmlFor={`provider-${provider.name}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {provider.name}
                </label>
                <Checkbox id={`provider-${provider.name}`} defaultChecked />
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <p>Flight Providers</p>
        <div className="flex gap-2">
          {ProviderData.filter((provider) => provider.type === "flights").map(
            (provider, index) => (
              <div
                key={index}
                className="flex items-center w-max gap-2 justify-between p-2 border rounded-xl"
              >
                <Image
                  src={provider.icon}
                  alt={provider.name}
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <label
                  htmlFor={`provider-${provider.name}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {provider.name}
                </label>
                <Checkbox id={`provider-${provider.name}`} defaultChecked />
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <p>Food Providers</p>
        <div className="flex gap-2">
          {ProviderData.filter((provider) => provider.type === "food").map(
            (provider, index) => (
              <div
                key={index}
                className="flex items-center w-max gap-2 justify-between p-2 border rounded-xl"
              >
                <Image
                  src={provider.icon}
                  alt={provider.name}
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <label
                  htmlFor={`provider-${provider.name}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {provider.name}
                </label>
                <Checkbox id={`provider-${provider.name}`} defaultChecked />
              </div>
            )
          )}
        </div>
      </div>
      <div className="bottom-0">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default ProvidersComponent;
