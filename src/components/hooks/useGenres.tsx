import useData from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => {
  const { data, isLoading, error } = useData<Genre>("/genres");
  return { data, isLoading, error };
};
export default useGenres;
