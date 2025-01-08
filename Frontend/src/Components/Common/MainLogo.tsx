import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const MainLogo = () => {
  return (
    <Link to="/" className="flex items-end">
      <img src={logo} className="w-[40px] md:w-[50px]" />
      <h1 className="text-xl mb-2 font-semibold text-black dark:text-white">
        ailyDash
      </h1>
    </Link>
  );
};

export default MainLogo;
