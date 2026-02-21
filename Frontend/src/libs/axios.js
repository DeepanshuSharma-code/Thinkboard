import axios from 'axios';

// const BASE_URL = import.meta.env.MODE === "development" ?  : "/api"
const api = axios.create({
    baseURL: "http://localhost:8000",
    timeout:5000,
    headers: {
        "Content-type": "application/json"
}

});

export default api;