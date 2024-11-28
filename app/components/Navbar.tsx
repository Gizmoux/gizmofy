// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logique de connexion à implémenter
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-xl font-bold hover:text-gray-300 transition"
          >
            GizmoFy
          </Link>

          <div className="flex space-x-4 ml-6">
            <Link href="/artists" className="hover:text-gray-300 transition">
              Artistes
            </Link>
            <Link href="/albums" className="hover:text-gray-300 transition">
              Albums
            </Link>
          </div>
        </div>

        <div>
          <button
            onClick={handleLogin}
            className={`
              px-4 py-2 rounded transition
              ${
                isLoggedIn
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }
            `}
          >
            {isLoggedIn ? "Déconnexion" : "Connexion"}
          </button>
        </div>
      </div>
    </nav>
  );
}
