import { useCallback, useState } from 'react';
import { playlistDataSchema } from '@/schemas/playlist';

const useGetPlaylistData = () => {
  const [data, setData] = useState<PlaylistData | null>(null);
  const [loading, setLoading] = useState(true);
  const call = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/playlist', {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const newData = await res.json();
      const parsed = playlistDataSchema.safeParse(newData);
      if (!parsed.success) {
        throw new Error(
          `Unexpected playlist data shape: ${parsed.error.message}`
        );
      }

      setData(parsed.data);
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, call };
};

export default useGetPlaylistData;
