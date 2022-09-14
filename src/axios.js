import axios from "axios";

//base url to make instaces to the move database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//instance.get('/foo-bar') ----> https://api.themovidedb.org/3/foo-bar

export default instance;
