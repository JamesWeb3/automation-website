import React from "react";
import CountrySearch from "./country-search";
import DateSearch from "./date-search";
import StartSearch from "./start-search";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-white flex items-center p-2 w-full border rounded-full">
          <CountrySearch  />
          <div className="w-0.5 h-full bg-red-100" />
          <DateSearch form={form}/>
          <div className="w-0.5 h-full bg-red-100" />
          <StartSearch  />
          <button
            type="submit"
            className="bg-black w-10 h-10 flex items-center justify-center rounded-full p-1 cursor-pointer hover:bg-black/80 transition-ease"
          >
            <Send className="text-white w-5 h-5" />
          </button>
        </div>
      </form>
    </Form>
  );
};

export default SearchBar;
