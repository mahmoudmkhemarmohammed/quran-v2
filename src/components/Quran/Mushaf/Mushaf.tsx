import { motion, AnimatePresence } from "framer-motion";
const Mushaf = ({
  page,
  changePage,
}: {
  page: number;
  changePage: (num: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative max-sm:w-full md:w-[500px] rounded-lg shadow-lg overflow-hidden border border-gray-300">
        <AnimatePresence mode="wait">
          <motion.img
            key={page}
            src={`${import.meta.env.VITE_IMG_URL}${page}.jpg`}
            alt={`Quran Page ${page}`}
            className="w-full min-h-[700px] max-lg:min-h-[450px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            loading="eager"
          />
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-6">
        <motion.button
          onClick={() => changePage(page - 1)}
          className="px-5 py-2 bg-blue-600 cursor-pointer text-white rounded-lg shadow-md transition-all hover:bg-blue-700 active:scale-90 disabled:bg-gray-400"
          disabled={page === 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ▶ السابق
        </motion.button>

        <span className="text-lg font-semibold text-white">
          صفحة {page - 1} من 607
        </span>

        <motion.button
          onClick={() => changePage(page + 1)}
          className="px-5 py-2 bg-blue-600 cursor-pointer text-white rounded-lg shadow-md transition-all hover:bg-blue-700 active:scale-90 disabled:bg-gray-400"
          disabled={page === 607}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          التالي ◀
        </motion.button>
      </div>
    </div>
  );
};

export default Mushaf;
