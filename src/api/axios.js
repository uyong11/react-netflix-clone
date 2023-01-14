import axios from "axios";

const instance =axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "c9369cc1863607607840c2c192eba5ba",
        languqge: "ko-KR",
    },
});

export default instance;