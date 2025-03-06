import CheckDataToRender from "@components/common/CheckDataToRender";
import Item from "@components/common/Item";
import Loading from "@components/feedback/Loading";
import { TWishlistReciter } from "@types";

type TWishlistReciterProps = {
  wishlistReciterData: TWishlistReciter[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error?: string;
};

const WishlistReciter = ({
  wishlistReciterData,
  isLoading,
  isError,
  error,
}: TWishlistReciterProps) => {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-3">قائمة القراء</h2>
      <Loading
        isLoading={isLoading}
        isError={isError}
        error={error}
        type="wishlist"
      >
        <div className="items grid gridList">
          <CheckDataToRender
            data={wishlistReciterData}
            renderItem={(data, index) => (
              <Item key={index} type="reciter" data={data} index={index} />
            )}
          />
        </div>
      </Loading>
    </div>
  );
};

export default WishlistReciter;
