import AOS from "aos";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Modal, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import DemoCarousel from "./Carousel";
import Footer from "./Footer";
import "./css/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins";
import "aos/dist/aos.css";

const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="index_navbar">
        <Navbar collapseOnSelect sticky="top" expand="lg">
          <Container fluid>
            <img
              src={require("../image/Logo-FisTx.png")}
              width="100"
              height="80"
              alt="logo_fistx"
            />{" "}
            <LinkContainer to="/">
              <Navbar.Brand href="/"></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" currentClassName="is_current">
                <Nav.Link href="#section-1">Home</Nav.Link>
                <LinkContainer to="/SideBar">
                  <Nav.Link>Navigation</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <Nav.Link hres="#deets" onClick={handleShow}>
                  Sign In
                </Nav.Link>
                <LinkContainer to="/Sign_up">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email Anda : </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Email Anda"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShow}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <section id="section-1">
            <DemoCarousel />
          </section>
          <br />
          <section id="section-2">
            <p></p>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NavigationBar;
