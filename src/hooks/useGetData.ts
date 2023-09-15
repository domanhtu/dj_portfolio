import { useCallback, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState<PlaylistData | null>(null);
  const [loading, setLoading] = useState(true);

  const call = useCallback(async () => {
    const endpoint = "api/playlist";
    try {
      setLoading(true);
      const res = await fetch(`https://tutido.vercel.app/${endpoint}`, {
        method: "GET",
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

export default useGetData;
