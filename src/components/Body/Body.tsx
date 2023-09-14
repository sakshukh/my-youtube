import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../../redux/appSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className="flex w-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
