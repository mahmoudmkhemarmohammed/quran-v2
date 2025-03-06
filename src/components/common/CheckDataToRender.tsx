import { motion } from "motion/react";
import { FaClipboardList } from "react-icons/fa";
type TCheckDataToRenderProps<T> = {
  data: T[] | undefined;
  renderItem: (data: T, index: number) => React.ReactNode;
};

const CheckDataToRender = <T,>({
  data,
  renderItem,
}: TCheckDataToRenderProps<T>) => {
  const renderdItems =
    data && data.length > 0 ? (
      data.map((data, index) => renderItem(data, index))
    ) : (
      <motion.div
        className="flex flex-col items-center justify-center h-64 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="p-4 rounded-full bg-red-100 text-red-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaClipboardList className="w-12 h-12" />
        </motion.div>
        <p className="mt-4 text-lg font-medium">لا توجد بيانات متاحة</p>
        <p className="text-sm mt-1.5">نأسف لك ♥</p>
      </motion.div>
    );

  return <>{renderdItems}</>;
};

export default CheckDataToRender;
