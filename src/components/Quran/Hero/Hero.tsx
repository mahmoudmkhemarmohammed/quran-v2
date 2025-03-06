import img from "@assets/images/iqraa.png";
import scrollHandler from "@utils/scrollHandler";
import { RxDoubleArrowDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div className="hero relative flex justify-center items-center flex-col gap-8 px-2.5">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 1 * 0.1,
        }}
        className="text-8xl font-bold animate-pulse"
      >
        قرآنك
      </motion.h1>
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 2 * 0.1,
        }}
        src={img}
        alt="iqraa"
        className="max-sm:w-[90%]"
      />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 3 * 0.1,
        }}
        className="text-3xl font-bold"
      >
        قراءة{" "}
        <Link to={"/mushaf"} className="text-[#0ef]">
          سور القرآن الكريم
        </Link>{" "}
        مكتوبة
      </motion.h2>
      <RxDoubleArrowDown
        onClick={() => scrollHandler("explore")}
        className="text-5xl absolute bottom-7 max-sm:bottom-20 max-sm:text-4xl cursor-pointer animate-bounce"
      />
    </div>
  );
};

export default Hero;
