import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-2 m-2">
      <iframe
        width="1000"
        height="550"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <video className="w-100">
        <source src={videoAPI} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default WatchVideo;
