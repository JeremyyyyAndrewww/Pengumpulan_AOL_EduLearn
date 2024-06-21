import React from 'react';
import './Promo.css';
import ProIm from './promo.png';

function Promo() {
    return (
        <div className="promoContainer">
            <div className="promoHeading">
                <h1>Promo</h1>
                <p>Enjoy our special promotion!</p>
            </div>
            <div className="promo promo1">
                <img src={ProIm} alt="PromoImg" />
                <div className="promoText">
                    <h2>Exclusive Offer</h2>
                    <p>Get the best deals on our products now!</p>
                </div>
            </div>
        </div>
    );
}

export default Promo;
