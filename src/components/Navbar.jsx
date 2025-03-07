import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/expense">Expenses</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/add-expense">Add Expense</Link>
                </li>
                <li>
                    <Link to="/add-user">Add User</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;