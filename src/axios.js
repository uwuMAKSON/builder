import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL =
"https://builder-dfdc7-default-rtdb.firebaseio.com";

export default instance;