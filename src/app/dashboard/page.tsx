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

        const fetchData = async () => {
          try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            
            const response = await axios.get<UserData>(new URL('/dashboard', API_URL).toString(), {
              headers: { Authorization: `Bearer ${token}` },
            });
        
            setUserData(response.data);
        
            if (response.data.role === "admin") {        
              const usersResponse = await axios.get<User[]>(new URL('/users', API_URL).toString(), {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });        
              setUsers(usersResponse.data);
            }
          } catch (err: unknown) {
            if (err instanceof Error) {
              setError(err.message);
            } else {
              setError("Erreur inconnue");
            }
          } finally {
            setLoading(false);
          }
        };             

    fetchData();
  }, [router]);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (window.location.hash === "#privatespace" && privatespaceRef.current) {
        privatespaceRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center pt-10 2xl:text-lg 2xl:pt-16">
  {/* SEPARATOR */}
  <div className="min-h-[60px] 2xl:min-h-[80px]"></div>

  <DotsRectangle
    className="w-full relative h-[55px] z-1 2xl:h-[70px]"
    rows={3}
    dotColor="#fff000"
  />

  <h2 id="privatespace" ref={privatespaceRef} className="title-privatespace-section text-xl 2xl:text-4xl 3xl:text-6xl 4xl:text-8xl 2xl:mt-8 3xl:mt-16">
    Espace privé
  </h2>

  <p className="privatespace-text italic mt-12 2xl:mt-16 2xl:text-xl 3xl:text-4xl 4xl:text-6xl">
    Bienvenue, {userData?.username}
  </p>

  {/* Affichage des projets */}
  {userData?.projects && userData.projects.length > 0 ? (
    <ul className="2xl:text-lg 2xl:mt-8 3xl:mt-16">
      {userData.projects.map((project) => (
        <li key={project.id}>
          {/* Si l'utilisateur est admin, ne pas afficher le nom et la description */}
          {userData?.role !== "admin" && (
            <>
              <h3 className="privatespace-text mt-24 mb-8 text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-5xl">{project.name}</h3>
              <p className="privatespace-text 2xl:text-2xl 3xl:text-3xl 4xl:text-5xl mt-16 2xl:mt-20">{project.description}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <p className="2xl:text-xl">Aucun projet trouvé.</p>
  )}

  {userData?.role === "admin" && users && (
    <div className="mt-10 2xl:mt-14">
      <h2 className="text-xl font-bold mb-4 2xl:text-2xl 2xl:font-extrabold">Liste clients</h2>
      <table className="border-collapse border border-gray-500 w-full 2xl:text-lg">
        <thead>
          <tr className="bg-gray-600">
            <th className="border-gray-500 px-4 py-2 2xl:px-6 2xl:py-3">Nom</th>
            <th className="border-gray-500 px-4 py-2 2xl:px-6 2xl:py-3">Rôle</th>
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
                <td className="border-gray-500 px-4 py-2 2xl:px-6 2xl:py-3">{user.username}</td>
                <td className="border-gray-100 px-4 py-2 2xl:px-6 2xl:py-3">{user.role}</td>
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
