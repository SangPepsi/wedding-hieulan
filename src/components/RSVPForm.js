import React, { useState } from 'react';
import '../styles/RSVPForm.css';

function RSVPForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attending, setAttending] = useState(false);
    const [notAttending, setNotAttending] = useState(false); // Thêm state cho "Không tham gia"
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email) {
            setError('Vui lòng nhập tên và email!');
            return;
        }

        setError('');
        let response = attending
            ? `Cảm ơn ${name} đã phản hồi và xác nhận tham gia lễ cưới!`
            : notAttending
                ? `Cảm ơn ${name} đã phản hồi và không thể tham gia lễ cưới.`
                : `Cảm ơn ${name} đã phản hồi!`;
        alert(response);
    };

    return (
        <div className="rsvp-form">
            <h2>Tham gia lễ cưới</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Tên của bạn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={attending}
                        onChange={() => {
                            setAttending(!attending);
                            setNotAttending(false); // Hủy bỏ "Không tham gia" khi chọn "Tham gia"
                        }}
                    />
                    Tôi sẽ tham dự
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={notAttending}
                        onChange={() => {
                            setNotAttending(!notAttending);
                            setAttending(false); // Hủy bỏ "Tham gia" khi chọn "Không tham gia"
                        }}
                    />
                    Tôi không thể tham dự
                </label>

                {notAttending && (
                    <div className="not-attending-note">
                        <p>Cám ơn bạn đã thông báo !! </p>
                    </div>
                )}

                <button type="submit">Gửi phản hồi</button>
            </form>
        </div>
    );
}

export default RSVPForm;