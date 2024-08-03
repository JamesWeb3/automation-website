import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { BreadcrumbComponent } from "../breadcrumb-component";

type CreateTripSchema = z.infer<typeof createTripSchema>;

interface Hotel {
  title: string;
  bathrooms: number;
  bedrooms: number;
  sqMtr: number;
  image?: string;
}

const createTripSchema = z.object({
  budget: z.number(),
  date: z.date(),
  people_count: z.number(),
});

const DealsForm: React.FC = () => {
  const form = useForm<CreateTripSchema>();

  const onSubmit: SubmitHandler<CreateTripSchema> = async (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <BreadcrumbComponent />
      <h2 className="text-4xl font-semibold">Find Trending Deals</h2>

      <Command className="bg-white w-[400px] h-10 mt-2">
        <CommandInput placeholder="Type a command or search..." />
        {/* <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList> */}
      </Command>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-row items-center gap-4 mt-4"
        >
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center gap-2 w-28">
                    <Progress className="cursor-pointer h-2" {...field} />
                    <p>$1,599</p>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <div className="flex gap-2">
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Check in date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Check out date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </div>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="people_count"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="flex justify-between font-semibold"></FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        1 adult, 2 children
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-1 text-sm" align="start">
                    <div>
                      <div className="flex w-full justify-between items-center gap-8 p-1">
                        Adults
                        <div className="flex items-center gap-3">
                          <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                            -
                          </div>
                          <div>1</div>
                          <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                            +
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-8 p-1">
                        Children
                        <div className="flex w-full justify-between items-center gap-3">
                          <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                            -
                          </div>
                          <div>1</div>
                          <div className="bg-muted p-1 px-2 rounded-md cursor-pointer">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Search</Button>
        </form>
      </Form>
    </div>
  );
};

export default DealsForm;
