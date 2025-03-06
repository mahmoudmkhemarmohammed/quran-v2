import { TMoshaf } from "@types";
import { GiConfirmed } from "react-icons/gi";
import { motion } from "motion/react";
type TMushafItemProps = {
  setMushaf: (idx: number) => void;
  idx: number;
  record: TMoshaf;
  img: string;
  mushaf: number;
};

const MushafItem = ({
  setMushaf,
  idx,
  record,
  img,
  mushaf,
}: TMushafItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        delay: typeof idx === "number" ? idx * 0.1 : 0,
      }}
      onClick={() => setMushaf(idx)}
      key={record.id}
      className="relative flex flex-col items-center justify-center gap-5 cursor-pointer bg-linear-to-b to-[#115a56] from-[#156d69] hover:bg-linear-to-b hover:to-[#479390] text-center px-4 py-7 rounded-xl"
    >
      <div className="img w-[70%] max-lg:w-[40%]">
        <img src={img} alt={record.name} className="w-full" loading="eager" />
      </div>
      <h2 className="text-xl">{record.name}</h2>
      {mushaf === idx && (
        <GiConfirmed className="absolute top-4 left-4 text-4xl text-[#00ff00]" />
      )}
    </motion.div>
  );
};

export default MushafItem;
