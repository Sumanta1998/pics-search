import axios from "axios";

export default axios.create({
  baseURL: "https://pixabay.com/api",
  headers: {
    key: "19505851-f21de190e43277bfdf6f5b1f1",
  },
});
