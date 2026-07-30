import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
    const linkClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

    return (
        <nav className="navbar">
            <div className="dashboard">
                <Link to="/dashboard" className={linkClass}>Dashboard</Link>
            </div>
            <div className="accounts">
                <Link to="/accounts" className={linkClass}>Accounts</Link>
            </div>
            <div className="transactions">
                <Link to="/transactions" className={linkClass}>Transactions</Link>
            </div>
            <div className="optimisation">
                <Link to="/optimisation" className={linkClass}>Cost Optimisation</Link>
            </div>
            <div className="budget">
                <Link to="/budget" className={linkClass}>Budget</Link>
            </div>
            <div className="reports">
                <Link to="/reports" className={linkClass}>Reports</Link>
            </div>
            <div className="settings">
                <Link to="/settings" className={linkClass}>Settings</Link>
            </div>
            <div className="profile">
                <Link to="/profile" className={linkClass}>Profile</Link>
            </div>
        </nav>
    );
};

export default Navbar;