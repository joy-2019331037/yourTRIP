import React from 'react'
import {Container, Row, Col} from 'reactstrap'

import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServicesList from '../services/ServicesList'
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVdo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import expImg from '../assets/images/experience.png'


import '../styles/home.css'



const Home = () => {
  return <>
  {/* __________________hero content starts ________________ */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center '>
                <Subtitle subtitle={"Know Before You Go"}/>
                <img src={worldImg} alt="img"/>
            </div>
            <h1>Traveling opens the door for creating {" "}
              <span className="highlight">memories</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt architecto facilis neque consequuntur qui asperiores incidunt culpa animi. Animi maxime aut incidunt obcaecati iste modi totam sequi officia esse enim?
            </p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt=""/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVdo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt=""/>
          </div>
        </Col>

        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/* __________________hero content ends ________________ */}




  {/* __________________featured tour stars ________________ */}
  <section>
  <Container>
    <Row>
      <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">
                Featured Tours
          </h2>
      </Col>
      <FeaturedTourList/>
    </Row>
  </Container>
</section>

  {/* __________________featured tour ends ________________ */}



  {/* __________________services starts ________________ */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
            <div className="services__subtitle">Our services</div>
            <h2 className='services__title'> We offer our best services</h2>
        </Col>
        <ServicesList/>
      </Row>
    </Container>
  </section>
  {/* __________________services ends ________________ */}


  {/* __________________experience section stars ________________ */}

  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={"Experience"}/>
            <h2>
              With all our experiences <br/> We vow to serve you
            </h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima molestiae inventore velit fugiat cumque, impedit porro consectetur iure maiores dignissimos blanditiis doloremque sit assumenda itaque dicta accusantium natus! Consequuntur, pariatur.

            </p>

          </div>

          <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>
                  Successful Trips
                </h6>
              </div>

              <div className="counter__box">
                <span>2k+</span>
                <h6>
                  Regular Clients
                </h6>
              </div>

              <div className="counter__box">
                <span>9</span>
                <h6>
                  Years of Experience
                </h6>
              </div>
          </div>
        </Col>


        <Col lg='6'>
          <div className="experience__img">
              <img src={expImg} alt="experienceImage"></img>
          </div>
        </Col>
      </Row>
    </Container>
  </section>


  {/* __________________experience section ends ________________ */}


  {/* __________________gallery section stars ________________ */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={"Gallery"}/>
          <h2 className="gallery__title">
            Visit our customers tour gallery
          </h2>
        </Col>
        <Col lg='12'>
        <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  {/* __________________testimonial section stars ________________ */}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={"Critics & Fan's Review"}/>
          <h2 className="testimonial__title">
            This is what our fans say about us!
          </h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
  </section>
  {/* ______ ____________testimonial section ends ________________ */}
  <Newsletter/>
  </>
   
}

export default Home