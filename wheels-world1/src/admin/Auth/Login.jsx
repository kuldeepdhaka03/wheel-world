import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../../styles/form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userapi = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5500/api/login', {
        username: credential, 
        password: password
      });

      if (response.status === 200) {
        const { token } = response.data;
        console.log(response.data)
        localStorage.setItem('authToken', token);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error during user login:", error);
      // Optional: Show user-friendly error message
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-center">
        <Col xs={12} md={6}>
          <div className="form-container p-4 shadow rounded">
            <Form onSubmit={userapi}>
              <h1 className="text-center mb-4">Login</h1>

              <div className="subscribe">
                <p>SUBSCRIBE</p>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Username or Email"
                    className="subscribe-input"
                    aria-label="username"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                  />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="subscribe-input"
                    aria-label="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit" className="submit-btn mt-3">
                  SUBMIT
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
