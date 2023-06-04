import axios from "axios";

declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_API_URL: string;
    };
  }
}

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: "https://sitepessoal-api.onrender.com/api",
});

export default api;
