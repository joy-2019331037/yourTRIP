import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

import "../styles/profile.css";

import ReviewDialog from "../shared/Dialog";
import BookingDialog from "../shared/bookingDialog";

import Cropper from "../shared/Cropper";
import CircularProgress from "@mui/material/CircularProgress";

import defaultImage from '../assets/images/defaultuser.jpg'

function Profile() {
  const { user } = useContext(AuthContext);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  const [reviews, setReviews] = useState([
    {
      id: "",
      username: "",
      userId: "",
      tourPhoto: "",
      tourName: "",
      rating: "",
      reviewText: "",
    },
  ]);
  const [bookings, setBookings] = useState([
    {
      id: "",
      userId: "",
      userEmail: "",
      tourName: "",
      tourPhoto: "",
      fullName: "",
      phone: "",
      guestSize: "",
      bookAt: "",
    },
  ]);
  const reviewHandler = async (e) => {
    e.preventDefault();
    try {
      const reviewObj = {
        userId: user?._id,
      };

      const res = await fetch(`${BASE_URL}/reviews/`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      const map = new Map(
        Object.entries(JSON.parse(JSON.stringify(result.data)))
      );

      // Convert the map values to an array of review
      const reviewData = Array.from(map.values());

      setReviews(
        reviewData.map((review) => ({
          id: review._id,
          username: review.username,
          userId: review.userId,
          tourPhoto: review.tourPhoto,
          tourName: review.tourName,
          rating: review.rating,
          reviewText: review.reviewText,
        }))
      );
    } catch (error) {
      console.log(error);
      alert("coming form here " + error.message);
    }
  };

  const bookingHandler = async (e) => {
    e.preventDefault();
    try {
      const bookingObj = {
        userId: user?._id,
      };

      const res = await fetch(`${BASE_URL}/booking/getMyBookings`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(bookingObj),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      const map = new Map(
        Object.entries(JSON.parse(JSON.stringify(result.data)))
      );

      // Convert the map values to an array of review
      const bookingData = Array.from(map.values());

      setBookings(
        bookingData.map((booking) => ({
          id: booking._id,
          userId: booking.userId,
          userEmail: booking.userEmail,
          tourPhoto: booking.tourPhoto,
          tourName: booking.tourName,
          fullName: booking.fullName,
          phone: booking.phone,
          guestSize: booking.guestSize,
          bookAt: booking.bookAt,
        }))
      );
    } catch (error) {
      console.log(error);
      alert("coming form here " + error.message);
    }
  };

  //_______________________profile pic_______________________

  const [DP, setDP] = useState(false);
  const [image, setImage] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const getDp = async () => {
    const response = await fetch(`${BASE_URL}/users/getSingleUser/${user._id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const userData = await response.json();
    console.log(userData);
    //console.log(userData.data.dp);

    const blob = await fetch(userData.data.dp).then((res) => res.blob());

    setImage(URL.createObjectURL(blob));
    setDP(true);
  };

  useEffect(() => {
    if (!DP) getDp();
    if (reviews.length === 0) reviewHandler();
    if (bookings.length === 0) bookingHandler();
  });

  //_______________________profile pic ends__________________
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="10" className="m-auto">
              <div className="user__container">
                <div className="user__img">
                  {/* default image */}
                  <img  src={defaultImage}/>
                  {/* {!image && (
                    <>
                      <div className="DpLoading">
                        <h5>
                          <CircularProgress
                            className="circle"
                            color="inherit"
                          />
                          {"     "}
                          Loading Dp...
                        </h5>
                      </div>
                    </>
                  )} */}
                  {/* {DP && !showDialog && (
                    <img
                      src={image}
                      onClick={() => {
                        setShowDialog(true);
                      }}
                      alt="dp"
                    />
                  )} */}
                  {/* {showDialog && <Cropper />} */}
                 
                  {image && (
                    <div className="username">
                      <label className="static">I am </label>
                      <ul className="dynamic">
                        <li>
                          <span>{user.username}</span>
                        </li>
                        <li>
                          <span>Traveller</span>
                        </li>
                        <li>
                          <span>Dreamer</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="user__details">
                  <div className="Header">
                    
                    <p>{user.username}</p>
                    <p className="bio">Philanthropist <i class="ri-earth-fill"></i> Nature lover</p>
                  </div>
                  
                  <div className="others">
                    <p>
                      <label className="untag__red">
                        Reservations{" "}
                        <i class="ri-checkbox-blank-circle-fill"></i>
                        {bookings.length}
                      </label>
                    </p>
                    <p>
                      <label className="untag__blue">
                        Review Count{" "}
                        <i class="ri-checkbox-blank-circle-fill"></i>
                      
                        {reviews.length}
                      </label>
                    </p>
                    <p>
                      <label className="tag">
                        <i class="ri-mail-line"></i>
                        {user.email}
                      </label>
                    </p>
                    <p>
                      <label className="tag">
                        <i class="ri-phone-line"></i>01521771459
                      </label>
                    </p>
                  </div>
                  <div className="Footer">
                   
                      <div className="dateTitle">Registerd on</div>
                      <div className="date">
                      <b>{new Date(user.createdAt).toLocaleDateString(
                        "en-US",
                        options
                      )}</b>
                      </div>
                   
                  </div>
                </div>

                <div className="user__menu">
                  <div className="user">
                    {/* <img src={userIcon} alt="" /> */}
                  </div>

                  {/* <h3>Here's your stuff</h3> */}
                  <div className="menu__items">
                    <div>
                      <i class="ri-history-line"></i>Trip history
                    </div>
                    <div onClick={bookingHandler}>
                      <BookingDialog bookings={bookings} />
                    </div>
                    <div onClick={reviewHandler}>
                      <ReviewDialog reviews={reviews} />
                    </div>

                    <div>
                      <i class="ri-gallery-line"></i>Photo Gallery
                    </div>
                    <div>
                      <i class="ri-sticky-note-line"></i>Your Story
                    </div>
                    <div>
                      <i class="ri-settings-2-line"></i>Settings
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Profile;
