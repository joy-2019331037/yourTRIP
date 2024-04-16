import React,{useRef, useState} from 'react'
import {Col, Form, FormGroup, Input} from "reactstrap"
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert2';

import {BASE_URL} from '../utils/config.js'

import './searchbar.css'

const SearchBar = () => {
    // const locationRef=useRef('');
    // const distanceRef=useRef(0);
    // const maxGroupSizeRef=useRef(0);


    const [place, setPlace] = useState({
       location:''
      });
    
      const handleChange = (e) => {
        const { value } = e.target; // Destructure value from the event object
        setPlace((prev) => ({ ...prev, location: value }));
        console.log(value); // Use value directly
      };
      

    const navigate = useNavigate();

    const searchHandler=async ()=>{
        // const location = distanceRef.location.value.trim;
        // const distance = distanceRef.current.value;
        // const maxGroupSize = maxGroupSizeRef.current.value;
       
        if(place.location==='')
        {
            swal.fire(
                'location is empty'
            )
            return ;
        } 
        
        console.log(place.location);
        const res= await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${place.location}`)
        console.log(res);
        if(!res.ok){
            alert('something went wrong')
        }
        const result =await res.json();
        
        console.log(place)
        navigate(`/tours/search?city=${place.location}`
        ,{state: result.data})
    }


                
  return <Col lg='20'>
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-map-pin-line"></i>
                        </span>
                    <div>
                        <h6>Location</h6>
                        {/* <Input type="text" placeholder='Where to?' ref={locationRef}/> */}
                        <Input type="text"  onChange={handleChange} />
                    </div>
            </FormGroup>
            {/* <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span>
                        <i class="ri-map-pin-time-line"></i>
                        </span>
                    <div>
                        <h6>Distance</h6>
                        <Input type="number" placeholder='Distance k/m' ref={distanceRef}/>
                    </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span>
                    <i class="ri-group-line"></i>
                        </span>
                    <div>
                        <h6>Max Peaple</h6>
                        <Input type="number" placeholder='0' ref={maxGroupSizeRef}/>
                    </div>
            </FormGroup> */}

            <span className="search__icon" type='submit' onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>
  </Col>
}

export default SearchBar