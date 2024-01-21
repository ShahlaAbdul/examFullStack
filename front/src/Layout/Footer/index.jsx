import React from "react";
import "./style.scss";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_top">
          <div className="navigation">
            <ul>
              <li className="navigation">
                <h3>Navigation</h3>
              <li className="sell">
              <span>Sell online</span>
                <span>Sell online</span>
                <span>Sell online</span>
                <span>Sell online</span>
              </li>
              <li className="sell">
              <span>Sell online</span>
                <span>Sell online</span>
                <span>Sell online</span>
                <span>Sell online</span>
              </li>
              <li className="sell">
              <span>Sell online</span>
                <span>Sell online</span>
                <span>Sell online</span>
                <span>Sell online</span>
              </li>
              </li>
            </ul>
          </div>
          <div className="promo">
            <div className="left">
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp"
                alt=""
              />
              <p>Finding Your Shoes</p>
              <p>Promo from nuary 15 — 25, 2019</p>
            </div>
            <div className="info">
              <ul>
                <li>
                  <span>icon</span>
                  <p>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </li>
                <li>
                  <span>icon</span>
                  <span>354364575687</span>
                </li>
                <li>
                  <span>icon</span>
                  <p>emailaddress@domain.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_foot">
          <p>
            {" "}
            Copyright ©2024 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
