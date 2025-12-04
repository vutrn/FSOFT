import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const getUsers = async () => {
  const response = await api.get<User[]>('/users');
  return response.data;
};

export const getUser = async (id: number) => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id: number, data: Partial<User>) => {
  const response = await api.put<User>(`/users/${id}`, data);
  return response.data;
};

export const getAlbums = async (userId: number) => {
  const response = await api.get<Album[]>(`/users/${userId}/albums`);
  return response.data;
};

export const createAlbum = async (data: { userId: number; title: string }) => {
  const response = await api.post<Album>('/albums', data);
  return response.data;
};

export const deleteAlbum = async (id: number) => {
  const response = await api.delete(`/albums/${id}`);
  return response.data;
};

export const getPhotos = async (start: number = 0, limit: number = 12, albumId?: number) => {
  let url = `/photos?_start=${start}&_limit=${limit}`;
  if (albumId) {
    url += `&albumId=${albumId}`;
  }
  const response = await api.get<Photo[]>(url);
  return response.data;
};

export default api;
