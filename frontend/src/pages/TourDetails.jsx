import React, { useState, useRef, useEffect, useContext } from "react";

import { Container, Row, Col, Form, ListGroup, Input} from "reactstrap";
import { useParams } from "react-router-dom";
import Newsletter from "../shared/Newsletter";
import CalculateAvgRating from "../utils/calculateAvgRating";
import Booking from "../components/Booking/Booking";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

import avatar from "../assets/images/avatar.jpg";
import "../styles/tourdetails.css";

const TourDetails = () => {
  const [starColor, setStarColor] = useState(false);
  const [starColorLimit, setStarColorLimit] = useState(0);
  const [changedOnce, setChangedOnce] = useState(false);

  const starColorHandler = (no) => {
    setTourRating(no);
    if (!changedOnce) {
      setChangedOnce(true);
      setStarColor(!starColor);
    } else {
      setStarColor(true);
    }
    setStarColorLimit(no);
  };

  // console.log('star Color : '+starColor);
  // console.log('star Color Limit : '+starColorLimit)
  // console.log('changed Once : '+changedOnce)
  const { id } = useParams();

  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(1);
  const { user } = useContext(AuthContext);

  //fetch data from db
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  //destructuring properties from tour object
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    address,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = CalculateAvgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };


  const [review, setReview] = useState({
    text:''
   });
 
   const handleChange = (e) => {
     const { value } = e.target; // Destructure value from the event object
     setReview((prev) => ({ ...prev, text: value }));
     console.log(value); // Use value directly
   };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    //const reviewText = reviewMsgRef.current.value;

    console.log(tourRating);
    console.log(review.text);
     const reviewText = review.text;

    try {
      if (!user || user === undefined || user === null) {
        // alert("Please sign in to provide a review");
        Swal.fire({
          icon: "error",
          text: "Please sign in to rate any tour",
        });
      }

      const reviewObj = {
        username: user?.username,
        userId: user?._id,
        tourPhoto: photo,
        tourName: title,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();

      if (!res.ok) {
        // return alert(result.message);
        return ;
      }

      //console.log(reviewObj);
      //alert(result.message);
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Congratulations!",
        title: "You review is submitted",
        footer:"Stay with yourTRIP",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      alert("coming form here" + error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <Container>
        {loading && <h4 className="text-center pt-5">Loading....</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {!loading && !error && (
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        class="ri-star-fill"
                        style={{ color: "rgb(236, 112, 112)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i class="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      {" "}
                      <i class="ri-map-pin-fill"></i>
                      {city}
                    </span>
                    <span>
                      <i class="ri-money-dollar-circle-line"></i>৳ {price} /per
                      person
                    </span>
                    <span>
                      <i class="ri-map-pin-time-line"></i>
                      {distance} k/m
                    </span>
                    <span>
                      <i class="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* __________________tour review section starts_________________ */}

                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length})</h4>

                  {reviews?.map((review) => (
                    <div className="user_review">
                      <div className="review_info">
                        <div className="reviewer">
                          <img src={avatar} alt="img" />
                          <div>
                            <h6>{review.username}</h6>
                            <p className="review_date">
                              {new Date(review.createdAt).toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                        </div>

                        <h6>"{review.reviewText}"</h6>
                      </div>

                      <div className="review_rating">
                        {review.rating} <i class="ri-star-fill"></i>
                      </div>
                    </div>
                  ))}

                  {/* <ListGroup className="user__reviews ">
                    {reviews?.map((review) => (
                      <div className="review__item">
                        <img src={avatar} alt="img" />

                        <div className="w-100">
                          <div
                            className="d-flex align-items-center
                              justify-content-between"
                          >
                            <div>
                              <h4>{review.username}</h4>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating} <i class="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup> */}

                  <h5>Rate this tour</h5>

                  <Form onSubmit={submitHandler}>
                    <div className="rating__group d-flex align-items-center gap-3 mb-4">
                      <span onClick={() => starColorHandler(1)}>
                        1{" "}
                        <i
                          class={`ri-star-fill ${
                            starColor === true && 1 <= starColorLimit
                              ? "changed"
                              : "unchanged"
                          }`}
                        ></i>
                      </span>
                      <span onClick={() => starColorHandler(2)}>
                        2
                        <i
                          class={`ri-star-fill ${
                            starColor === true && 2 <= starColorLimit
                              ? "changed"
                              : "unchanged"
                          }`}
                        ></i>
                      </span>
                      <span onClick={() => starColorHandler(3)}>
                        3
                        <i
                          class={`ri-star-fill ${
                            starColor === true && 3 <= starColorLimit
                              ? "changed"
                              : ""
                          }`}
                        ></i>
                      </span>
                      <span onClick={() => starColorHandler(4)}>
                        4
                        <i
                          class={`ri-star-fill ${
                            starColor === true && 4 <= starColorLimit
                              ? "changed"
                              : "unchanged"
                          }`}
                        ></i>
                      </span>
                      <span onClick={() => starColorHandler(5)}>
                        5
                        <i
                          class={`ri-star-fill ${
                            starColor === true && 5 <= starColorLimit
                              ? "changed"
                              : "unchanged"
                          }`}
                        ></i>
                      </span>
                    </div>

                    <div className="review__input">
                      <Input
                        type="text"
                        onChange={handleChange}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>

                {/* __________________tour review section ends_________________ */}
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default TourDetails;
