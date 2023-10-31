import useData from "./useData";
interface Genres {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => {
  const { data, isLoading, error } = useData<Genres>("/genres");
  return { data, isLoading, error };
};
export default useGenres;
