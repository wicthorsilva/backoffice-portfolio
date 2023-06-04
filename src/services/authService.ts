import api from "./api";

export interface User {
    email: string;
    password: string;
}

export const login = async (User: User): Promise<User> => {
    const response = await api.post<User>("/auth/login", User)
    return response.data;
}