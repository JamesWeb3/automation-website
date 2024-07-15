"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { createTripSchema } from "@/schemas/index";
import { UserSVG, CloseSVG } from "./icons";
import { useState } from "react";
import { useRouter } from "next/router";

type CreateTripSchema = z.infer<typeof createTripSchema>;

export function BookTripDialog() {
  const [userCount, setUserCount] = useState(1);

  const handleIncrement = () => {
    if (userCount < 8) {
      setUserCount(userCount + 1);
    }
  };

  const handleDecrement = () => {
    if (userCount > 1) {
      setUserCount(userCount - 1);
    }
  };

  const form = useForm<CreateTripSchema>({
    resolver: zodResolver(createTripSchema),
  });

  const onSubmit: SubmitHandler<CreateTripSchema> = async (data) => {
    console.log(data);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="bg-black rounded-xl text-white px-4 flex items-center cursor-pointer">
          ✈️ Book Trip
        </div>
        {/* <AnimatedGradientText>
          ✈️ <hr className="mx-2 h-7 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Book Trip
          </span>
        </AnimatedGradientText> */}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Begin You&apos;re Next Adventure</AlertDialogTitle>
          <AlertDialogCancel>
            <CloseSVG />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="trip_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Your Trip</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Summer getaway with friends"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="trip_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How Many People Are Coming?</FormLabel>
                  <FormControl>
                    <div className="flex gap-6">
                      <div className="flex gap-3">
                        <div
                          className="cursor-pointer"
                          onClick={handleDecrement}
                        >
                          -
                        </div>

                        <UserSVG />

                        <div
                          className="cursor-pointer"
                          onClick={handleIncrement}
                        >
                          +
                        </div>
                      </div>
                      <div>
                        {userCount} {userCount === 1 ? "person" : "people"}
                      </div>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="trip_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How many people are coming?</FormLabel>
                  <FormControl>
                    <ToggleGroup type="multiple">
                      <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        Chill Vibes
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                      >
                        Drinking and Partying
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline"
                      >
                        Adventurious and Active
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter>
              <Button type="submit">Submit</Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
