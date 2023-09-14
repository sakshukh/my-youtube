import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
type state = {
  app: {
    isMenuOpen: Boolean;
  };
};

const Sidebar = () => {
  const isMenuOpen = useSelector((state: state) => state.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-xl p-5 m-2 w-2/12">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold my-2">Explore</h1>
      <ul>
        <li>Library</li>
        <li>History</li>
      </ul>
      <h1 className="font-bold my-2">New Thing</h1>
      <ul>
        <li>Tending</li>
        <li>Shopping</li>
        <li>Movies</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;
