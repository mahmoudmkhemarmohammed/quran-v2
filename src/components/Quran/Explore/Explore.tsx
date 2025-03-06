import useFetchReciters from "@hooks/useFetchReciters";
import Sidebar from "./Sidebar";
import GridList from "@components/common/GridList";
const Explore = () => {
  const { data, isLoading, isError, error } = useFetchReciters();
  return (
    <section id="explore">
      <div className="container flex justify-between gap-5 max-sm:block">
        <Sidebar />
        <GridList
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error?.message}
          itemType="reciter"
          type="gridList"
        />
      </div>
    </section>
  );
};

export default Explore;
