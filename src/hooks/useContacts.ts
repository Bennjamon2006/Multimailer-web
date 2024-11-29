import { useState, useEffect } from "react";
import { API_URL } from "../constants";
import { Contact } from "../types";
import { useNavigate } from "react-router";

export default function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_URL}/getContacts`, { credentials: "include" })
      .then((response) => {
        if (response.statusText === "Unauthorized") {
          navigate("/");
        }

        return response.json();
      })
      .then((data) => setContacts(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return { contacts, loading, error };
}
