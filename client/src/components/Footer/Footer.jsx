import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-box">
        <div className="top">
          <div className="box">
            <h6>Categories</h6>
            <span>Clothes</span>
            <span>Electronics</span>
            <span>Furniture</span>
            <span>Miscelanneous</span>
            <span>Shoes</span>
          </div>
          <div className="box">
            <div className="box">
              <h6>Links</h6>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
              <span>Cookies</span>
            </div>
          </div>
          <div className="box text">
            <h6>About</h6>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
          <div className="box text">
            <h6>Contact</h6>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>
        </div>
        <div className="bot">
          <span>
            <h4>Oguzstore</h4>@ Copyright All Rights Reserved
          </span>
          <img
            src="https://github.com/safak/youtube2022/blob/ecommerce/client/public/img/payment.png?raw=true"
            alt="payment image"
          />
        </div>
      </div>
    </footer>
  );
}
