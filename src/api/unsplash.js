import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID xPx1UtoEoEk-GqXScVR2Zvn-OWNB5fBTcpU1tk8735E",
  },
});
