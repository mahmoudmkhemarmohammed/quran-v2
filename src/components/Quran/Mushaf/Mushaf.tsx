import { motion, AnimatePresence } from "framer-motion";
import { PiSpinner } from "react-icons/pi";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
const Mushaf = ({
  page,
  changePage,
  isLoadedData,
  setIsLoadedData,
  handleTouchStart,
  handleTouchEnd,
  setIsZooming,
}: {
  page: number;
  isLoadedData: boolean;
  setIsLoadedData: (status: boolean) => void;
  changePage: (num: number) => void;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEnd: (e: React.TouchEvent<HTMLDivElement>) => void;
  setIsZooming: (status: boolean) => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        style={{ touchAction: "pan-y" }}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        className="relative max-sm:w-full md:w-[500px] rounded-lg shadow-lg overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full min-h-[700px] max-lg:min-h-[450px]"
          >
            <InnerImageZoom
              src={`${import.meta.env.VITE_IMG_URL}${page}.jpg`}
              zoomType="hover"
              afterZoomIn={() => setIsZooming(true)}
              afterZoomOut={() => setIsZooming(false)}
              imgAttributes={{
                alt: `Quran Page ${page}`,
                onLoad: () => setIsLoadedData(true),
                loading: "eager",
                className: "w-full h-full",
              }}
            />
          </motion.div>
        </AnimatePresence>
        {!isLoadedData && (
          <div className="absolute left-0 top-0 w-full h-full bg-[#053130] flex justify-center items-center">
            <PiSpinner size={45} className="animate-spin" />
          </div>
        )}
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
          صفحة {page == 0 ? 0 : page - 1} من 607
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
