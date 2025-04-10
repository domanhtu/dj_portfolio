'use client'

import useGetPlaylistData from '@/hooks/useGetPlaylistData';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { playlists } from "@/constants/constants";

function getArtists(A: ArtistArray) {
  return A.map(artist => artist.name).join(', ');
}

export default function Page() {
  const [playlist, setPlaylist] = useState('90s');
  const {data, loading, call: getData} = useGetPlaylistData()

  useEffect(() => {
    getData();
    }, []);

  return (
    <div className="flex flex-col items-center mx-auto max-w-lg sm:p-10 p-4 backdrop-blur-sm bg-gradient-radial via-[#0040ff4b] from-[#1540c03d] dark:bg-zinc-800 dark:via-[#0141ff77] dark:from-blue-900 lg:border lg:rounded-[20px] shadow-2xl">
      {loading ? <p>Loading</p> : <>
        <h1 className="my-2 text-3xl dark:text-neutral-200">Playlists</h1>
        <div className='grid grid-cols-4 gap-y-2'>
          {playlists.map((plist) => (
            <div onClick={() => setPlaylist(plist.name)} key={plist.id} className={`mx-1 p-3 min-w-[65px] text-center shadow-2xl rounded-lg hover:-translate-y-1 hover:scale-110 dark:bg-zinc-900 dark:hover:bg-blue-950 hover:bg-indigo-400 duration-300 ${plist.name === playlist ? "underline underline-offset-4 bg-indigo-300" : "dark:text-gray-300 bg-white"}`}>{plist.name}</div>
          ))
          }
        </div>
        <Link href={`https://open.spotify.com/playlist/${playlists.find(item => item.name === playlist)?.id}`} className='underline mt-2 text-yellow-200'>Spotify link</Link>
      <h2 className="text-xl">Songs</h2>
      <ul role="list" className="divide-y divide-gray-100">
        {data && data[playlist].map((track: Track) => (
          <li key={track.track.id} className="flex justify-between gap-x-6 py-5 min-w-[340px] sm:min-w-[400px]">
            <div className="flex gap-x-4">
              <Image
                className="flex-none"
                src={track.track.album.images[0].url}
                alt={track.track.name}
                width={80}
                height={80}
                quality={100}
              />
              <div className="min-w-0 flex-auto">
                <p className="font-semibold  leading-6 dark:text-neutral-200 text-gray-900">{track.track.name}</p>
                <p className="mt-1 truncate text-xs leading-5 dark:text-gray-400 text-gray-600">{getArtists(track.track.artists)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </>}
  </div>
  )
}