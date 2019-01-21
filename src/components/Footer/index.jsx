import React from 'react';
import './style.scss';

const Footer = () => (
  <footer>
    <div className="container">
      <ul className="menu">
        <li><a href="/">ABOUT CASINO</a></li>
        <li>|</li>
        <li><a href="/">TERMS AND CONDITIONS</a></li>
        <li>|</li>
        <li><a href="/">RESPONSIBLE GAMING</a></li>
        <li>|</li>
        <li><a href="/">CONTACT US</a></li>
      </ul>
      <div className="gradientBorder" />
      <ul className="payments">
        <li>
          <a href="/">
            <img src="/assets/img/payments/mastercard.png" alt="mastercard-logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/assets/img/payments/yandex.png" alt="mastercard-logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/assets/img/payments/visa.png" alt="mastercard-logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/assets/img/payments/liqpay.png" alt="mastercard-logo" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="/assets/img/payments/qiwi.png" alt="mastercard-logo" />
          </a>
        </li>
      </ul>
      <div className="gradientBorder" />
      <div className="rights">
        © 2015 . All rights reserved
      </div>
    </div>
  </footer>
);

export default Footer;
