import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { forwardRef } from "react";
import scrollHandler from "@utils/scrollHandler";

const MotionLink = motion.create(
  forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(
    (props, ref) => <Link ref={ref} {...props} />
  )
);

const LinkItems = ({
  children,
  display,
  onClick,
  to,
  delay,
}: {
  children: React.ReactNode;
  display?: string;
  onClick?: () => void;
  to: string;
  delay: number;
}) => {
  const clickHandler = () => {
    scrollHandler("explore");
    if (onClick) {
      onClick();
    }
  };

  return (
    <MotionLink
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        delay: delay * 0.07,
      }}
      onClick={clickHandler}
      className={`${
        display ? display : "flex"
      } justify-between items-center max-sm:flex-col-reverse gap-2 p-3.5 max-sm:p-1.5 text-2xl bg-[#16706b] hover:bg-[#479390] rounded-xl max-sm:text-[15px] max-sm:bg-transparent max-sm:w-[20%] max-sm:text-center`}
      to={to}
    >
      {children}
    </MotionLink>
  );
};

export default LinkItems;
