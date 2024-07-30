import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login_page";
import Register from "./Register";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home.jsx";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;