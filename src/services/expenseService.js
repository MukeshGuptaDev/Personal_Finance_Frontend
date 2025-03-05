import api from './api';

const ExpenseService = {
    getAllExpenses: () => api.get('/expenses'),
    createExpense: (expense) => api.post('/expenses', expense),
    deleteExpense: (id) => api.delete(`/expenses/${id}`),
};

export default ExpenseService;