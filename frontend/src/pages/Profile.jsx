import React, { useContext, useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import map, { set } from "lodash";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

import userImg from "../assets/images/profile.jpg";
import "../styles/profile.css";
import { Dialog } from "primereact/dialog";

import ReviewDialog from "../shared/Dialog";
import BookingDialog from "../shared/bookingDialog";

import Avatar from "react-avatar-edit";
import Cropper from "../shared/Cropper";

function Profile() {
  const { user } = useContext(AuthContext);
  
  
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
      console.log(reviews);
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
      console.log(bookings);
    } catch (error) {
      console.log(error);
      alert("coming form here " + error.message);
    }
  };

  //_____________________dp change section_________________________---
  // const [image, setImage] = useState("");

  // const [imageCrop, setImageCrop] = useState("");

  // // Create a reference to the hidden file input element
  // const hiddenFileInput = useRef(null);

  // // Programatically click the hidden file input element
  // // when the Button component is clicked
  // const addDpClicker = (event) => {
  //   hiddenFileInput.current.click();
  // };

  // const onImageChange = (view) => {
  //   if (view) {
  //     setImage(URL.createObjectURL(view));
  //   }
  //   console.log(image);
  // };

  // //_____________________Avatar section _________________

  // const [src, setSrc] = useState(null);
  // const [preview, setPreview] = useState(null);

  // const onClose = () => {
  //   setImage(preview);
  //   setBringDialog(false);
  // };

  // const onCrop = (view) => {
  //   setPreview(view);
  // };

  // const [avatarSize, setAvatarSize] = useState({ width: 400, height: 300 });

  // useEffect(() => {
  //   if (image) {
  //     const img = new Image();
  //     img.onload = () => {
  //       // Use the dimensions of the loaded image for the Avatar component
  //       const width = img.width;
  //       const height = img.height;
  //       setAvatarSize({ width, height });
  //     };
  //     img.image = image;
  //   }
  // }, [image]);

  // const [bringDialog, setBringDialog] = useState(true);

  // const initiateAvatar = () => {
  //   setBringDialog(true);
  // };

  //___________________________dp change section ends_____________________________


  //_______________________profile pic_____________

  const [DP,setDP]=useState(false);
  const [image,setImage]=useState(null);
  const getDp=async ()=>{
    const result = await fetch(user.dp);
    const blob = await result.blob();
    console.log(blob)
    setImage(URL.createObjectURL(blob));
    setDP(true);
  }
  useEffect(()=>{
    if(!DP)
      getDp()
  })

  //_______________________profile pic ends___________
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="10" className="m-auto">
              <div className="user__container">
                <div className="user__img">
               

                  {/* {bringDialog && !image && (
                    <Avatar onCrop={onCrop} onClose={onClose} />
                  )}

                  {bringDialog && image && (
                    <Avatar onCrop={onCrop} onClose={onClose} src={src} />
                  )}
                  {!bringDialog && image && (
                    <>
                      <img
                        src={image}
                        alt=""
                        // style={{
                        //   width: avatarSize.width,
                        //   height: avatarSize.height,
                        // }}
                      />
                      <div className="updateDP" onClick={initiateAvatar}>
                        <i class="ri-edit-box-line">{"  "}Update DP</i>
                      </div>
                    </>
                  )} */}
                  {console.log(image)}
                  {
                    DP &&
                    <img src={image} setPreview={image} alt="dp"/>
                    
                  }
                  {
                    !DP && 
                    <Cropper/>
                  }
                  <div className="user__details">
                    <p className="username">{user.username}</p>
                    <div className="others">
                      <p>
                        <label className="tag">ID {"    "}:</label>

                        {user._id}
                      </p>
                      <p>
                        <label className="tag">Email{""}:</label>

                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="user__menu">
                  <div className="user">
                    {/* <img src={userIcon} alt="" /> */}
                  </div>

                  <h3>Here's your stuff</h3>
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
