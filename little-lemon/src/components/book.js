import React from "react";
import "./book.css";
import Rest from "./Images/rest.jpg";
import Formadd from "./Formadd";
import { Form } from "react-router-dom";

function book() {
  return (
    <div className="container">
      <div className="box-container">
        <div className="top-container">
          <div className="top-box">
            <h1 className="title">Little Lemon</h1>
            <h2 className="sub-title">Table Reservation</h2>
            <p className="description">
              Experience culinary delights in a vibrant atmosphere. Fresh,
              locally sourced ingredients crafted into innovative dishes.
              Intimate booths and comfortable seating options available.
              Handcrafted cocktails, impressive wine list, and non-alcoholic
              beverages. Make your reservation in advance for a seamless dining
              experience. Book Below. Let us know your preferences, and we'll
              accommodate them. Little Lemon awaits, offering exceptional
              service and lemony zest!
            </p>
          </div>

          <div className="top-box">
            <img className="rest-pic" src={Rest} />
          </div>
        </div>
      </div>

      <div className="box-container">
        <h2 className="book-now">Book Yours Now !</h2>
        <form className="form-container">
          <label for="f-name">First Name: </label>
          <input type="text" id="f-name" name="f-name" required />
          <br />

          <label for="l-name">Last Name: </label>
          <input type="text" id="l-name" name="l-name" required />
          <br />

          <label for="contact">Contact Number: </label>
          <input type="tel" id="contact" name="contact" required />
          <br />

          <label for="date">Date: </label>
          <input type="date" id="date" name="date" required />
          <br />

          <label for="time">Time: </label>
          <input
            type="time"
            id="time"
            name="time"
            min="08:00"
            max="00:00"
            required
          />
          <small> (8:00am - 12:00 midnight)</small>
          <br />

          <Formadd />

          <br />

          <label for="request">Special Requests (Optional): </label>
          <textarea
            id="request"
            name="request"
            rows="5"
            cols="33"
            placeholder="Enter special request here..."
          ></textarea>
          <br />

          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default book;
