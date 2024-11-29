import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export default function useIsLogged() {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(`${API_URL}/getUserInfo`, { credentials: "include" })
      .then((response) => {
        setIsLogged(response.status === 200);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLogged, isLoading, error };
}
