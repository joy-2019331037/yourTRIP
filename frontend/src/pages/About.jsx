import React from "react";
import { Container, Row, Col } from "reactstrap";
import Testimonials from "../components/Testimonial/Testimonials";
import Subtitle from "../shared/Subtitle";
import Newsletter from "../shared/Newsletter";
import ServicesList from "../services/ServicesList";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Critics & Fan's Review"} />
              <h2 className="testimonial__title">
                This is what our fans say about us!
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Newsletter /> */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <div className="services__subtitle">Our services</div>
              <h2 className="services__title"> We offer our best services</h2>
            </Col>
            <ServicesList />
          </Row>
          <hr/>
        </Container>
       
      </section>
      
    </>
  );
};

export default About;
