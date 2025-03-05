import React, { useState, useEffect } from 'react';
import ExpenseService from '../services/expenseService';
import UserService from '../services/userService'; // Import UserService
import { useNavigate } from 'react-router-dom';

const ExpenseForm = () => {
    const [expense, setExpense] = useState({ category: '', amount: 0, date: '', userId: '' });
    const [users, setUsers] = useState([]); // State to store the list of users
    const navigate = useNavigate();

    // Fetch the list of users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await UserService.getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense({ ...expense, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // No need to format the date, as it's already in YYYY-MM-DD format
            const response = await ExpenseService.createExpense(expense);
            console.log('Expense created:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Error saving expense:', error);
        }
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={expense.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={expense.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={expense.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>User:</label>
                    <select
                        name="userId"
                        value={expense.userId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a user</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default ExpenseForm;