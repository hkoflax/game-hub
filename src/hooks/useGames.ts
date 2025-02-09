import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

export interface FecthGamesResponse {
  count: number;
  results: Game[];
}


const useGames=() =>{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
setLoading(true);
    apiClient
      .get<FecthGamesResponse>("/games", {signal: controller.signal})
      .then(({ data }) => {
        setGames(data.results);
        setLoading(false);
    })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
    });

      return () => controller.abort();
  }, []);
  return {games, error, isLoading};
}

export default useGames;