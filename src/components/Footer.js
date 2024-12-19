import React from 'react';
import '../styles/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} SANGLV</p>
            </div>
        </footer>
    );
}

export default Footer;