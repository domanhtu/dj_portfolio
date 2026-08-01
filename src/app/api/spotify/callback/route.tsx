import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const error = request.nextUrl.searchParams.get('error');
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const code = request.nextUrl.searchParams.get('code');
  if (!code) {
    return NextResponse.json({ error: 'missing code' }, { status: 400 });
  }

  const basicAuth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${basicAuth}`,
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
    }),
  });

  const bodyText = await res.text();
  if (!res.ok) {
    return NextResponse.json(
      { error: `${res.status} ${bodyText}` },
      { status: res.status }
    );
  }

  const data = JSON.parse(bodyText);

  return NextResponse.json({
    message:
      'Copy refresh_token into SPOTIFY_REFRESH_TOKEN in .env (and your Vercel project env vars), then this route is no longer needed until the token is ever revoked.',
    refresh_token: data.refresh_token,
  });
}
