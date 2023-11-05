import { NextResponse } from "next/server";

const responseData: any = {};
const promises: any = [];

const playlists = [
  { name: "90s", id: "6QAJ4WPgHs2th82vIdXA2W" },
  { name: "00s", id: "6TgoUGXZ3cVbKkfwoLut6L" },
  { name: "Big Room", id: "5VDJKbU24QPOVanfdqutKW" },
  { name: "EDM", id: "4JipZ6DWrys6GuxnTuzESY" },
  { name: "Rap", id: "1qnRl1RSr1QbpZT1RyT7Kc" },
  { name: "CZ", id: "3enOKVpK5me2n7GDKjZsLT" },
];

async function getToken() {
  const CLIENT_ID = "97386e4d9a374c589bfbb3f32e3d52dc";
  const CLIENT_SECRET = "4808c1ed22c04900b2315c7a88646de7";
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
    body: "grant_type=client_credentials&client_id=97386e4d9a374c589bfbb3f32e3d52dc&client_secret=4808c1ed22c04900b2315c7a88646de7",
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
