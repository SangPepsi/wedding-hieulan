// src/App.js
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';
import MomentVideo from './components/MomentVideo';
import GiftBox from './components/GiftBox';

function App() {
    return (
        <div className="App">
            <Header />
            <Countdown />
            <Gallery />
            <MomentVideo />
            <RSVPForm />
            <GiftBox />
            <Footer />
        </div>
    );
}

export default App;
