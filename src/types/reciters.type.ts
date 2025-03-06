export type TReciters = [
  {
    id: number;
    name: string;
    letter: string;
    date: string;
    isLiked: boolean;
    moshaf: [
      {
        id: number;
        name: string;
        server: string;
        surah_total: number;
        moshaf_type: number;
        surah_list: string;
      }
    ];
  }
];