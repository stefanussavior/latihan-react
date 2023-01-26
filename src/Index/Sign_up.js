import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./css/Sign_up.css";
import "@fontsource/poppins";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignUp({ setToken }) {
  // const classes = useStyles();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="flex-container">
      <div className="flex-item-left">
        <h1 className="judul_login">
          Marilah Bergabung <br />
          Bersama Kami
        </h1>
      </div>
      <div className="flex-item-right">
        <img
          src={require("../image/Logo-FisTx.png")}
          width="50%"
          height="auto"
        />
        <br />
        <br />
        <h3>Saatnya Untuk Bertambak</h3>
        <br />

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            {/* <Form.Label className="form1">Email Address : </Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Masukkan Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            {/* <Form.Label className="form2">Password : </Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Masukkan Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <br />
          <LinkContainer to="/Sidebar">
            <Button className="mb-2" size="lg" variant="primary" type="submit">
              Submit
            </Button>
          </LinkContainer>
        </Form>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  setToken: PropTypes.func.isRequired,
};
