import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { FaUserCircle, FaMicrophone } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="p-2 shadow-xl text-xl flex items-center">
      <div className="flex w-2/12 cursor-pointer">
        <RxHamburgerMenu
          size={30}
          className="mx-8"
          onClick={handleBurgerClick}
        />

        <BsYoutube fill="red" size={33} />

        <h1 className="font-medium text-2xl font-serif">YouTube</h1>
      </div>
      <div className="w-9/12 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-l-full py-1 px-3 w-6/12 ml-6/12 text-lg"
        />
        <button className="bg-gray-100 py-1 px-4 rounded-r-full border border-gray-300">
          <AiOutlineSearch size={28} />
        </button>
        <FaMicrophone size={25} fill="gray" className="ml-6" />
      </div>
      <div className="w-1/12">
        <FaUserCircle size={32} className="mr-2" />
      </div>
    </div>
  );
};

export default Header;
