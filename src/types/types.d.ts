type ArtistArray = { name: string }[];

type Track = {
  item: {
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
};

type PlaylistData = {
  [playlistName: string]: Track[];
};
