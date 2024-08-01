import React from "react";
import CountrySearch from "./country-search";
import DateSearch from "./date-search";
import StartSearch from "./start-search";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";

const FormSchema = z.object({
  country: z.string().nonempty(),
  date: z.date(),
  start: z.string().nonempty(),
});

const SearchBar: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-2 items-center p-1 border-2 border-muted-foreground rounded-full w-[650px]">
          <CountrySearch />
          <div className="w-0.5 h-12 bg-muted-foreground" />
          <DateSearch form={form} />
          <div className="w-0.5 h-12 bg-muted-foreground" />
          <StartSearch />
          <div>
            <Button
              type="submit"
              className="bg-black w-12 h-12 rounded-full p-1 hover:bg-black/80 transition-ease"
            >
              <Send className="text-white w-5 h-5" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SearchBar;
