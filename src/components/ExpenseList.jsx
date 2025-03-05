import React, { useEffect, useState } from 'react';
import ExpenseService from '../services/expenseService';
import { useNavigate } from 'react-router-dom';
import moment from 'moment'; // Or use the native formatDate function

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await ExpenseService.getAllExpenses();
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    const formatDate = (dateString) => {
        return moment(dateString).format('DD/MM/YYYY'); // Format the date
    };

    return (
        <div>
            <h2>Expense List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.category}</td>
                            <td>{expense.amount}</td>
                            <td>{formatDate(expense.date)}</td> {/* Display formatted date */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;