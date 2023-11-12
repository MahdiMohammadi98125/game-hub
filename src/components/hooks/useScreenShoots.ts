import { useQuery } from "@tanstack/react-query";
import ScreenShoot from "../entities/ScreenShoot";
import APIClient from "../services/api-client";

const useScreenShoots = (id: number) => {
  const apiClient = new APIClient<ScreenShoot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenShoots;
