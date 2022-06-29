import axios from "axios";

const KEY = "AIzaSyBbQ_FkVK_wprKrY78MGG4IhUl3jzm4B7w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY },
});
