"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LoginResponse {
  message: string;
  token: string;
}

interface ErrorResponse {
  response?: {
    data: string;
  };
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
        
      if (!API_URL) {
        setError("API URL non définie.");
        setLoading(false);
        return;
      }

      const loginUrl = `${API_URL.replace(/\/$/, '')}/login`;

      const response = await axios.post<LoginResponse>(loginUrl, {
        username,
        password,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        router.replace("/dashboard#privatespace");
      } else {
        setError("Erreur : aucun token reçu.");
      }
    } catch (err: unknown) {
      const errorResponse = err as ErrorResponse;
      setError(errorResponse.response?.data || "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit} className="login-form">
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Identifiant"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
        />
      </div>

      <div>
        <button type="submit" disabled={loading}>
          {loading ? "Chargement..." : "Se connecter"}
        </button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;
