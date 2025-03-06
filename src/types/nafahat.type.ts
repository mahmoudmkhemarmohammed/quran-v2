export type TNafahat = {
  videos: [
    {
      id: number;
      reciter_name: string;
      videos: [
        {
          id: number;
          video_type: number;
          video_url: string;
          video_thumb_url: string;
        }
      ];
    }
  ];
};
