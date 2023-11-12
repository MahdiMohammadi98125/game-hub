import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publihser } from "./Publisher";

export interface Game {
  id: number;
  slug: string;
  description_raw: string;
  name: string;
  genres: Genre[];
  publishers: Publihser[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
