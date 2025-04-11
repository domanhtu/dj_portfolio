import { useCallback, useState } from "react";

const useGetPlaylistData = () => {
  const [data, setData] = useState<PlaylistData | null>(null);
  const [loading, setLoading] = useState(true);
  const isDev = process.env.NODE_ENV === "development";
  const call = useCallback(async () => {
    const endpoint = "api/playlist";
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const res = await fetch(`${baseUrl}/${endpoint}`, {
        method: "GET",headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const newData = await res.json();
      setData(newData);
    } catch (err: any) {
      throw new Error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, call };
};

export default useGetPlaylistData;
