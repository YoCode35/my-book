import React, { useState } from "react";
import axios from "axios";

// Définir le type de la réponse attendue
interface LoginResponse {
  message: string;
  token: string;
}

// Définir le type de l'erreur
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<LoginResponse>("http://localhost:5000/login", {
        username,
        password,
      });

      console.log("Réponse du serveur:", response.data);

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Token enregistré !");
        alert("Connexion réussie !");
        window.location.href = "/profile";
      } else {
        console.error("Aucun token reçu !");
        setError("Erreur : aucun token reçu.");
      }
    } catch (err: unknown) {
      const errorResponse = err as ErrorResponse;
      console.error("Erreur de connexion :", errorResponse.response?.data || err);
      setError(errorResponse.response?.data || "Erreur de connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label>Username : </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
