import React from 'react';
import Navbar from './Navbar';
import HouseInfo from './HouseInfo';  // Tạo component HouseInfo
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            {/* Thêm ảnh bìa */}
            <div className="cover-image">
                <img
                    src="/images/anh6.jpg"  // Thay ảnh này bằng ảnh bìa thực tế của bạn
                    alt="Ảnh Bìa"
                    className="cover-image-img"
                />
                {/* Nội dung trên ảnh bìa */}
                <div className="cover-content">
                    <h1 className="cover-title">
                        Hiếu<span role="img" aria-label="heart">❤️</span>Lan
                    </h1>
                </div>
            </div>

            {/* Thanh điều hướng trang chủ */}
            <Navbar /> {/* Sử dụng Navbar component */}

            {/* Nội dung trang chủ */}
            <div id="invitation" className="header-content">
                <p className="invitation-text">Trân trọng kính mời</p>
                <p className="invitation-description">
                    Tới dự bữa tiệc Mừng lễ thành hôn, chung vui cùng gia đình chúng tôi.
                </p>

                <div id="house-images" className="header-images">
                    <div className="bride-groom-container">
                        <img
                            src="/images/hieu.JPG"
                            alt="Chú Rể"
                            className="bride-groom-image"
                        />
                        <p className="bride-groom-name">Trung Hiếu</p> {/* Tên chú rể */}
                    </div>
                    <div className="bride-groom-container">
                        <img
                            src="/images/lan.JPG"
                            alt="Cô Dâu"
                            className="bride-groom-image"
                        />
                        <p className="bride-groom-name">Phương Lan</p> {/* Tên cô dâu */}
                    </div>
                </div>

                {/* Component HouseInfo sẽ chứa thông tin gia đình */}
                <HouseInfo />
            </div>
        </header>
    );
}

export default Header;