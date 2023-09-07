import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "89258abdd5e1c33bc03a72f7a035fabc",
    language: "ko-KR",
  },
});

export default instance;