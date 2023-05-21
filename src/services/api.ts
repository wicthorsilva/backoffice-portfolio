import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonserve-portfoliobackoffice.onrender.com',
});

export default api;