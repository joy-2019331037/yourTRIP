import React, { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "../utils/config";
import Swal from "sweetalert2";

import icon from "../assets/images/logo1.png";

import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let s = "ok";
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        //alert(result.message);
        s = result.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: s,
        });
      }

      console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      if (s == "ok") navigate("/");
      else navigate("/login");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      navigate("/login");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="4" className="m-auto">
            <div className="login__container d-flex justify-content-center">
              <div className="login__form">
                <div>
                  <img src={icon} alt="" />
                </div>

                <div className="text">
                  <h3>Delighted to have you back!</h3>
                </div>

                <Form onSubmit={handleClick}>
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
                    Login
                  </Button>
                </Form>
                <p>
                  Not a member? <Link to="/register">Register here</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
