import axios from "axios";

declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_API_URL: string;
    };
  }
}

const apiUrl = "https://sitepessoal-api.onrender.com/api/";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
