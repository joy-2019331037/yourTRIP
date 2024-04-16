import React from "react";
import { Container, Row, Col } from "reactstrap";

import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";

import FeaturedTourList from "../components/FeaturedTours/FeaturedTourList";

import h1 from "../assets/images/h1.jpg";
import h2 from "../assets/images/h2.jpg";
import h3 from "../assets/images/h3.jpg";
import h4 from "../assets/images/h4.jpg";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVdo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import expImg from "../assets/images/experience.png";

import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* __________________hero content starts ________________ */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="img" />
                </div>
                <h1>
                  Explore places, create{" "}
                  <span className="highlight">moment!!!</span>
                </h1>
                <p>
                Embark on a journey of discovery with our travel platform. Whether you crave the tranquility of nature or the bustle of city life, 
                <span className="highlight"> <b> yourTRIP </b> </span>  
                is your gateway to unforgettable adventures. Explore captivating destinations and let the world unfold before you, one click at a time.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={h1} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <img src={h2} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={h3} alt="" />
              </div>
            </Col>

            {/* <SearchBar/> */}
          </Row>
        </Container>
      </section>
      {/* __________________hero content ends ________________ */}

      {/* __________________featured tour stars ________________ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* __________________featured tour ends ________________ */}

      {/* __________________experience section stars ________________ */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experiences <br /> We vow to serve you
                </h2>

                <p>
                With over 12K+ successful trips, 2K+ regular clients, and 9 years of expertise, 
                our experience speaks volumes. Join us for unforgettable journeys crafted with passion and precision. Your adventure awaits!
                </p>
              </div>
            </Col>

            <Col>
              {" "}
              <div className="counter__wrapper d-flex align-items-center justify-content-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trips</h6>
                </div>

                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>

                <div className="counter__box">
                  <span>9</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <hr/>

            {/* <Col lg='6'>
          <div className="experience__img">
              <img src={expImg} alt="experienceImage"></img>
          </div>
        </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
