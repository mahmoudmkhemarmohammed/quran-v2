export type TWishlistReciter = {
  id: number;
  name: string;
  letter: string;
  date: string;
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
};

export type TWishlistSuwar = {
  id: number;
  name: string;
  start_page: number;
  end_page: number;
  makkia: number;
  type: number;
  isLiked?: boolean;
};