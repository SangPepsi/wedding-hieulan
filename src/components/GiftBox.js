import React, { useState } from 'react';
import '../styles/GiftBox.css';

function GiftBox() {
    const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở hộp quà
    const [isImageZoomed, setIsImageZoomed] = useState(false); // Trạng thái phóng to ảnh QR
    const [zoomedImage, setZoomedImage] = useState(null); // Lưu ảnh QR cần phóng to

    // Toggle mở/đóng hộp quà
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Hiển thị ảnh QR phóng to
    const toggleImageZoom = (image) => {
        setZoomedImage(image);
        setIsImageZoomed(true);
    };

    // Đóng ảnh QR phóng to
    const closeImageZoom = () => {
        setIsImageZoomed(false);
        setZoomedImage(null);
    };

    return (
        <div className="gift-box-container">
            {/* Icon Hòm nhận quà */}
            <div className="gift-box-icon" onClick={toggleModal}>
                🎁 {/* Icon quà tặng */}
            </div>

            {/* Modal nội dung hộp quà */}
            {isModalOpen && (
                <div className="gift-modal">
                    <div className="gift-modal-content">
                        <button className="close-button" onClick={toggleModal}>✖</button>
                        <h2>Hòm Nhận Quà Chúc Mừng</h2>
                        <p>❤️ Cảm ơn sự hiện diện của quý vị ❤️</p>
                        <div className="gift-details">
                            <p><strong>📍 Tên cô dâu & chú rể:</strong> Trung Hiếu & Phương Lan</p>
                            <p><strong>📅 Ngày tổ chức:</strong> 25 tháng 01 năm 2024</p>
                            <p><strong>💌 Thông tin tài khoản ngân hàng:</strong></p>
                            <div className="qr-codes">
                                {/* QR Code Nhà Gái */}
                                <div className="qr-code" onClick={() => toggleImageZoom('/images/qrLan.png')}>
                                    <img
                                        src="/images/qrLan.png"
                                        alt="QR Nhà Gái"
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <p className="qr-title">QR Nhà Gái - Phương Lan</p>
                                </div>

                                {/* QR Code Nhà Trai */}
                                <div className="qr-code" onClick={() => toggleImageZoom('/images/qrHieu.png')}>
                                    <img
                                        src="/images/qrHieu.png"
                                        alt="QR Nhà Trai"
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <p className="qr-title">QR Nhà Trai - Trung Hiếu</p>
                                </div>
                            </div>
                        </div>
                        <p>🎉 Lời chúc từ trái tim của quý vị là món quà quý giá nhất với chúng tôi.</p>
                    </div>
                </div>
            )}

            {/* Modal hiển thị ảnh QR phóng to (trước cửa sổ hộp quà) */}
            {isImageZoomed && (
                <div className="image-modal">
                    <button className="close-button-qr" onClick={closeImageZoom}>✖</button>
                    <img
                        src={zoomedImage}
                        alt="QR phóng to"
                        className="image-modal-content"
                    />
                </div>
            )}
        </div>
    );
}

export default GiftBox;
