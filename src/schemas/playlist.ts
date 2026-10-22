import { z } from 'zod';

export const trackSchema = z.object({
  item: z.object({
    id: z.string(),
    name: z.string(),
    album: z.object({
      images: z.array(z.object({ url: z.string() })),
    }),
    artists: z.array(z.object({ name: z.string() })),
  }),
});

export const playlistDataSchema = z.record(z.string(), z.array(trackSchema));
