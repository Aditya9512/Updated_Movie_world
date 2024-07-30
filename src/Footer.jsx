import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2024 Movie World. All rights reserved.</p>
                <ul className="social-links">
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook-f">Facebook</i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter">Twiiter</i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram">Instagram</i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;