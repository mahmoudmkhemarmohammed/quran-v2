import CheckDataToRender from "@components/common/CheckDataToRender";
import Item from "@components/common/Item";
import Loading from "@components/feedback/Loading";
import { TWishlistSuwar } from "@types";

type TWishlistSuwarProps = {
  wishlistSuwarData: TWishlistSuwar[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error?: string;
};

const WishlistSuwar = ({
  wishlistSuwarData,
  isError,
  isLoading,
  error,
}: TWishlistSuwarProps) => {
  return (
    <div className="container mt-5">
      <h2 className="text-3xl font-bold mb-3">قائمة السور</h2>
      <Loading
        isLoading={isLoading}
        isError={isError}
        error={error}
        type="wishlist"
      >
        <div className="items grid gridList">
          <CheckDataToRender
            data={wishlistSuwarData}
            renderItem={(data, index) => (
              <Item key={index} type="surah" data={data} index={index} />
            )}
          />
        </div>
      </Loading>
    </div>
  );
};

export default WishlistSuwar;
