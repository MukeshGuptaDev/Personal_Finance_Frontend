import api from './api';

const UserService = {
    getAllUsers: () => api.get('/users'),
    createUser: (user) => api.post('/users', user),
    deleteUser: (id) => api.delete(`/users/${id}`),
};

export default UserService;