import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserData {
  username: string;
  email: string;
  // Ajouter d'autres champs de données utilisateur si nécessaire
}

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Récupérer le token du localStorage
    if (!token) {
      window.location.href = '/login'; // Si aucun token, rediriger vers la page login
    }

    // Fonction pour récupérer les données utilisateur
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile', {
          headers: {
            Authorization: `Bearer ${token}`, // Ajouter le token dans les headers
          },
        });
        setUserData(response.data as UserData); // Stocker les données utilisateur
      } catch (err) {
        if (err instanceof Error) {
          // Vérifier si err est bien une instance de Error (erreur standard JS)
          setError(err.message || "Erreur de récupération du profil");
        } else {
          setError("Erreur inconnue");
        }
      } finally {
        setLoading(false); // Fin de la requête
      }
    };

    fetchData(); // Appeler la fonction fetchData
  }, []);

  if (loading) {
    return <div>Chargement...</div>; // Afficher pendant le chargement
  }

  if (error) {
    return <div>{error}</div>; // Afficher les erreurs, le cas échéant
  }

  return (
    <div>
      <h1>Bienvenue, {userData?.username}!</h1>
      <p>Nom : {userData?.username}</p>
      <p>Email : {userData?.email}</p>
      {/* Autres informations de profil */}
    </div>
  );
};

export default ProfilePage;
