import { NextResponse } from 'next/server';
import { playlists } from '@/constants/constants';

const basicAuth = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString('base64');

async function getToken() {
  const res = await fetch(`https://accounts.spotify.com/api/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });

  const bodyText = await res.text();
  if (!res.ok) {
    throw new Error(`Spotify token request failed: ${res.status} ${bodyText}`);
  }

  const data = JSON.parse(bodyText);
  return data.access_token;
}

export async function GET() {
  const responseData: PlaylistData = {};

  let token: string;
  try {
    token = await getToken();
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 502 }
    );
  }

  const promises: Promise<void>[] = playlists.map(async (playlist) => {
    const params = new URLSearchParams({
      fields: 'items(item(id,name,album(name,images(url)),artists(name)))',
    });

    const endpoint = `v1/playlists/${playlist.id}/items?${params.toString()}`;

    try {
      const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'GET',
      });

      const bodyText = await res.text();
      if (!res.ok) {
        throw new Error(
          `Spotify tracks request failed for "${playlist.name}": ${res.status} ${bodyText}`
        );
      }

      const data = JSON.parse(bodyText);
      responseData[playlist.name] = data.items;
    } catch (err) {
      console.error(err);
    }
  });

  await Promise.all(promises);

  return NextResponse.json(responseData);
}
