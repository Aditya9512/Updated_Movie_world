import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [login, setLogin] = useState(0);
    const navigate = useNavigate();
    

    useEffect(() => {
        if (login > 0) {
            alert("Thank you Submitted!!");
            navigate("/"); // redirect to home page after login
        }
    }, [login])

    const handleSubmit = () => {
        setLogin(login + 1);
    }
    const handleClick = () => {
        navigate("/register");
    }

    return (
        <>
            <h1>Login Page</h1>
            <form className="lgn">
                <label>UserName:</label>
                <input type="text" placeholder="Enter the E-mail"></input>
                <br />
                <label>Password:</label>
                <input type="password" placeholder="Enter the Password"></input>
                <br />
                <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
                <p><a href="#" onClick={(e) => { e.preventDefault(); handleClick(); }}>First Time have you been visting? No worries Create account!</a></p>
            </form>

        </>
    )


}

export default Login;