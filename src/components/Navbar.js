import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [active, setActive] = useState(false);

    // Hàm để mở/đóng menu khi mobile
    const toggleMenu = () => {
        setActive(!active);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo hoặc tên website */}
                <div className="navbar-logo">
                    {/* Logo có thể thêm tại đây */}
                </div>

                {/* Thanh điều hướng */}
                <ul className={`navbar-links ${active ? 'active' : ''}`}>
                    <li className="navbar-link"><a href="#invitation">Lời Mời</a></li>
                    <li className="navbar-link"><a href="#register">Đăng ký tham gia</a></li>
                </ul>

                {/* Icon menu cho mobile */}
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <div className="navbar-toggle-icon"></div>
                    <div className="navbar-toggle-icon"></div>
                    <div className="navbar-toggle-icon"></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;