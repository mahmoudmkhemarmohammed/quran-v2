const NafahatSkelectons = () => {
  const itemRenderd = Array(15)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="w-full h-[243px] rounded-md bg-[#156d69] animate-pulse"
      ></div>
    ));
  return <>{itemRenderd}</>;
};

export default NafahatSkelectons;
