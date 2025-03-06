import CheckDataToRender from "@components/common/CheckDataToRender";
import Loading from "@components/feedback/Loading";
import VideoPlayer from "@components/common/VideoPlayer";
import useLive from "./useLive";
import { motion } from "motion/react";
const Live = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    setStreamUrl,
    setActive,
    active,
    streamUrl,
  } = useLive();
  return (
    <section>
      <div className="container flex justify-between pt-10 max-xl:flex-col">
        <Loading isLoading={isLoading} isError={isError} error={error?.message} type="live">
          <div className="w-[25%] max-xl:w-full py-4">
            <h2 className="text-4xl font-bold">اختر قناة البث</h2>
            <CheckDataToRender
              data={data?.livetv}
              renderItem={(data, index) => (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: typeof index === "number" ? index * 0.1 : 0,
                  }}
                  key={data.id}
                  onClick={() => {
                    setStreamUrl(data.url);
                    setActive(data.id);
                  }}
                  className={`${
                    active == data.id
                      ? "bg-linear-to-r from-[#16861c] to-[#5ca30c] hover:bg-linear-to-r hover:from-[#e9a907]"
                      : "bg-linear-to-r from-[#115a56] to-[#156d69] hover:bg-linear-to-r hover:from-[#479390]"
                  } py-5 px-8 my-6 text-xl text-center rounded-md cursor-pointer`}
                >
                  {data.name}
                </motion.h2>
              )}
            />
          </div>
          <VideoPlayer streamUrl={streamUrl} />
        </Loading>
      </div>
    </section>
  );
};

export default Live;
