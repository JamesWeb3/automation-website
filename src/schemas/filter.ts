import { z } from "zod";

export const FilterFlightsProps = z.object({
    oneWay: z.boolean(),
    from_location: z.number(),
    to_location: z.number(),
    people_count: z.number(),
    providers: z.array(z.string()),
  });