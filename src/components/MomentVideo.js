import React from 'react';
import '../styles/MomentVideo.css'; // Đảm bảo rằng bạn đã tạo style cho video

function MomentVideo() {
    return (
        <div className="moment-video">
            <h2 className="video-title">Khoảnh Khắc Đặc Biệt</h2>
            <div className="video-container">
                <video
                    controls
                    autoPlay
                    loop
                    muted
                    className="video-player"
                >
                    <source src="/videos/hieulan.mp4" type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                </video>
            </div>
        </div>
    );
}

export default MomentVideo;
