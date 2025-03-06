const GridListSkelectons = () => {
  const itemRenderd = Array(50)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="bg-[#156d69] w-full animate-pulse rounded-sm h-[50px] flex justify-between items-center p-1.5"
      >
        <h2 className="w-[30%] h-[40%] bg-[#0f4c49] animate-pulse rounded-md"></h2>
        <h2 className="w-[30%] h-[40%] bg-[#0f4c49] animate-pulse rounded-md"></h2>
        <h2 className="w-[30%] h-[40%] bg-[#0f4c49] animate-pulse rounded-md"></h2>
      </div>
    ));
  return (
    <div className="grow">
      <div className="w-[300px] h-[50px] bg-[#156d69] animate-pulse rounded-md max-sm:w-full"></div>
      <div className="grid gridList mt-3">{itemRenderd}</div>
    </div>
  );
};

export default GridListSkelectons;
