import React from 'react'

import ServiceCard from './ServiceCard'
import {Col} from "reactstrap" 

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:"Weather Friendly Planning",
        desc:"We provide weather friendly tour planning and season wise luxury accomodations."
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Our experienced guides will ensure a fine experience for you over the entire journey."
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:"We truly respect and welcome any suggestion and customization offered by you."
    }
]

const ServicesList = () => {
  return <>
  {
    servicesData.map((i,index)=>(
    <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={i}/>
    </Col>))
  }
  </>
}

export default ServicesList