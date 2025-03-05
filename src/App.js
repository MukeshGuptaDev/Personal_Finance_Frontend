import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ExpenseList />} />
                <Route path="/add-expense" element={<ExpenseForm />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/add-user" element={<UserForm />} />
            </Routes>
        </Router>
    );
};

export default App;