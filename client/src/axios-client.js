import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.LARAVEL_API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;
