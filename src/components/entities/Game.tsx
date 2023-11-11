import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  description_raw: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
