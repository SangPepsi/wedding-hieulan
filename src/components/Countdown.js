import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isWeddingDay, setIsWeddingDay] = useState(false);

    // Tạo số với 2 chữ số (VD: 01, 02, 03)
    const zeroPadding = (num) => (num < 10 ? `0${num}` : num);

    useEffect(() => {
        const targetDate = new Date('2025-01-08T11:00:00'); // Đặt ngày lễ cưới
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setIsWeddingDay(true);  // Đánh dấu là ngày cưới
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({
                    days: zeroPadding(days),
                    hours: zeroPadding(hours),
                    minutes: zeroPadding(minutes),
                    seconds: zeroPadding(seconds),
                });
            }
        }, 1000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <div className="countdown">
            <h2>{isWeddingDay ? "Chúc mừng ngày cưới!" : "Thời gian đến lễ cưới"}</h2>
            <div className="countdown-timer">
                <div className="time-unit">
                    <span className="time-number">{timeLeft.days}</span>
                    <span className="time-label">Ngày</span>
                </div>
                <div className="time-unit">
                    <span className="time-number">{timeLeft.hours}</span>
                    <span className="time-label">Giờ</span>
                </div>
                <div className="time-unit">
                    <span className="time-number">{timeLeft.minutes}</span>
                    <span className="time-label">Phút</span>
                </div>
                <div className="time-unit">
                    <span className="time-number">{timeLeft.seconds}</span>
                    <span className="time-label">Giây</span>
                </div>
            </div>
        </div>
    );
}

export default Countdown;