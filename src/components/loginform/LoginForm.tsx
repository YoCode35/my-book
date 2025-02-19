"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import DotsRectangle from "../../components/dots/DotsRectangle";

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
        localStorage.setItem("successMessage", "Connexion réussie !");
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

    <div
      className=" bg-cover
                  bg-no-repeat
                  bg-[url('/img/colored_spots.webp')]                  
                  pb-48"
    >

      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotColor="#fff000"
      />

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
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </form>
      
    </div>
  );
};

export default LoginForm;
