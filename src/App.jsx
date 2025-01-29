import React, { useState, useEffect } from "react";
import VendorDetails from "./components/VendorDetails";
import InvoiceDetails from "./components/InvoiceDetails";
import ExpenseDetails from "./components/ExpenseDetails";
import { getSession, clearSession } from "./utils/localStorageHelpers";
import LoginForm from "./components/LoginForm";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const session = getSession();
        if (session) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        clearSession();
        setIsAuthenticated(false);
    };

    return (
        <div>
            {isAuthenticated ? (
                <div className="container">
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                    <h2>Create New Invoice</h2>
                    <VendorDetails />
                    <InvoiceDetails />
                    <ExpenseDetails />
                </div>
            ) : (
                <LoginForm onLogin={() => setIsAuthenticated(true)} />
            )}
        </div>
    );
};

export default App;
