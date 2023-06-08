import api from "./api";

export interface Experiencia {
    id?: number;
    titulo: string;
    descricao: string;
    tipo: string;
    ano_inicio: number | "";
    ano_fim: string;
}

export const createExperiencia = async (experiencia:Experiencia): Promise<Experiencia> => {
    const response = await api.post<Experiencia>("/experiencias", experiencia);
    return response.data;
}

export const getExperiencias = async (): Promise<Experiencia[]> => {
    const response = await api.get<Experiencia[]>("/experiencias");
    return response.data;
}

export const getExperienciaById = async (id: number): Promise<Experiencia> => {
    const response = await api.get<Experiencia>(`/experiencias/${id}`);
    return response.data;
}

export const getExperienciasByTipo = async (tipo: string): Promise<Experiencia[]> => {
    const response = await api.get<Experiencia[]>(`/experiencias?tipo=${tipo}`);
    return response.data;
}

export const updateExperiencia = async (experiencia: Experiencia) : Promise<Experiencia> => {
    const response = await api.put<Experiencia>(`/experiencias/${experiencia.id}`, experiencia);
    return response.data;
}

export const deleteExperiencia = async (id: number | undefined): Promise<Experiencia> => {
    const response = await api.delete<Experiencia>(`/experiencias/${id}`);
    return response.data;
}

export const createOrUpdateExperiencia = async (experiencia: Experiencia): Promise<Experiencia> => {
    if (!experiencia.id) {
        return await createExperiencia(experiencia);
    } else {
        return await updateExperiencia(experiencia);
    }
}