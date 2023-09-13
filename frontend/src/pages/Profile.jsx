import React, { useContext } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";

import { AuthContext } from "../context/AuthContext";

import userImg from "../assets/images/profile.jpg";
import "../styles/profile.css";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">
              <div className="user__container d-flex justify-content-between">
                <div className="user__img">
                  <img src={userImg} alt="" />
                  <div className="user__details">
                    <p className="username">{user.username}</p>
                    <div className="others">
                      <p>
                        <label className="tag">ID :</label>

                        {user._id}
                      </p>
                      <p>
                        <label className="tag">Email :</label>

                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="user__form">
                  <div className="user">
                    {/* <img src={userIcon} alt="" /> */}
                  </div>

                  <h2>Login</h2>

                  <Form>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        required
                      />
                    </FormGroup>

                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        required
                      />
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Profile;
