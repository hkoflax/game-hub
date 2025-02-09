import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
}

export interface FecthGenresResponse {
  count: number;
  results: Genre[];
}


const useGenres=() =>{
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
setLoading(true);
    apiClient
      .get<FecthGenresResponse>("/genres", {signal: controller.signal})
      .then(({ data }) => {
        setGenres(data.results);
        setLoading(false);
    })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
    });

      return () => controller.abort();
  }, []);
  return {genres, error, isLoading};
}

export default useGenres;