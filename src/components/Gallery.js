import React, { useState, useCallback, useMemo } from 'react';
import '../styles/Gallery.css';

function Gallery() {
    // Sử dụng useMemo để ghi nhớ mảng images
    const images = useMemo(() => [
        '/images/anh1.JPG',
        '/images/anh3.JPG',
        '/images/anh9.JPG',
        '/images/anh10.JPG',
        '/images/anh11.JPG',
        '/images/anh7.JPG',
        '/images/anh12.JPG',
        '/images/anh2.JPG',
    ], []);  // Mảng phụ thuộc rỗng, mảng này chỉ được tạo lại khi component render lần đầu

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // Sử dụng useCallback để "ghi nhớ" hàm goToPrevious
    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setSelectedImage(images[currentIndex === 0 ? images.length - 1 : currentIndex - 1]);
    }, [currentIndex, images]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setSelectedImage(images[currentIndex === images.length - 1 ? 0 : currentIndex + 1]);
    }, [currentIndex, images]);

    return (
        <div className="gallery">
            <h2 className="gallery-title">Ảnh Cưới</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        className="grid-item"
                        key={index}
                        onClick={() => openModal(image, index)}
                    >
                        <img
                            src={image}
                            alt={`Ảnh ${index + 1}`}
                            className="grid-image"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Xem ảnh lớn"
                            className="modal-image"
                        />
                        <div className="navigation-buttons">
                            <button onClick={goToPrevious}>←</button>
                            <button onClick={goToNext}>→</button>
                        </div>
                        <button className="close-button" onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
