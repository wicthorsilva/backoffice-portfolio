import { string } from "yup";
import api from "./api";

export interface User {
    id: number;
    email: string;
    password: string;
}

export async function getUserByEmail(email: string): Promise<User>{
    const response = await api.get(`/usuarios`, {params: {email}});
    return response.data[0];
}