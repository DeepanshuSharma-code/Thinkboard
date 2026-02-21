import axios from 'axios';

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:8000" : "/api"
const api = axios.create({
    baseURL: BASE_URL,
    timeout:5000,
    headers: {
        "Content-type": "application/json"
}

});

export default api;