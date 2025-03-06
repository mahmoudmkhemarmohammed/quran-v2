import { Link } from "react-router-dom";
import scrollHandler from "@utils/scrollHandler";

const LinkItems = ({
  children,
  display,
  onClick,
  to,
}: {
  children: React.ReactNode;
  display?: string;
  onClick?: () => void;
  to: string;
}) => {
  const clickHandler = () => {
    scrollHandler("explore");
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      onClick={clickHandler}
      className={`${
        display ? display : "flex"
      } justify-between items-center max-sm:flex-col-reverse gap-2 p-3.5 max-sm:p-1.5 text-2xl bg-[#16706b] hover:bg-[#479390] rounded-xl max-sm:text-[15px] max-sm:bg-transparent max-sm:w-[20%] max-sm:text-center`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkItems;
