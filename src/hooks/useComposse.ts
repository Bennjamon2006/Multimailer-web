import { useState } from "react";
import { API_URL } from "../constants";
import { Contact } from "../types";

export default function useComposse() {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const send = async (
    subject: string,
    content: string,
    contacts: Contact[]
  ) => {
    setLoading(true);
    setError(null);

    fetch(`${API_URL}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, content, contacts }),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send email");
        }
        setState(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const restart = () => {
    setState(false);
    setError(null);
    setLoading(false);
  };

  return { state, send, loading, error, restart };
}
