// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Home from "./Index/Home";
// import About from "./Index/About";
// import Contact from "./Index/Contact";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

function Navigation() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: disabled ? "#f5d9ff" : "#d359ff",
                  backgroundColor: active ? "#eecef9" : undefined,
                };
              }
            },
          }}
        >
          <SubMenu label="charts">
            <MenuItem icon={<HomeOutlinedIcon />}> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}>Collapse</button>
      </main>
    </div>
  );
}

export default Navigation;
