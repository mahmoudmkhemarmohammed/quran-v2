const MushafsSkelectons = () => {
  const rendedItems = Array(3)
    .fill(0)
    .map((_, idx) => (
      <div
        key={idx}
        className="w-[300px] grow h-[300px] rounded-md bg-[#156d69] animate-pulse"
      ></div>
    ));
  return (
    <section className="text-center flex justify-center items-center flex-col">
      <h2 className="text-2xl text-center w-[200px] h-24 bg-[#156d69] mt-5 rounded-2xl"></h2>
      <h2 className="text-2xl text-center w-[200px] h-16 bg-[#156d69] mt-5 rounded-xl mb-11"></h2>
      <div className="w-full flex justify-between gap-2.5 flex-wrap">
        {rendedItems}{" "}
        <div className="w-[350px] grow h-[300px] bg-[#156d69] animate-pulse"></div>
      </div>
    </section>
  );
};

export default MushafsSkelectons;
