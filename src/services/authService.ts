import api from "./api";

export interface User {
    email: string;
    password: string;
}

export const login = async (loginData: User): Promise<User> => {
    const response = await api.post<User>("/auth/login", loginData)
    return response.data;
}