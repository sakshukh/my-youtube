type propType = {
  videoDetails: any;
};

const VideoCards = ({ videoDetails }: propType) => {
  const { snippet, statistics } = videoDetails;
  const { title, thumbnails, channelTitles } = snippet;

  return (
    <div className="rounded-lg m-2 p-2 flex flex-col w-[23rem] flex-wrap overflow-hidden text-ellipsis">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg w-[23rem]"
      />
      <h3 className="font-bold my-2">{title}</h3>
      <p>{channelTitles}</p>
      <p>{statistics.viewCount}</p>
    </div>
  );
};

export default VideoCards;
