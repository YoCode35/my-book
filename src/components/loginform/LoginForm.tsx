"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
/*import ReCAPTCHA from "react-google-recaptcha";

const SECRET_KEY = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;

interface ReCaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
}

const verifyCaptcha = async (captchaToken: string): Promise<boolean> => {
  const response = await axios.post<ReCaptchaResponse>(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    {
      params: {
        secret: SECRET_KEY,
        response: captchaToken,
      },
    }
  );

  return response.data.success;
};*/

interface LoginResponse {
  message: string;
  token: string;
}

interface ErrorResponse {
  response?: {
    data: string;
  };
}

//const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || "";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  //const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    /*if (!captchaToken) {
      setError("Veuillez compléter le CAPTCHA.");
      setLoading(false);
      return;
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
      setError("CAPTCHA invalide.");
      setLoading(false);
      return;
    }*/

      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        if (!API_URL) {
          setError("API URL non définie.");
          setLoading(false);
          return;
        }
        const response = await axios.post<LoginResponse>(`${API_URL.replace(/\/$/, '')}/login`,
          {
            username,
            password,
        //captchaToken,
      });

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Token enregistré !");

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
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label>Username :</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/*}<div>
        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={(token: string | null) => setCaptchaToken(token)}
        />
      </div>*/}
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
