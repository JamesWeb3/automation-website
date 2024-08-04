import React from "react";
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { FilterFlightsProps } from "@/schemas/filter";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

type FilterFlightsProps = z.infer<typeof filterFlightsProps>;

const filterFlightsProps = z.object({
  oneWay: z.boolean(),
  from_location: z.date(),
  to_location: z.date(),
  people_count: z.number(),
  providers: z.array(z.string()),
});

const FlightsForm: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const form = useForm<FilterFlightsProps>();

  const onSubmit: SubmitHandler<FilterFlightsProps> = async (data) => {
    console.log(data);
  };

  const handleSelect = (
    fieldName: keyof FilterFlightsProps,
    currentValue: string
  ) => {
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    form?.setValue(fieldName, [newValue]);
    setOpen(false);
  };

  return (
    <div>
      <div className="flex gap-2 justify-center mb-4">
        <div className="bg-[#5DA8DF] w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-[#8EED91] w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-[#FFA767] w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-[#B998E3] w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-muted w-3 h-3 rounded-full cursor-pointer" />
      </div>
      <div className="text-[#5DA8DF] text-sm font-semibold">Accomodation</div>

      <h2 className="text-3xl font-medium">Book your flights</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <FormField
            control={form.control}
            name="oneWay"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="airplane-mode"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                  <Label htmlFor="airplane-mode">One Way</Label>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="from_location"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="flex justify-between font-semibold">
                  Leaving From
                </FormLabel>
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
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
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
            name="to_location"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="flex justify-between font-semibold">
                  Arrive On
                </FormLabel>
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
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
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
                <FormLabel className="flex justify-between font-semibold">
                  How Many People
                </FormLabel>
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

          <FormField
            control={form.control}
            name="providers"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                      >
                        {value
                          ? frameworks?.find(
                              (framework) => framework.value === value
                            )?.label
                          : "Select framework..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks?.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={() =>
                                handleSelect("providers", framework.value)
                              }
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormControl>

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

export default FlightsForm;
