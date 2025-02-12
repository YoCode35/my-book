"use client";

import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import DotsRectangle from "../../components/dots/DotsRectangle";

interface UserData {
  id: number;
  username: string;
  role: string;
  projects: { id: number; name: string; description: string }[];
}

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

const DashboardPage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const privatespaceRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      router.replace("/login");
      return;
    }

        // Log pour vérifier l'URL de l'API
        console.log('API_URL:', process.env.NEXT_PUBLIC_API_URL);

        const fetchData = async () => {
          try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            
            // Log pour vérifier l'URL de l'API et le token avant la requête
            console.log('URL de la requête /dashboard :', `${API_URL}/dashboard`);
            console.log('Token utilisé pour /dashboard :', token);
            
            const response = await axios.get<UserData>(`${API_URL}/dashboard`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            
            // Log pour voir la réponse de l'API pour /dashboard
            console.log('Réponse de /dashboard :', response.data);
        
            setUserData(response.data);
        
            if (response.data.role === "admin") {
              // Log pour indiquer que l'utilisateur est un admin et qu'on va récupérer les utilisateurs
              console.log('Utilisateur est un admin, récupération des utilisateurs...');
        
              // Log pour vérifier l'URL de la requête /users et le token avant la requête
              console.log('URL de la requête /users :', `${API_URL}/users`);
              console.log('Token utilisé pour /users :', token);
        
              const usersResponse = await axios.get<User[]>(`${API_URL}/users`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              
              // Log pour voir la réponse de l'API pour /users
              console.log('Réponse de /users :', usersResponse.data);
        
              setUsers(usersResponse.data);
            }
          } catch (err: unknown) {
            if (err instanceof Error) {
              setError(err.message);
        
              // Log pour afficher l'erreur capturée
              console.error('Erreur capturée :', err.message);
            } else {
              setError("Erreur inconnue");
        
              // Log pour afficher une erreur inconnue
              console.error('Erreur inconnue', err);
            }
          } finally {
            setLoading(false);
        
            // Log pour indiquer que le chargement est terminé
            console.log('Chargement terminé');
          }
        };             

    fetchData();
  }, [router]);

  useLayoutEffect(() => {
    if (window.location.hash === "#privatespace" && privatespaceRef.current) {
      privatespaceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center pt-10">
      {/* SEPARATOR */}
      <div className="min-h-[60px]"></div>

      <DotsRectangle
        className="w-full relative h-[55px] z-1"
        rows={3}
        dotColor="#fff000"
      />

      <h2 ref={privatespaceRef} className="title-privatespace-section">
        Espace privé
      </h2>

      <p className="privatespace-text italic mt-12">Bienvenue, {userData?.username}</p>

      {/* Affichage des projets */}
      {userData?.projects && userData.projects.length > 0 ? (
        <ul>
          {userData.projects.map((project) => (
            <li key={project.id}>
              {/* Si l'utilisateur est admin, ne pas afficher le nom et la description */}
              {userData?.role !== "admin" && (
                <>
                  <h3 className="privatespace-text mt-24 mb-8">{project.name}</h3>
                  <p className="privatespace-text mt-16">{project.description}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun projet trouvé.</p>
      )}

      {userData?.role === "admin" && users && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">Liste clients</h2>
          <table className="border-collapse border border-gray-500 w-full">
            <thead>
              <tr className="bg-gray-600">
                <th className="border-gray-500 px-4 py-2">Nom</th>
                <th className="border-gray-500 px-4 py-2">Rôle</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => {
                  const userId = Number(user.id);
                  const adminId = 1;
                  console.log(`Comparing user.id: ${userId} with adminId: ${adminId}`);
                  return userId !== adminId;
                })
                .map((user) => (
                  <tr key={user.id} className="hover:bg-green-500">
                    <td className="border-gray-500 px-4 py-2">{user.username}</td>
                    <td className="border-gray-100 px-4 py-2">{user.role}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
