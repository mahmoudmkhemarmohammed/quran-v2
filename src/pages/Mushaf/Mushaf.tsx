import Mushaf from "@components/Quran/Mushaf/Mushaf";
import scrollHandler from "@utils/scrollHandler";
import useMushaf from "./useMushaf";
import Loading from "@components/feedback/Loading";
import CheckDataToRender from "@components/common/CheckDataToRender";
import { motion } from "motion/react";
const QuranViewer = () => {
  const { data, changePage, page, isLoading, isError, error } = useMushaf();
  return (
    <section id="mushaf">
      <div className="container pt-10 px-4">
        <Mushaf page={page} changePage={changePage} />
        <Loading
          isLoading={isLoading}
          isError={isError}
          error={error?.message}
          type="mushaf"
        >
          <div className="grid gridList mt-4">
            <CheckDataToRender
              data={data}
              renderItem={(surah, index) => (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{
                    duration: 0.4,
                    delay: typeof index === "number" ? index * 0.01 : 0,
                  }}
                  key={index}
                  onClick={() => {
                    changePage(surah.start_page + 1);
                    scrollHandler("mushaf");
                  }}
                  className={`${
                    page - 1 == surah.start_page
                      ? "bg-linear-to-r from-[#16861c] to-[#5ca30c] hover:bg-linear-to-r hover:from-[#e9a907]"
                      : "bg-linear-to-r from-[#115a56] to-[#156d69] hover:bg-linear-to-r hover:from-[#479390]"
                  } hover:bg-linear-to-r hover:from-[#479390] p-5 cursor-pointer rounded-md`}
                >
                  <h2 className="text-2xl text-center">{surah.name}</h2>
                  <div className="flex justify-between text-[15px] mt-3.5">
                    <h2>
                      الصفحة: {surah.start_page} : {surah.end_page}
                    </h2>
                    <p>سورة {surah.makkia == 1 ? "مكية" : "مدنية"}</p>
                  </div>
                </motion.div>
              )}
            />
          </div>
        </Loading>
      </div>
    </section>
  );
};

export default QuranViewer;
