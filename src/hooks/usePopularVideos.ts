const { useState, useEffect } = require("react");
const { MOST_POPULAR_VIDEOS } = require("../utils/constant");

const usePopularVideos = () => {
  const [popluarVideos, setPopularVideos] = useState();

  const getPopularVideos = async () => {
    const json = await fetch(
      MOST_POPULAR_VIDEOS + process.env.REACT_APP_GOOGLE_API_KEY
    );
    const data = await json.json();

    setPopularVideos(data.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return popluarVideos;
};

export default usePopularVideos;
