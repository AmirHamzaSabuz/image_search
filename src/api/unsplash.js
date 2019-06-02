import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID df69043574f22e74a1a67e2fa9fc4a4cac654b1cdec41a95a3902b6d4bf725f7"
  }
});
