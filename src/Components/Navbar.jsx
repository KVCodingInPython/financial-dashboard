import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className = "dashboard"> 
                <Link to = "/dashboard"> Dashboard </Link>
            </div>
            <div className = "accounts"> 
                <Link to = "/accounts"> Accounts </Link>
            </div>
            <div className = "transactions"> 
                <Link to = "/transactions"> Transactions </Link>
            </div>
            <div className = "investments"> 
                <Link to = "/investments"> Investments </Link>
            </div>
            <div className = "budget"> 
                <Link to = "/budget"> Budget </Link>
            </div>
            <div className = "reports"> 
                <Link to = "/reports"> Reports </Link>
            </div>
            <div className = "settings"> 
                <Link to = "/settings"> Settings </Link>
            </div>
            <div className = "profile"> 
                <Link to = "/profile"> Profile </Link>
            </div>
        </nav>


    )

}

export default Navbar;