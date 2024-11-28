"use client";

import { useState, useEffect } from "react";

function ArtistsListPage() {
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await fetch("/api/artists");
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }
        const data = await response.json();
        setArtists(data);
      } catch (err) {
        setError("Erreur lors du chargement des artistes");
        console.error(err);
      }
    }

    fetchArtists();
  }, []);

  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <h1>Liste des Artistes</h1>
      {artists.length === 0 ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArtistsListPage;
