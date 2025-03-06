import SpecialHeading from "@components/common/SpecialHeading";
import WishlistReciter from "@components/Quran/Wishlist/WishlistReciter";
import WishlistSuwar from "@components/Quran/Wishlist/WishlistSuwar";
import useFetchWishlistReciters from "@hooks/useFetchWishlistReciters";
import useFetchWishlistSuwar from "@hooks/useFetchWishlistSuwar";

const Wishlist = () => {
  const { data, isLoading, isError, error } = useFetchWishlistReciters();
  const {
    data: suwar,
    isError: suIsError,
    isLoading: suIsLoading,
    error: suError,
  } = useFetchWishlistSuwar();
  return (
    <section>
      <SpecialHeading title="قائمة المفضلة" className="text-center" />
      <WishlistReciter
        wishlistReciterData={data}
        isLoading={isLoading}
        isError={isError}
        error={error?.message}
      />
      <WishlistSuwar
        wishlistSuwarData={suwar}
        isLoading={suIsLoading}
        isError={suIsError}
        error={suError?.message}
      />
    </section>
  );
};

export default Wishlist;
