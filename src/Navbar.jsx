import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <ol>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Home</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>Login</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); navigate("/register"); }}>Register</a></li>
                </ol>
            </nav>
        </>
    )
}

export default Navbar;