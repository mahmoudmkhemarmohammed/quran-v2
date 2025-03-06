const WishlistSkelectons = () => {
  const itemRenderd = Array(6)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="bg-[#156d69] animate-pulse rounded-sm w-[220px] h-[50px] flex justify-between items-center p-1.5 max-lg:w-full"
      >
        <h2 className="w-[30%] h-[40%] bg-[#0f4c49] animate-pulse rounded-md"></h2>
        <h2 className="w-[30%] h-[40%] bg-[#0f4c49] animate-pulse rounded-md"></h2>
        <h2 className="w-[30%] h-[40%] bg-[#0f4c49] animate-pulse rounded-md"></h2>
      </div>
    ));
  return <div className="grid gridList">{itemRenderd}</div>;
};

export default WishlistSkelectons;
