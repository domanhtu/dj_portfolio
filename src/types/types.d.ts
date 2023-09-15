type ArtistArray = { name: string }[];

type Track = {
  track: {
    id: string;
    name: string;
    album: {
      images: {
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
  };
}

type PlaylistData = {
    [playlistName: string]: Track[];
  }
  