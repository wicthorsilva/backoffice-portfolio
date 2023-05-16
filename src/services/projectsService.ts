import api from "./api";

export interface Project {
    id?: Number;
    link: string;
    image: string;
    title: string;
}

export const createProject = async (project: Project): Promise<Project> => {
    const response = await api.post<Project>("/projects", project);
    return response.data;
}

export const getProjects = async (): Promise<Project[]> => {
    const response = await api.get<Project[]>("/projects");
    return response.data;
}

export const updateProject = async (project: Project): Promise<Project> => {
    const response = await api.put<Project>(`/projects/${project.id}`, project);
    return response.data;
}

export const deleteProject = async (id: number | undefined): Promise<Project> => {
    const response = await api.delete<Project>(`/projects/${id}`);
    return response.data;
}

export const getProject = async (id: number): Promise<Project> => {
    const response = await api.get<Project>(`/projects/${id}`);
    return response.data;
}

export const createOrUpdateProject = async (project:Project): Promise<Project> => {
    if (!project.id) {
        return await createProject(project);
    } else {
        return await updateProject(project);
    }
}