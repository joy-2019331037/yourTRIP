import React, { useState, useContext } from "react";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

import "./booking.css";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews, title, photo } = tour;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    tourPhoto: photo,
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //sending data to server
  const handleClick = async (e) => {
    e.preventDefault();

    console.log(booking);
    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in to book any tour");
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      console.log(booking);
      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your tour is booked",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          $ {price} <span>/per person</span>
        </h3>

        <span className="tour__rating d-flex align-items-center">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* __________________booking form starts________________ */}
      <div className="booking__form">
        <h5>Information</h5>

        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              min={minDate()}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              min="1"
              onChange={handleChange}
              required
            />
          </FormGroup>
        </Form>
      </div>
      {/* __________________booking form ends________________ */}

      {/* __________________booking bottom________________ */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i class="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service Charge</h5>
            <span>$ 10</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book
        </Button>
      </div>
    </div>
  );
};

export default Booking;
