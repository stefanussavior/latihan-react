// import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdSick } from "react-icons/md";
import { BsList } from "react-icons/bs";
import {
  GiFoodChain,
  GiWaterBolt,
  GiCirclingFish,
  GiScrewdriver,
} from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import "../Dashboard/css/Sidebar.css";

export default function SidebarAccount() {
  const { collapseSidebar } = useProSidebar();

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100%",
          minHeight: "1000px",
        }}
      >
        <Sidebar className="coba-sidebar" backgroundColor="#377FD9">
          <img
            src={require("../image/Logo-FisTx.png")}
            width="120"
            height="100"
            alt="logo_fistx"
            style={{
              position: "relative",
              left: "60px",
              top: "10px",
              borderRadius: "20px !important",
            }}
          />{" "}
          <Menu
            style={{
              position: "relative",
              top: "20px",
              color: "white",
            }}
          >
            <SubMenu icon={<GiFoodChain />} label="Pakan" className="pakan">
              <MenuItem className="MenuCoba">Coba</MenuItem>
            </SubMenu>
            <SubMenu
              icon={<GiScrewdriver />}
              label="Perlakuan"
              className="perlakuan"
            >
              <MenuItem>Lihat Perlakuan</MenuItem>
            </SubMenu>
            <SubMenu
              icon={<FaHandHoldingWater />}
              label="Kualitas Air"
              className=""
            >
              <MenuItem>Lihat Kualitas Air</MenuItem>
            </SubMenu>
            <SubMenu icon={<GiWaterBolt />} label="Sampling">
              <MenuItem>Lihat Sampling</MenuItem>
            </SubMenu>
            <SubMenu icon={<GiCirclingFish />} label="Panen">
              <MenuItem>Lihat Panen</MenuItem>
            </SubMenu>
            <SubMenu icon={<MdSick />} label="Penyakit">
              <MenuItem>Lihat Penyakit</MenuItem>
            </SubMenu>
            <MenuItem icon={<RiAccountCircleFill />}>Account</MenuItem>
            <MenuItem icon={<BiLogOut />}>Logout</MenuItem>{" "}
            <div className="box">
              <br />
              <br />
              <h2>FisTx</h2>
              <p>Copyright 2023</p>
            </div>
          </Menu>
        </Sidebar>

        <div className="style_sidebar">
          <main>
            <Navbar collapseOnSelect expand="lg" variant="dark">
              <Container>
                <Navbar.Brand>
                  <div>
                    <button
                      style={{
                        borderRadius: 0,
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onClick={() => collapseSidebar()}
                    >
                      <BsList />
                    </button>
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </main>
        </div>
      </div>
    </>
  );
}
