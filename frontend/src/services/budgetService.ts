import api from './api';

export const getBudgets = () => api.get('/api/budgets');
export const addBudget = (data: any) => api.post('/api/budgets', data);
export const updateBudget = (id: string, data: any) => api.put(`/api/budgets/${id}`, data);
export const deleteBudget = (id: string) => api.delete(`/api/budgets/${id}`);
