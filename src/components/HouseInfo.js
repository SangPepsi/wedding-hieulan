import React from 'react';
import '../styles/HouseInfo.css';  // Import file CSS nếu bạn có

function HouseInfo() {
    return (
        <div className="house-info">
            <div className="house">
                <h4>Nhà Trai</h4>
                <p>Bố: <strong>Lương Văn Tâm</strong></p>
                <p>Mẹ: <strong>Phạm Thị Huê</strong></p>
                <p className="address">Địa chỉ: Thôn Tất Viên, xã Thủ Sỹ, huyện Tiên Lữ, tỉnh Hưng Yên</p>
            </div>

            <div className="house">
                <h4>Nhà Gái</h4>
                <p>Bố: <strong>Lê Văn Cương</strong></p>
                <p>Mẹ: <strong>Đăng Thị Thịnh</strong></p>
                <p className="address">Địa chỉ: Đội 15 - xã Liên Phương, Tp Hưng Yên</p>
            </div>
        </div>
    );
}

export default HouseInfo;