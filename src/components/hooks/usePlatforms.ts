import { useQuery } from "@tanstack/react-query";
import platforms from "../../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms, next: null },
  });
export default usePlatforms;
