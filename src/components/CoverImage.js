import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/CoverImage.css';

function CoverImage() {
    const [currentImage, setCurrentImage] = useState(0);

    // Danh sách ảnh bìa
    const images = [
        '/images/anh1.jpg',
        '/images/anh2.jpg',
        '/images/anh3.jpg',
        '/images/anh4.jpg',
        '/images/anh5.jpg'
    ];

    // Chuyển đổi ảnh bìa mỗi 5 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="cover-image">
            {/* Hiển thị ảnh bìa */}
            <img
                src={images[currentImage]}
                alt="Ảnh Bìa"
                className="cover-image-img"
            />

            {/* Hiệu ứng hoa rơi */}
            <div className="falling-flowers">
                {Array.from({ length: 15 }).map((_, index) => (
                    <div key={index} className={`flower flower-${index + 1}`}></div>
                ))}
            </div>

            {/* Nội dung trên ảnh bìa */}
            <div className="cover-content">
                <h1 className="cover-title">Trung Hiếu ❤️ Phương Lan</h1>
                <p className="cover-date">08/01/2025</p>
                <p className="cover-invite">Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi</p>
            </div>

            {/* Navbar */}
            <Navbar />
        </div>
    );
}

export default CoverImage;