import "./App.css"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Accounts from "./pages/Accounts.jsx";
import Transactions from "./pages/Transactions.jsx";
import Investments from "./pages/Investments.jsx";
import Budget from "./pages/Budget.jsx";
import Reports from "./pages/Reports.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./Components/Navbar.jsx";

export default function MyApp () {
    return (
      <>
          <Navbar/>
            <main className="app-content">
          <Routes>
              <Route path = "/" element = {<Dashboard Name = "Kaloyan"/>}/>
              <Route path = "/dashboard" element = {<Dashboard Name = "Kaloyan"/>}/>
              <Route path = "/accounts" element = {<Accounts/>}/>
              <Route path = "/transactions" element = {<Transactions/>}/>
              <Route path = "/investments" element = {<Investments/>}/>
              <Route path = "/budget" element = {<Budget/>}/>
              <Route path = "/reports" element = {<Reports/>}/>
              <Route path = "/settings" element = {<Settings/>}/>
              <Route path = "/profile" element = {<Profile/>}/>
            </Routes>
            </main>
          
      </>
    );
}