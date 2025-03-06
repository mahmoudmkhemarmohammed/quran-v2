import SpecialHeading from "@components/common/SpecialHeading";
import Explore from "@components/Quran/Explore/Explore";
import Goals from "@components/Quran/Goals/Goals";
import Hero from "@components/Quran/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <SpecialHeading title="تصفح" />
      <Explore />
      <SpecialHeading title="اهدافنا"/>
      <Goals />
    </>
  );
};

export default Home;
