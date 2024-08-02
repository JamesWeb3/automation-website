"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { createTripSchema } from "@/schemas/index";
import { CloseSVG } from "./ui/icons";
import { useRouter } from "next/router";

type CreateTripSchema = z.infer<typeof createTripSchema>;

interface BookTripDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedLocation: string;
}

export const BookTripDialog: React.FC<BookTripDialogProps> = ({
  open,
  onOpenChange,
  selectedLocation,
}) => {
  const router = useRouter();

  const form = useForm<CreateTripSchema>({
    resolver: zodResolver(createTripSchema),
  });

  const onSubmit: SubmitHandler<CreateTripSchema> = async (data) => {
    router.push("/trip-itinerary");
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Begin Your Next Adventure in Greece{selectedLocation}
          </AlertDialogTitle>
          <AlertDialogCancel>
            <CloseSVG />
          </AlertDialogCancel>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
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
              name="vibe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What kind of vibe</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="begin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How Do You want to Begin?</FormLabel>
                  <FormControl>
                    <ToggleGroup type="single">
                      <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        Book Activites
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                      >
                        Book Flights
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline"
                      >
                        Book Accomodation
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter>
              <Button type="submit">Create Trip</Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};
