import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28a46aac061347c4ba1c8520dfc9d113",
  },
});