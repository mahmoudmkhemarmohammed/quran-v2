import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { SiAxios } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import SpecialHeading from "@components/common/SpecialHeading";
const AboutUs = () => {
  return (
    <div className="container">
      <SpecialHeading title="عن المطور" />
      <h2 className="text-xl leading-loose pl-2">
        مرحبا انا
        <span className="text-[#00aaff]"> محمود مخيمر</span>, المطور الشغوف وراء
        هذا الموقع. مع اهتمامي الشديد بالتفاصيل وحب لصياغة تجارب رقمية سلسة،
        شرعت في إنشاء موقع كامل للقرآن الكريم ليكون مرجع للجميع
      </h2>
      <SpecialHeading title="اطر العمل والتقنيات المستخدمه" />
      <h2 className="text-xl leading-loose mb-5 pl-2">
        في تطوير هذا الموقع، قمت بتسخير قوة React والتقنيات التالية لإنشاء موقع
        ويب حديث،
      </h2>
      <div className="flex gap-3 flex-wrap *:flex *:flex-col *:gap-2 *:items-center *:w-40 *:grow *:bg-linear-to-r *:from-[#136762] *:to-[#19807b] *:p-4 *:justify-center *:rounded-md">
        <div>
          <FaReact className="text-5xl text-[#00aaff]" />
          <h3>React</h3>
        </div>

        <div>
          <SiTypescript className="text-5xl text-[#006eff]" />
          <h3>Type Script</h3>
        </div>

        <div>
          <RiTailwindCssFill className="text-5xl text-[#00aaff]" />
          <h3>Tailwind css</h3>
        </div>

        <div>
          <SiRedux className="text-5xl text-[#00aaff]" />
          <h3>Redux Toolkit</h3>
        </div>

        <div>
          <GrStorage className="text-5xl text-[#ff9500]" />
          <h3>Redux Persist</h3>
        </div>

        <div>
          <SiAxios className="text-5xl text-[#ff5500]" />
          <h3>Axios</h3>
        </div>

        <div>
          <TbBrandFramerMotion className="text-5xl text-[#b3ff00]" />
          <h3>Motion</h3>
        </div>
      </div>
      <SpecialHeading title="هام" />
      <h2 className="text-xl leading-loose pl-2">
        يعد موقع قرأنك صدقهة جارية علي روح اخي فأرجوا ان تدعوا له بالرحمه
        والمغفره والان استمتع بتصفح الموقع وسماع القرأن بصوت الشيخ المفضل لديك
      </h2>
    </div>
  );
};

export default AboutUs;
