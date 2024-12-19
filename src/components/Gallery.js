import React, { useState, useCallback, useMemo } from 'react';
import '../styles/Gallery.css';

function Gallery() {
    const images = useMemo(() => [
        '/images/anh1.JPG',
        '/images/anh3.JPG',
        '/images/anh9.JPG',
        '/images/anh10.JPG',
        '/images/anh11.JPG',
        '/images/anh7.JPG',
        '/images/anh12.JPG',
        '/images/anh2.JPG',
    ], []);

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = useCallback((image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const goToPrevious = useCallback(() => {
        const newIndex = (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    }, [currentIndex, images]);

    const goToNext = useCallback(() => {
        const newIndex = (currentIndex === images.length - 1 ? 0 : currentIndex + 1);
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    }, [currentIndex, images]);

    return (
        <div className="gallery">
            <h2 className="gallery-title">Bộ Sưu Tập Ảnh</h2>
            <p className="gallery-description">Khám phá những khoảnh khắc đáng nhớ qua từng bức ảnh!</p>
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
                        <div className="grid-overlay">Xem ảnh</div>
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
                            <button onClick={goToPrevious}>← Trước</button>
                            <button onClick={goToNext}>Tiếp →</button>
                        </div>
                        <button className="close-button" onClick={closeModal}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;