import React, { useState } from 'react';
import '../styles/RSVPForm.css';

function RSVPForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attending, setAttending] = useState(false);
    const [notAttending, setNotAttending] = useState(false);
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
        <div className="rsvp-form-container" id="register"> {/* Thêm id="register" */}
            <div className="rsvp-form">
                <h2>Tham gia lễ cưới</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tên của bạn</label>
                        <input
                            type="text"
                            placeholder="Nhập tên"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email của bạn</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Chọn tham gia</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    checked={attending}
                                    onChange={() => {
                                        setAttending(true);
                                        setNotAttending(false);
                                    }}
                                />
                                Tôi sẽ tham dự
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    checked={notAttending}
                                    onChange={() => {
                                        setNotAttending(true);
                                        setAttending(false);
                                    }}
                                />
                                Tôi không thể tham dự
                            </label>
                        </div>
                    </div>

                    {notAttending && (
                        <div className="not-attending-note">
                            <p>Cảm ơn bạn đã thông báo!</p>
                        </div>
                    )}

                    <button type="submit" className="submit-btn">Gửi phản hồi</button>
                </form>
            </div>
        </div>
    );
}

export default RSVPForm;