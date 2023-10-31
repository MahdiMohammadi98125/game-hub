import useData from "./useData";
interface Genres {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => {
  const { data } = useData<Genres>("/genres");
  return { data };
};
export default useGenres;
