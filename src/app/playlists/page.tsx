'use client'

import useGetData from '@/hooks/useGetData';
import React, { useState, useEffect, useCallback } from 'react';

function getArtists(A: any) {
  return A.map(artist => artist.name).join(', ');
}

export default function Page() {
  const playlists = [
    {name: '90s', id: "4Um9u3HYmcw0gWS46dTVSo"},
    {name: '00s', id: "7nfAVGIqoOZLKbiR7xMtA8"},
    {name: 'Big Room', id: "6x6uMgAvaWe6Vj4XwYtGov"},
    {name: 'EDM', id: "1QjABQdpImf51EWfrFDolK"},
    {name: 'Rap', id: "3k2wkIT5tGwKcxCzRC08Kl"}
  ]

  const [playlist, setPlaylist] = useState('90s');
  const {data, loading, call: getData} = useGetData()

  useEffect(() => {
    getData();
    }, []);

  return (
    <div className="mx-auto max-w-lg sm:p-10 p-4 bg-blue-200 border rounded-[20px] shadow-2xl">
      {loading ? <p>Loading</p> : <>
      <h1 className="my-2 text-3xl">Playlists</h1>
        <ul className='flex cursor-pointer justify-stretch'>
          {playlists.map((plist) => (
            <li onClick={() => setPlaylist(plist.name)} key={plist.id} style={{minWidth: "65px"}} className={`mx-1 p-3 text-center shadow-2xl rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ${plist.id === playlist ? "underline underline-offset-4 text-gray-0  bg-indigo-300" : "text-gray-500 bg-white"}`}>{plist.name}</li>
          ))
          }
        </ul>
      <h2 className="my-2 text-xl">Songs</h2>
      <ul role="list" className="divide-y divide-gray-100">
        {data && data[playlist].map((track) => (
          <li key={track.track.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img className="h-20 w-20 flex-none" src={track.track.album.images[0].url} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="font-semibold leading-6 text-gray-900">{track.track.name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{getArtists(track.track.artists)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </>}
  </div>
  )
}