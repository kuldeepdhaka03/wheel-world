import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../../styles/form.css";

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5500/api/register', {
        name,
        username,
        email,
        phoneno,
        password
      });

      if (response.status === 200) {
        // Save the token in local storage or a state management library
        localStorage.setItem('token', response.data.token);
        navigate("/home");
      } 
    } catch (error) {
      console.log("Error during user creation:", error); // Handle errors
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-center">
        <Col xs={12} md={6}>
          <div className="form-container p-4 shadow-sm rounded">
            <Form onSubmit={handleSignup}>
              <h1 className="text-center mb-4">Sign Up</h1>

              <div className="subscribe">
                <p>SUBSCRIBE</p>
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="subscribe-input"
                    aria-label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="subscribe-input"
                    aria-label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    className="subscribe-input"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Control
                    type="tel"
                    placeholder="Phone No."
                    name="phoneno"
                    className="subscribe-input"
                    aria-label="Phone number"
                    value={phoneno}
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="subscribe-input"
                    aria-label="Password"
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

export default SignUp;
