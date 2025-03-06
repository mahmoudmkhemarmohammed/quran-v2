const MushafSkelectons = () => {
  const renderdItems = Array(100)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="w-full h-[109px] bg-[#156d69] animate-pulse text-center rounded-md mt-5"
      >
        <h2 className="w-[50%] h-8 bg-[#0f4c49] mt-5 mx-auto animate-pulse rounded-md"></h2>
        <div className="flex justify-between">
        <h2 className="w-[35%] h-8 bg-[#0f4c49] mt-3 mx-auto animate-pulse rounded-md"></h2>
        <h2 className="w-[35%] h-8 bg-[#0f4c49] mt-3 mx-auto animate-pulse rounded-md"></h2>
        </div>
      </div>
    ));
  return <div className="grid gridList">{renderdItems}</div>;
};

export default MushafSkelectons;
