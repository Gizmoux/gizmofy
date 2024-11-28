import { NextResponse } from "next/server";
import spotifyApi from "@/lib/spotify";

export async function GET() {
  try {
    // Obtenir un token d'accès
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body["access_token"]);

    // Rechercher des artistes (ici, on cherche 'a' pour avoir une large sélection)
    const searchResult = await spotifyApi.searchArtists("a", { limit: 20 });

    return NextResponse.json(searchResult.body.artists.items);
  } catch (error) {
    console.error("Erreur lors de la récupération des artistes:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des artistes" },
      { status: 500 }
    );
  }
}
