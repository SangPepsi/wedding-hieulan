import React, { useRef, useState, useEffect } from "react";
import "../styles/MusicPlayer.css";

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const tryPlay = async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (err) {
                console.warn("Autoplay bị chặn. Người dùng cần bấm nút phát.", err);
            }
        };
        tryPlay();
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
            console.log("Nhạc đã dừng.");
        } else {
            audioRef.current.play()
                .then(() => console.log("Nhạc bắt đầu phát."))
                .catch((err) => console.error("Không thể phát nhạc:", err));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <button onClick={togglePlay} className={isPlaying ? "pause-button" : "play-button"}>
                <img
                    src={isPlaying ? "/images/pause-icon.png" : "/images/music-icon.png"}
                    alt={isPlaying ? "Pause" : "Play"}
                    className="music-icon"
                />
            </button>
            <audio ref={audioRef}>
                <source src="/music/NguoiToiYeu.mp3" type="audio/mpeg" />
                Trình duyệt của bạn không hỗ trợ phát nhạc.
            </audio>
        </div>
    );
};

export default MusicPlayer;
