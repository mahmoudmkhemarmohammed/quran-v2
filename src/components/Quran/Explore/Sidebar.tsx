import { useState } from "react";
import { CgMoreO } from "react-icons/cg";
import { RiFolderVideoFill } from "react-icons/ri";
import { MdLiveTv } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { FaWpexplorer } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import LinkItems from "./LinkItems";
import img from "@assets/images/Free-Quran-Background.jpg"
const Sidebar = () => {
  const [height, setHeight] = useState(false);
  const extendHeight = () => {
    setHeight(!height);
  };
  return (
    <div
      className={`w-[300px] h-[760px] bg-[#115a56] p-3 rounded max-sm:fixed max-sm:z-50 max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:bg-linear-to-r from-[#19827d] to-[#4b0d45] max-sm:shadow-2xl duration-300 ${
        height ? "max-sm:h-fit" : "max-sm:h-[70px]"
      }`}
    >
      <div className="flex flex-col flex-wrap max-sm:justify-between h-full gap-1.5 max-sm:flex-row max-sm:h-fit">
        <LinkItems to="/">
          الرئيسة <IoIosHome />
        </LinkItems>
        <LinkItems to="/wishlist">
          المفضلة <MdFavorite className="hover:text-[#ff004c]" />
        </LinkItems>
        <LinkItems to="/live">
          البث المباشر <MdLiveTv />
        </LinkItems>
        <LinkItems to="/" onClick={extendHeight} display="hidden max-sm:flex">
          المزيد <CgMoreO />
        </LinkItems>
        <LinkItems to="/mushaf">
          تصفح القرأن <FaWpexplorer />
        </LinkItems>
        <LinkItems to="/nafahat">
          نفحات إيمانية <RiFolderVideoFill />
        </LinkItems>
        <LinkItems to="/tafsir">
          تفسير القرأن <FaWpexplorer />
        </LinkItems>
        <LinkItems to="/radios">
          الإذاعة <FaRadio />
        </LinkItems>
        <img src={img} alt="quran-background" loading="eager" className="rounded-md grow max-sm:hidden"/>
      </div>
    </div>
  );
};

export default Sidebar;
