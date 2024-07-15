import { z } from "zod";

export const createTripSchema = z.object({
  trip_name: z.string().min(1).optional(),
  openai_api_key: z.string().min(10).optional(),
});
