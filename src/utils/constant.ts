const REACT_APP_GOOGLE_API_KEY = "AIzaSyCozcwv2G_FOis85xPAoc-zDyNdGox_-IU";

export const MOST_POPULAR_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=";

export const WATCH_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  REACT_APP_GOOGLE_API_KEY +
  "&id=";
