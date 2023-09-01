import React from 'react'
import { Container,Row,Col } from 'reactstrap'

import maleTourist from '../assets/images/male-tourist.png'
import './newsletter.css'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subsribe now to get useful traveling information.</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'/>
                        <button className="newsletter__btn">
                            Subscribe
                        </button>
                    </div>
                    <p>
                        Lorem ipsatur ut, odit veniam similique rerum fugiat ipsum. Corrupti culpa assumenda ea asperiores!

                    </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="img"/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter