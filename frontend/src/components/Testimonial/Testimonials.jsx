// //testimonial similar to the one I implemented on BIDDER

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./testimonial.css";

// // import required modules
// import { Pagination } from "swiper/modules";

// import c1 from "../../assets/images/c1.jpg";
// import c2 from "../../assets/images/c2.jpg";
// import c3 from "../../assets/images/c3.jpg";
// import c4 from "../../assets/images/c4.jpg";
// import c5 from "../../assets/images/c5.jpg";
// import c6 from "../../assets/images/c6.jpg";
// import c7 from "../../assets/images/c7(1).jpg";
// import c8 from "../../assets/images/c8.jpg";
// import c9 from "../../assets/images/c9.jpg";

// export default function App() {
//   return (
//     <>
//       <div className="testimonial_title">
//         <label className="testimonial_title_text">HAPPY USERS</label>
//         <div>empty</div>
//       </div>
//       <Swiper
//         slidesPerView={2}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//         scrollbar={{ draggable: true }}
//       >
//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//             "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c1} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">John Cena</label>
//               <label class="client-desig">Entrepreneur</label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//             "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data">

//               <img src={c2} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Mary Adamte</label>
//               <label class="client-desig">Social Activist</label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//             "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c3} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Michael Olise</label>
//               <label class="client-desig">Blogger</label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//               "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c4} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Raymond Hay</label>
//               <label class="client-desig">Entrepreneur</label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//             "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c5} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Elissa Edmond</label>
//               <label class="client-desig">Youtuber</label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//             "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c6} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Jordan Aiyu</label>
//               <label class="client-desig">Journalist</label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//             "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c7} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Oishi Dindora</label>
//               <label class="client-desig">Model</label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//             "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Doloremque, alias ratione tempore sunt exercitationem expedita
//               maxime reiciendis quidem. Eum animi quos nemo consequuntur
//               doloribus culpa quod veritatis. Sapiente, maiores facilis."
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c8} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Thomas Muller</label>
//               <label class="client-desig">Real Estate Manager </label>
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="slider">
//           <div class="swiper-client-msg">
//             <p>
//               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptate assumenda inventore asperiores ab cupiditate doloribus perspiciatis delectus voluptatibus, obcaecati laudantium vitae veniam consequuntur dolorem quidem accusamus ipsa eaque quos!"
//             </p>
//           </div>
//           <div class="swiper-client-data grid grid-two-column">

//               <img src={c9} alt="client img" />

//             <div class="client-data-details">
//               <label class="client-name">Lazio Doglus</label>
//               <label class="client-desig">Entrepreneur</label>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

//testimonial of another type

import React from "react";
import Slider from "react-slick";

import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

import divyo from '../../assets/customer-images/divyo.jpg'
import partha from '../../assets/customer-images/partha.jpg'
import shihab from '../../assets/customer-images/shihab.jpg'
import rohan from '../../assets/customer-images/rohan.jpg'
import nazif from '../../assets/customer-images/nazif.jpg'
import niloy from '../../assets/customer-images/niloy.jpg'


import "./testimonial.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinte: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinte: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <div className="test_box">
          <div className="text_box">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              molestiae, odio officia iure, doloribus esse dicta et quam
              consectetur repudiandae maiores facilis laborum. Doloribus debitis
              necessitatibus culpa atque, temporibus quaerat.
            </p>{" "}
          </div>
        </div>
        <div className="img_box d-flex align-items-center justify-content-center gap-4 mt-3">
          <img src={divyo}  alt="" />
          <div>
            <h6 className="mb-0 mt-3">Divyo Arghya</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="test_box">
          <div className="text_box">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              molestiae, odio officia iure, doloribus esse dicta et quam
              consectetur repudiandae maiores facilis laborum. Doloribus debitis
              necessitatibus culpa atque, temporibus quaerat.
            </p>
          </div>
        </div>
        <div className="img_box d-flex align-items-center justify-content-center gap-4 mt-3">
          <img src={partha}  alt="" />
          <div>
            <h6 className="mb-0 mt-3">Partha Sarothi</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="test_box">
          <div className="text_box">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              molestiae, odio officia iure, doloribus esse dicta et quam
              consectetur repudiandae maiores facilis laborum. Doloribus debitis
              necessitatibus culpa atque, temporibus quaerat.
            </p>{" "}
          </div>
        </div>
        <div className="img_box d-flex align-items-center justify-content-center gap-4 mt-3">
          <img src={rohan}  alt="" />
          <div>
            <h6 className="mb-0 mt-3">Rohan Redwan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="test_box">
          <div className="text_box">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              molestiae, odio officia iure, doloribus esse dicta et quam
              consectetur repudiandae maiores facilis laborum. Doloribus debitis
              necessitatibus culpa atque, temporibus quaerat.
            </p>
          </div>
        </div>
        <div className="img_box d-flex align-items-center justify-content-center gap-4 mt-3">
          <img src={nazif}  alt="" />
          <div>
            <h6 className="mb-0 mt-3">Nazif farhan</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <div className="test_box">
          <div className="text_box">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              molestiae, odio officia iure, doloribus esse dicta et quam
              consectetur repudiandae maiores facilis laborum. Doloribus debitis
              necessitatibus culpa atque, temporibus quaerat.
            </p>
          </div>
        </div>
        <div className="img_box d-flex align-items-center justify-content-center gap-4 mt-3">
          <img src={niloy}  alt="" />
          <div>
            <h6 className="mb-0 mt-3">Niloy Roy</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
