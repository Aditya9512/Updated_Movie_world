import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const [click, setClick] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (click > 0) {
            alert("Thank you For Register !");
            navigate("/login"); // redirect to login page after register
        }
    }, [click])

    const handleClick = () => {
        setClick(click + 1);
    }

    return (
        <>
            <h1>Register Yourself</h1>
            <div className="Container">
                <form>
                    <label>First Name :</label>
                    <input type="text" placeholder="Enter Your First Name"></input>
                    <br />
                    <label>Last Name :</label>
                    <input type="text" placeholder="Enter Your Last Name"></input>
                    <br />
                    <label>Email :</label>
                    <input type="email" placeholder="Enter Your Email Id"></input>
                    <br />
                    <label>Create Password :</label>
                    <input type="password" placeholder="Enter Your Password"></input>
                    <br />
                    <label>Repeat Password :</label>
                    <input type="password" placeholder="Enter again Password"></input>
                    <br />
                    <button type="submit" onClick={handleClick}>Register</button>

                </form>

            </div>


        </>


    )


}
export default Register;