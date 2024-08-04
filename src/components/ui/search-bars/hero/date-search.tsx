import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl, FormItem, FormField } from "@/components/ui/form";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

type DataSearchprops = {
  form: any;
};

const DateSearch: React.FC<DataSearchprops> = ({ form }) => {
  return (
    <div className="z-20 w-full">
      <Popover>
        <PopoverTrigger asChild>
          <div className="grid grid-cols-2 w-56">
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem className="flex flex-col hover:bg-muted transition-ease p-1 cursor-pointer">
                  <Label className="ml-3 mb-[-3px] mt-1">Start Date</Label>
                  <FormControl>
                    <div
                      className={cn(
                        "",
                        !field.value && "text-muted-foreground text-sm"
                      )}
                    >
                      <div className="text-xs ml-3 text-muted-foreground">
                        {field.value ? (
                          format(field.value, "MMMM do")
                        ) : (
                          <Label className="mt-[-6px] font-normal">Add start date</Label>
                        )}
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="end_date"
              render={({ field }) => (
                <FormItem className="flex flex-col hover:bg-muted transition-ease p-1 ">
                  <Label className="ml-3 mb-[-3px] mt-1">End Date</Label>
                  <FormControl>
                    <div
                      className={cn(
                        "",
                        !field.value && "text-muted-foreground text-sm"
                      )}
                    >
                      <div className="text-xs ml-3 text-muted-foreground">
                        {field.value ? (
                          format(field.value, "MMMM do")
                        ) : (
                          <Label className="mt-[-6px] font-normal">Add end date</Label>
                        )}
                      </div>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto p-0" align="center">
          <Calendar
            mode="single"
            selected={form.watch("start_date")}
            onSelect={(date) => form.setValue("start_date", date)}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
          <Calendar
            mode="single"
            selected={form.watch("end_date")}
            onSelect={(date) => form.setValue("end_date", date)}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateSearch;
