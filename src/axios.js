import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-24fe3.cloudfunctions.net/api",
});

export default instance;

// "http://localhost:5001/clone-24fe3/us-central1/api"
