import React from 'react';
import CoverImage from './CoverImage';
import BrideAndGroomStory from './BrideAndGroomStory';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <CoverImage /> {/* Gọi ảnh bìa */}
            <BrideAndGroomStory /> {/* Gọi câu chuyện cô dâu chú rể */}
        </header>
    );
}

export default Header;