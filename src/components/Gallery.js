import React, { useState } from 'react';
import '../styles/Gallery.css';

function Gallery() {
    const images = [
        '/images/anh1.JPG',
        '/images/anh3.JPG',
        '/images/anh4.JPG',
    ];

    const [currentIndex, setCurrentIndex] = useState(null);

    const openModal = (index) => {
        setCurrentIndex(index);
    };

    const closeModal = (e) => {
        if (e.target.classList.contains('modal')) {
            setCurrentIndex(null);
        }
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="gallery">
            <h2 className="gallery-title">Thư viện ảnh</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        className="grid-item"
                        key={index}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image}
                            alt={`Ảnh ${index + 1}`}
                            className="grid-image"
                        />
                    </div>
                ))}
            </div>

            {currentIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img
                            src={images[currentIndex]}
                            alt="Xem ảnh lớn"
                            className="modal-image"
                        />
                        <div className="navigation-buttons">
                            <button onClick={goToPrevious}>←</button>
                            <button onClick={goToNext}>→</button>
                        </div>
                        <button className="close-button" onClick={() => setCurrentIndex(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;