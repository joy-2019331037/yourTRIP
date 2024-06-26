import React, { useState,useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {AuthContext} from './../context/AuthContext'
import {BASE_URL} from '../utils/config'
import Swal from 'sweetalert2';
import registerImg from '../assets/images/register.png'

import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username:undefined,
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext);


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // console.log(credentials);
  };

  const handleClick = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok){
        //alert(result.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          
        });
      }
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Congratulations!",
        title: "You have been registered",
        showConfirmButton: false,
        timer: 1500
      });
      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" >
            <div className="reg__container">
              <div className="reg">
               <img src={registerImg} alt=""/>
              </div>

              <div className="reg__form">
               

                <h2>Sign Up</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <Input
                      type="text"
                      placeholder="Your name"
                      id="username"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                    onClick={handleClick}
                  >
                    Sign Up
                  </Button>
                </Form>

                <p>
                  Already a member? <Link to="/login">Login Here</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
