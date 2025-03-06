import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  addReciterToWishlistToggle,
  addSurahToWishlistToggle,
} from "@store/wishlist/wishlistSlice";
import { addToast } from "@store/toasts/toastsSlice";

const useItem = (
  setSurah?: (id: number) => void,
  setTafsirSrc?: (src: string) => void
) => {
  const dispatch = useAppDispatch();
  const { itemsReciter, itemsSurah } = useAppSelector(
    (state) => state.wishlist
  );
  const [isLoading, setIsLoading] = useState(false);

  const wishlistHandler = (id: number, type: string) => {
    setIsLoading(true);
    if (type === "reciter") {
      setTimeout(() => {
        setIsLoading(false);
        dispatch(addReciterToWishlistToggle(id));
        dispatch(
          addToast({
            type: itemsReciter.includes(id) ? "danger" : "success",
            title: "تم بنجاح",
            message: itemsReciter.includes(id)
              ? "تم إزالة القارئ من المفضلة"
              : "تم إضافة القارئ الي المفضلة",
          })
        );
      }, 2000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        dispatch(addSurahToWishlistToggle(id));
        dispatch(
          addToast({
            type: itemsSurah.includes(id) ? "danger" : "success",
            title: "تم بنجاح",
            message: itemsSurah.includes(id)
              ? "تم إزالة السورة من المفضلة"
              : "تم إضافة السورة الي المفضلة",
          })
        );
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
