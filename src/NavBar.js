import React from "react";
import { BrowserRouter as Router, Link, HashRouter } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
} from "shards-react";
import "./NavBar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen,
      },
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    });
  }

  render() {
    return (
      <HashRouter>
        <Navbar type="dark" theme="info" expand="md">
          <NavbarBrand className="Link" href="#" to="/">
            FZap
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="Nav">
              <NavItem className="NavItem">
                <Link className="Link" href="#" to="/">
                  Flash Zap
                </Link>
              </NavItem>
              <NavItem className="NavItem1">
                <Link className="Link" href="#" to="/new-zap">
                  Add New
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </HashRouter>
    );
  }
}
