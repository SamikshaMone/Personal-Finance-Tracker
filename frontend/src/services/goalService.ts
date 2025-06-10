import api from './api';

export const getGoals = () => api.get('/api/goals');
export const addGoal = (data: any) => api.post('/api/goals', data);
export const updateGoal = (id: string, data: any) => api.put(`/api/goals/${id}`, data);
export const deleteGoal = (id: string) => api.delete(`/api/goals/${id}`);
