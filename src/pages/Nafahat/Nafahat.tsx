import CheckDataToRender from "@components/common/CheckDataToRender";
import Loading from "@components/feedback/Loading";
import VideoPlayer from "@components/common/VideoPlayer";
import scrollHandler from "@utils/scrollHandler";
import useNafahat from "./useNafahat";
import { motion } from "motion/react";
const Nafahat = () => {
  const { isLoading, isError, error, streamUrl, setStreamUrl, filterdData } =
    useNafahat();

  return (
    <section className="h-full" id="nafahat">
      <div className="container py-1.5">
        <VideoPlayer
          streamUrl={streamUrl}
          className="w-full max-h-[70vh]"
          title="اختر قارئ"
        />
        <div className="box grid gridList gap-2.5 mt-4">
          <Loading
            type="nafahat"
            isLoading={isLoading}
            isError={isError}
            error={error?.message}
          >
            <CheckDataToRender
              data={filterdData}
              renderItem={(data, index) => (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  viewport={{once:true}}
                  transition={{
                    duration: 0.2,
                    delay: typeof index === "number" ? index * 0.01 : 0,
                  }}
                  key={data.id}
                  onClick={() => {
                    scrollHandler("nafahat");
                    setStreamUrl(
                      data.videos.find((el) => el.video_type == 3)?.video_url
                    );
                  }}
                  className="bg-[#479390] p-2.5 text-center cursor-pointer rounded-md"
                >
                  <img
                    className="rounded-md w-full"
                    loading="lazy"
                    src={
                      data.videos.find((el) => el.video_type == 3)
                        ?.video_thumb_url
                    }
                    alt={data.reciter_name}
                  />
                  <h2 className="text-xl mt-2">{data.reciter_name}</h2>
                </motion.div>
              )}
            />
          </Loading>
        </div>
      </div>
    </section>
  );
};

export default Nafahat;
