import { NextResponse } from "next/server";

const responseData: any = {};
const promises: any = [];

const playlists = [
  { name: "90s", id: "6QAJ4WPgHs2th82vIdXA2W" },
  { name: "00s", id: "6TgoUGXZ3cVbKkfwoLut6L" },
  { name: "10s", id: "0R2w2gJUUDDNRoLWFpt6ey"},
  { name: "Big Room", id: "5VDJKbU24QPOVanfdqutKW" },
  { name: "EDM", id: "4JipZ6DWrys6GuxnTuzESY" },
  { name: "Rap", id: "1qnRl1RSr1QbpZT1RyT7Kc" },
  { name: "CZ", id: "3enOKVpK5me2n7GDKjZsLT" },
  { name: "TikTok", id: "6zEAvoMmr2aLYsEuPjsb6c"}
];

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

async function getToken() {
  const body = {
    grant_type: "client_credentials",
  };

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Cache-Control": "no-cache",
  };

  const res = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: headers,
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  });

  const data = await res.json();
  return data.access_token;
}

export async function GET() {
  let response = NextResponse.next();
  response.headers.set("Content-Type", "application/json");
  const token = await getToken();

  playlists.forEach(async (e) => {
    const endpoint =
      "v1/playlists/" +
      e.id +
      "/tracks?fields=items%28track%28id%2C+name%2C+album%28name%2C+images%28url%29%29%2Cartists%28name%29%29%29";

    promises.push(
      fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      })
        .then((res) =>
          res.json().then((data) => {
            responseData[e.name] = JSON.parse(JSON.stringify(data.items));
          })
        )
        .catch((err) => {
          console.error(err);
        })
    );
  });

  await Promise.all(promises);

  return NextResponse.json(responseData);
}
