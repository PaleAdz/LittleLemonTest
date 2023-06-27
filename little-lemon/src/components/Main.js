import React from "react";
import "./Main.css";
import restImg from "./Images/restauranfood.jpg";
import greeksalad from "./Images/greeksalad.jpg";
import bruchetta from "./Images/bruchetta.jpg";
import lemondessert from "./Images/lemondessert.jpg";
import chefa from "./Images/chefA.jpg";
import chefb from "./Images/chefB.jpg";

function Main() {
  return (
    <main>
      <div className="main-container">
        <div className="box">
          <h1 className="lemon-title">Little Lemon</h1>
          <h2 className="london">London</h2>
          <p>
            Welcome to Little Lemon, a delightful culinary haven nestled in the
            heart of London! Prepare your taste buds for a refreshing
            citrus-infused experience that will leave you craving for more. Our
            vibrant and cozy restaurant offers a vibrant ambiance where you can
            unwind and savor a delectable array of dishes prepared with love and
            a zesty twist.
          </p>
          <button className="reserve-button">Reserve A Table</button>
        </div>

        <div className="box">
          <img className="rest-img" src={restImg} />
        </div>
      </div>

      <div className="special-container">
        <div>
          <p className="special-p">This weeks specials!</p>
          <button className="menu-button">Online Menu</button>
        </div>
      </div>

      <div className="main-spec-container">
        <div className="spec-box">
          <img className="spec-img" src={greeksalad} />
          <p className="spec-title">Greek Salad</p>
          <p className="spec-price">$12.99</p>
          <p className="spec-desc">
            Indulge in the refreshing flavours of the Mediterranean with our
            exquisite Greek Salad. Bursting with vibrant colours and wholesome
            ingredients, this classNameic dish is a celebration of freshness and
            simplicity.
          </p>
          <p className="spec-desc">Order a delivery 🛵</p>
        </div>

        <div className="spec-box">
          <img className="spec-img" src={bruchetta} />
          <p className="spec-title">Bruchetta</p>
          <p className="spec-price bru">$7.45</p>
          <p className="spec-desc">
            Savor the taste of Italy with our irresistible Bruschetta, a
            timeless classNameic that will transport you to the picturesque
            streets of Tuscany. This delectable appetizer combines simple yet
            exquisite flavors, perfect for awakening your palate.
          </p>
          <p className="spec-desc">Order a delivery 🛵</p>
        </div>

        <div className="spec-box">
          <img className="spec-img" src={lemondessert} />
          <p className="spec-title">Lemon Dessert</p>
          <p className="spec-price">$5.00</p>
          <p className="spec-desc">
            Delight your senses with our heavenly Lemon Dessert, a zesty and
            indulgent finale to your meal. This citrus-infused masterpiece is a
            tantalizing blend of sweetness and tanginess that will leave you
            with a refreshing and satisfying aftertaste.
          </p>
          <p className="spec-desc">Order a delivery 🛵</p>
        </div>
      </div>

      <h3 className="test-title">Testimonials</h3>

      <div className="test-container">
        <div className="test-box">
          <div className="profile"></div>
          <p className="stars">⭐⭐⭐⭐⭐</p>
        </div>

        <div className="test-box">
          <div className="profile"></div>
          <p className="stars">⭐⭐⭐⭐</p>
        </div>
        <div className="test-box">
          <div className="profile"></div>
          <p className="stars">⭐⭐⭐⭐</p>
        </div>
        <div className="test-box">
          <div className="profile"></div>
          <p className="stars">⭐⭐⭐⭐⭐</p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-box">
          <h1 className="lemon-title">Little Lemon</h1>
          <h2 className="london clr">London</h2>
          <p className="clr">
            Welcome to Little Lemon, a delightful culinary haven nestled in the
            heart of London! Prepare your taste buds for a refreshing
            citrus-infused experience that will leave you craving for more. Our
            vibrant and cozy restaurant offers a vibrant ambiance where you can
            unwind and savor a delectable array of dishes prepared with love and
            a zesty twist.
          </p>
        </div>
        <div className="about-box">
          <img className="chefb" src={chefb} />
          <img className="chefa" src={chefa} />
        </div>
      </div>
    </main>
  );
}

export default Main;
