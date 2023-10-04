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

import "../styles/bookingdialog.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ bookings }) {
  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>
        <i class="ri-file-text-line"></i> Bookings
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
              Your Bookings
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

        {Array.isArray(bookings) ? (
          bookings.map((booking, index) => (
            <div className="booking__item" key={index}>
              <div className="photoDiv">
                <img src={booking.tourPhoto} alt="" />
              </div>
              <div className="tourName">
                <p>
                  <b> {booking.tourName}</b>
                </p>
                <p className="bookAt">
                <b>Booked At : </b>
                  <label className='bookAtText'>
                  {new Date(booking.bookAt).toLocaleDateString(
                    "en-US",
                    options
                  )}
                  </label>
                </p>
               
              </div>
              <div className="details">
                <p className="name">{booking.fullName}</p>

                <p className="mail">
                  <i class="ri-group-line"></i>
                  <label id="mailText">{booking.guestSize} people</label>
                </p>

                <p className="mail">
                  <i class="ri-mail-line"></i>
                  <label id="mailText">{booking.userEmail}</label>
                </p>

                <p className="mail">
                  <i class="ri-phone-line"></i>
                  <label id="mailText">{booking.phone}</label>
                </p>

                <p></p>
                <p></p>
              </div>
            </div>
          ))
        ) : (
          <p>No bookings available.</p>
        )}
      </Dialog>
    </div>
  );
}
