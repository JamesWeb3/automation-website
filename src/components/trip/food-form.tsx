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
  import { Button } from "../ui/button";
  import { CalendarIcon } from "lucide-react";
  import { type SubmitHandler, useForm } from "react-hook-form";
  import { z } from "zod";
  import { Progress } from "@/components/ui/progress";
  import { cn } from "@/lib/utils";
  import { format } from "date-fns";
  import { Calendar } from "../ui/calendar";
  
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
  
  const FoodForm: React.FC = () => {
    const form = useForm<CreateTripSchema>();
  
    const onSubmit: SubmitHandler<CreateTripSchema> = async (data) => {
      console.log(data);
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
  
        <h2 className="text-3xl font-medium">Book your stay in Bucharest</h2>
  
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-between font-semibold">
                    Set Your Budget Per Night
                    <div>$</div>
                  </FormLabel>
                  <FormControl>
                    <>
                      <Progress className="cursor-pointer" {...field} />
                    </>
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
                  <FormLabel className="flex justify-between font-semibold">
                    How long will you stay for?
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
                            <span>Pick a penis</span>
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
                    How many people are coming?
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
  
            <Button type="submit">Search</Button>
          </form>
        </Form>
      </div>
    );
  };
  
  export default FoodForm;
  