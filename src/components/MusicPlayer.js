import React, { useRef, useState, useEffect } from "react"; // Giữ useEffect
import "../styles/MusicPlayer.css"; // Thêm CSS vào đây

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Ví dụ sử dụng useEffect
    useEffect(() => {
        const tryPlay = async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
                console.log("Nhạc bắt đầu phát.");
            } catch (err) {
                console.warn("Autoplay bị chặn. Người dùng cần bấm nút để phát nhạc.", err);
            }
        };
        tryPlay();
    }, []); // Chạy khi component được render lần đầu tiên

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            console.log("Nhạc đã dừng.");
        } else {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    console.log("Nhạc bắt đầu phát.");
                })
                .catch((err) => console.error("Không thể phát nhạc:", err));
        }
    };

    return (
        <div className="music-player">
            <button className="play-button" onClick={togglePlay}>
                <img
                    src={isPlaying ? "/images/pause-icon.png" : "/images/play-icon.png"}
                    alt={isPlaying ? "Pause icon" : "Play icon"}
                    className="play-icon"
                />
            </button>
            <div className="play-text">Phát nhạc</div>
            <audio ref={audioRef} autoPlay muted={false}>
                <source src="/music/NguoiToiYeu.mp3" type="audio/mpeg" />
                Trình duyệt của bạn không hỗ trợ phát nhạc.
            </audio>
        </div>
    );
};

export default MusicPlayer;
