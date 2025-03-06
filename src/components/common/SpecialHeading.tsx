const SpecialHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="container">
      <h2
        className={`text-5xl font-bold my-10 text-[#0ef] max-sm:text-4xl ${
          className ? className : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SpecialHeading;
