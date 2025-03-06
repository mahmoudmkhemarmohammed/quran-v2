import Logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-2.5 sticky top-0 bg-linear-to-r to-[#4b0d45ee] from-[#2b5956] w-full z-50">
      <div className="container h-full flex justify-between items-center">
        <Link
          to={"/"}
          className="logo md:w-24 w-16 flex justify-between items-center"
        >
          <h2 className="md:text-3xl text-xl">قرآنك</h2>
          <img className="w-16" src={Logo} alt="logo" loading="eager" />
        </Link>

        <Link className="text-2xl font-bold max-sm:text-xl" to={"/about"}>معلومات</Link>
      </div>
    </header>
  );
};

export default Header;
