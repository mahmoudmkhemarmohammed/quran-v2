const LiveSkelectons = () => {
  return (
    <div className="w-full flex gap-5 max-xl:flex-wrap">
      <div className="w-fit flex flex-col gap-3.5 max-xl:w-full">
        <h2 className="w-[200px] h-[50px] bg-[#156d69] animate-pulse rounded-md"></h2>
        <div className="w-[300px] h-[60px] max-xl:w-full bg-[#156d69] animate-pulse rounded-md"></div>
        <div className="w-[300px] h-[60px] max-xl:w-full bg-[#156d69] animate-pulse rounded-md"></div>
      </div>

      <div className="w-full h-[500px] max-lg:h-[370px] bg-[#156d69] animate-pulse rounded-md"></div>
    </div>
  );
};

export default LiveSkelectons;
