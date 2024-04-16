import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

import "../styles/reviewdialog.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ reviews }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        <i className="ri-feedback-line"></i> Reviews
      </div>
      <Dialog
        fullScreen={false}
        className="reviewDialog"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            minWidth: "90%",
            maxWidth: "90%",
          },
        }}
        sx={{
          width: "80%",
          alignItems: "center",
          margin: "0 auto", // Center horizontally
        }}
      >
        <AppBar className="appbar" sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Your Feedbacks
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {Array.isArray(reviews) ? (
          reviews?.map((review, index) => (
            <div className="parent">
              <div className="review__item" key={index}>
                <div className="photoDiv">
                  <img src={review.tourPhoto} alt="" />
                </div>
                <div>
                  <p className="tourName">
                    <b> {review.tourName}</b>
                  </p>

                  <p className="tourRating">
                    <label>
                      <b>{review.rating}</b>
                    </label>
                    {renderStars(review.rating)}
                  </p>

                  <label className="reviewText">
                    {"\t"}"{review.reviewText}"{"    "}
                  </label>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </Dialog>
    </div>
  );
}
