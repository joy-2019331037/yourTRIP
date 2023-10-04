import { Box, Modal, Slider, Button } from "@mui/material";
import { useRef, useState, useContext } from "react";
import AvatarEditor from "react-avatar-editor";
import { FcAddImage } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import "./cropper.css";

// Styles
const boxStyle = {
  width: "300px",
  height: "300px",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
};
const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

// Modal
const CropperModal = ({ src, modalOpen, setModalOpen, setPreview }) => {
  const [slideValue, setSlideValue] = useState(10);
  const cropRef = useRef(null);

  const { user } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    dp: undefined,
  });


  



  let updatedValue = {};
  //handle save
  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      setPreview(URL.createObjectURL(blob));
      //console.log(URL.createObjectURL(blob))
      updatedValue = { dp: URL.createObjectURL(blob) };
      setCredentials((prev) => ({
        ...prev,
        ...updatedValue,
      }));
      setModalOpen(false); 
      
      try {
        const res = await fetch(`${BASE_URL}/users/updateDP/${user._id}`, {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({dp:dataUrl}),
        });
        const reslt = await res.json();
        //console.log(reslt);
        // if (!res.ok) {
        //   alert(result.message);
        // }
      } catch (error) {
        alert(error.message);
      }
    }
  };
 
  return (
    <Modal sx={modalStyle} open={modalOpen}>
      <Box sx={boxStyle}>
        <AvatarEditor
          ref={cropRef}
          image={src}
          style={{ width: "100%", height: "100%" }}
          border={50}
          borderRadius={150}
          color={[0, 0, 0, 0.72]}
          scale={slideValue / 10}
          rotate={0}
        />

        {/* MUI Slider */}
        <Slider
          min={10}
          max={50}
          sx={{
            margin: "0 auto",
            width: "80%",
            color: "cyan",
          }}
          size="medium"
          defaultValue={slideValue}
          value={slideValue}
          onChange={(e) => setSlideValue(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            border: "3px solid white",
            background: "black",
          }}
        >
          <Button
            size="small"
            sx={{ marginRight: "10px", color: "white", borderColor: "white" }}
            variant="outlined"
            onClick={(e) => setModalOpen(false)}
          >
            cancel
          </Button>
          <Button
            sx={{ background: "#5596e6" }}
            size="small"
            variant="contained"
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

// Container
const Cropper = () => {
  // image src
  const [src, setSrc] = useState(null);

  // preview
  const [preview, setPreview] = useState(null);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);

  // ref to control input element
  const inputRef = useRef(null);

  // handle Click
  const handleInputClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  // handle Change
  const handleImgChange = (e) => {
    setSrc(URL.createObjectURL(e.target.files[0]));
    setModalOpen(true);
  };

  return (
    <>
      <main className="main">
        <CropperModal
          modalOpen={modalOpen}
          src={src}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
        {console.log(preview)}

        <div className="img-container">
          <img
            onClick={handleInputClick}
            src={
              preview ||
              " https://www.signivis.com/img/custom/avatars/member-avatar-01.png"
            }
            alt=""
          />
        </div>
        <div className="chooseDp" onClick={handleInputClick}>
          <i class="ri-image-add-fill">{"       "}Choose DP</i>
        </div>

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImgChange}
        />
      </main>
    </>
  );
};

export default Cropper;
