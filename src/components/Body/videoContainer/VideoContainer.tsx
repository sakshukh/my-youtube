import ButtonList from "./ButtonList";
import VideoCards from "./VideoCards";
import usePopularVideos from "../../../hooks/usePopularVideos";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const data = usePopularVideos();

  return (
    <div className="flex flex-wrap flex-col w-10/12">
      <ButtonList />
      <div className="flex flex-wrap">
        {data &&
          data.map((video: any) => (
            <Link to={"/watch?v=" + video.id}>
              <VideoCards videoDetails={video} key={video.id} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default VideoContainer;
