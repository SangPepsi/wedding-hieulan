import React from 'react';
import HouseInfo from './HouseInfo'; // Tạo component HouseInfo
import '../styles/BrideAndGroomStory.css';

function BrideAndGroomStory() {
    return (
        <div id="OurStory" className="header-content">
            <div className="falling-flowers"></div>
            {/* Hiệu ứng hoa rơi */}

            <div id="story-container">
                {/* Ảnh chú rể */}
                <div className="bride-groom-container left">
                    <img
                        src="/images/hieu.JPG"
                        alt="Chú Rể"
                        className="bride-groom-image"
                    />
                    <p className="bride-groom-name">Trung Hiếu</p>
                </div>

                {/* Câu chuyện tình yêu */}
                <div className="love-story-section center">
                    <p className="story-content">
                        Hiếu và Lan gặp nhau lần đầu trong một buổi tiệc nhỏ của những người bạn chung.
                        Từ ánh mắt đầu tiên, họ đã cảm nhận được sự đặc biệt từ đối phương. Sau những buổi hẹn hò
                        và những cuộc trò chuyện dài, tình yêu của họ nảy nở và lớn lên từng ngày.
                    </p>
                    <p className="story-content">
                        Từ những khoảnh khắc vui vẻ cùng nhau, đến những khó khăn trong cuộc sống,
                        Hiếu và Lan luôn là chỗ dựa vững chắc cho nhau. Họ tin rằng, tình yêu chân thành và sự
                        đồng cảm đã đưa họ đến ngày hôm nay - ngày trọng đại trong cuộc đời của cả hai.
                    </p>
                </div>

                {/* Ảnh cô dâu */}
                <div className="bride-groom-container right">
                    <img
                        src="/images/lan.JPG"
                        alt="Cô Dâu"
                        className="bride-groom-image"
                    />
                    <p className="bride-groom-name">Phương Lan</p>
                </div>
            </div>

            <h2 className="story-title">Và.. Ngày ấy đã tới</h2>
            <div id="invitation" className="invitation-details">
                <p className="invitation-text">Trân trọng kính mời!</p>
                <p className="invitation-description">
                    Tới dự bữa tiệc mừng lễ thành hôn, chung vui cùng gia đình chúng tôi.
                </p>
                <div className="event-date">
                    <p className="date-gregorian">Thứ Tư, ngày 08 tháng 01 năm 2025</p>
                    <p className="date-lunar">(Tức ngày 09 tháng 12 năm 2024)</p>
                </div>
                <p className="invitation-location-title">Tại: TƯ GIA NHÀ TRAI</p>
                <p className="invitation-description">
                    Đình Làng Thôn Tất Viên - Xã Thủ Sỹ - Huyện Tiên Lữ - Tỉnh Hưng Yên
                </p>
            </div>
            {/* Component HouseInfo */}
            <HouseInfo />
        </div>
    );
}

export default BrideAndGroomStory;