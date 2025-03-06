import img from "@assets/images/quran.png";
import {motion} from "motion/react"
const GoalItem = ({ desc , delay}: { desc: string , delay:number }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition=
    {{
      duration: 0.4,
      delay: delay * 0.1,
    }}
    className="bg-linear-to-b to-[#115a56] from-[#156d69] flex gap-2.5 flex-col items-center p-5 rounded-md">
      <img src={img} alt="golas" className="w-[120px]"/>
      <p className="text-[19px] text-center leading-[2]">{desc}</p>
    </motion.div>
  );
};

export default GoalItem;
