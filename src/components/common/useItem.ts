import { useState } from "react";
import { useAppDispatch } from "@store/hooks";
import {
  addReciterToWishlistToggle,
  addSurahToWishlistToggle,
} from "@store/wishlist/wishlistSlice";

const useItem = (
  setSurah?: (id: number) => void,
  setTafsirSrc?: (src: string) => void
) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const wishlistHandler = (id: number, type: string) => {
    setIsLoading(true);
    if (type === "reciter") {
      setTimeout(() => {
        setIsLoading(false);
        dispatch(addReciterToWishlistToggle(id));
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        dispatch(addSurahToWishlistToggle(id));
      }, 2000);
    }
  };

  const handelSetSurah = (id: number) => {
    if (setSurah) {
      setSurah(id);
    }
  };

  const handelSetTafsir = (src: string) => {
    if (setTafsirSrc) {
      setTafsirSrc(src);
    }
  };

  return { isLoading, wishlistHandler, handelSetTafsir, handelSetSurah };
};

export default useItem;
