import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
}

export interface FecthGamesResponse {
  count: number;
  results: Game[];
}


const useGames=() =>{
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FecthGamesResponse>("/games", {signal: controller.signal})
      .then(({ data }) => setGames(data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});

      return () => controller.abort();
  }, []);
  return {games, error};
}

export default useGames;