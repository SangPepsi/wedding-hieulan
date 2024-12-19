import React, { useState, useEffect } from 'react';
import '../styles/Countdown.css';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isWeddingDay, setIsWeddingDay] = useState(false);

    useEffect(() => {
        const targetDate = new Date('2025-01-08T11:00:00');
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setIsWeddingDay(true);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown-container">
            <h2 className="countdown-title">
                {isWeddingDay
                    ? "Chúc mừng! Hôm nay là ngày trọng đại của hai bạn!"
                    : "Còn bao nhiêu thời gian nữa đến lễ cưới?"}
            </h2>
            {!isWeddingDay && (
                <p className="countdown-description">
                    "Ngày cưới sẽ là một hành trình mới. Hãy cùng chờ đợi khoảnh khắc đặc biệt này!"
                </p>
            )}
            <div className="countdown-blocks">
                {Object.entries(timeLeft).map(([key, value]) => (
                    <div className="time-block" key={key}>
                        <span className="time-number">{value}</span>
                        <span className="time-label">
                            {key === "days" ? "Ngày"
                                : key === "hours" ? "Giờ"
                                    : key === "minutes" ? "Phút"
                                        : "Giây"}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Countdown;
