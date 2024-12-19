import React from 'react';
import '../styles/HouseInfo.css'; // Import file CSS

function HouseInfo() {
    return (
        <div className="house-info">
            {/* Nhà Trai */}
            <div className="house house-groom">
                <h4>Nhà Trai</h4>
                <div className="parent">
                    <p>
                        <span className="label">Bố:</span>
                        <strong>Lương Văn Tâm</strong>
                    </p>
                    <p>
                        <span className="label">Mẹ:</span>
                        <strong>Phạm Thị Huê</strong>
                    </p>
                </div>
                <div className="quote">
                    <em>"Gia đình là ngọn nguồn của sức mạnh và tình yêu thương."</em>
                </div>
            </div>

            {/* Nhà Gái */}
            <div className="house house-bride">
                <h4>Nhà Gái</h4>
                <div className="parent">
                    <p>
                        <span className="label">Bố:</span>
                        <strong>Lê Văn Cương</strong>
                    </p>
                    <p>
                        <span className="label">Mẹ:</span>
                        <strong>Đăng Thị Thinh</strong>
                    </p>
                </div>
                <div className="quote">
                    <em>"Tình yêu bắt đầu từ gia đình và kết thúc trong hạnh phúc."</em>
                </div>
            </div>
        </div>
    );
}

export default HouseInfo;