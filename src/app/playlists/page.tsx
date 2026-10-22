'use client';

import useGetPlaylistData from '@/hooks/useGetPlaylistData';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { playlists } from '@/constants/constants';

function getArtists(A: ArtistArray) {
  return A.map((artist) => artist.name).join(', ');
}

export default function Page() {
  const [playlist, setPlaylist] = useState('90s');
  const { data, loading, call: getData } = useGetPlaylistData();
  const { t } = useTranslation();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-[#224f95]/10 bg-gradient-radial from-[#224f95]/30 via-[#3a62a8]/20 to-[#224f95]/10 p-4 shadow-2xl backdrop-blur-sm dark:border-blue-300/10 dark:from-[#2a5aa8] dark:via-[#16325e] dark:to-[#0d1f3d] sm:p-8 lg:rounded-[20px]">
      <p className="mb-1 font-mono text-xs tracking-[0.3em] text-[#224f95] dark:text-blue-300">
        {t('playlists.eyebrow')}
      </p>
      <h1 className="font-mono text-3xl font-bold text-gray-900 dark:text-neutral-200">
        {playlist}
      </h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {playlists.map((plist) => {
          const isActive = plist.name === playlist;
          return (
            <button
              key={plist.id}
              onClick={() => setPlaylist(plist.name)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2.5 text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#224f95] dark:focus-visible:ring-blue-300 sm:px-4 sm:py-1.5 sm:text-sm ${
                isActive
                  ? 'border-[#224f95] bg-[#224f95] text-white dark:border-blue-300 dark:bg-blue-300 dark:text-zinc-900'
                  : 'border-[#224f95]/20 text-gray-700 hover:border-[#224f95]/60 hover:text-[#224f95] dark:border-blue-300/20 dark:text-gray-300 dark:hover:border-blue-300/60 dark:hover:text-blue-300'
              }`}
            >
              {plist.name}
            </button>
          );
        })}
      </div>

      <Link
        href={`https://open.spotify.com/playlist/${playlists.find((item) => item.name === playlist)?.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex font-mono text-sm text-yellow-600 underline underline-offset-4 transition-colors hover:text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-100"
      >
        {t('playlists.spotifyLink')}
      </Link>

      <h2 className="mb-2 mt-8 border-b border-[#224f95]/10 pb-2 font-mono text-xs uppercase tracking-widest text-[#224f95] dark:border-blue-300/10 dark:text-blue-300">
        {t('playlists.songs')}
      </h2>

      {loading ? (
        <ul className="divide-y divide-[#224f95]/10 dark:divide-white/10">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex gap-x-4 py-5">
              <div className="h-20 w-20 flex-none animate-pulse rounded-md bg-[#224f95]/10 dark:bg-white/10" />
              <div className="flex-auto space-y-2 py-1">
                <div className="h-3 w-2/3 animate-pulse rounded bg-[#224f95]/10 dark:bg-white/10" />
                <div className="h-3 w-1/3 animate-pulse rounded bg-[#224f95]/10 dark:bg-white/10" />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          key={playlist}
          role="list"
          className="animate-fade-in divide-y divide-[#224f95]/10 dark:divide-white/10"
        >
          {data &&
            data[playlist].map((track: Track) => (
              <li key={track.item.id} className="flex gap-x-4 py-5">
                <Image
                  className="h-20 w-20 flex-none rounded-md object-cover"
                  src={track.item.album.images[0].url}
                  alt={track.item.name}
                  width={80}
                  height={80}
                  quality={100}
                />
                <div className="min-w-0 flex-auto">
                  <p className="truncate font-semibold leading-6 text-gray-900 dark:text-neutral-200">
                    {track.item.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-600 dark:text-gray-400">
                    {getArtists(track.item.artists)}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
