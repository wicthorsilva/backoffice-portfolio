import api from "./api";

export interface LoginData {
    email: string;
    password: string;
}

export const login = async (loginData: LoginData): Promise<LoginData> => {
    const response = await api.post<LoginData>("/auth/login", loginData)
    return response.data;
}