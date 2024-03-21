import React from "react";
import { Container, Row, Col } from "reactstrap";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Subtitle from "../shared/Subtitle";
const Gallery = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
        <hr/>
      </Container>
    </section>
  );
};

export default Gallery;
