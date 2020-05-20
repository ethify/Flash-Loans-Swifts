import React from "react";
import { BrowserRouter as Router, Link, HashRouter } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Button,
} from "shards-react";
import makeBlockie from "ethereum-blockies-base64";

import "./NavBar.css";
import { getAccount, getWeb3Instance, defaultAddress } from "./services";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.getWeb3 = this.getWeb3.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
      web3: null,
      userAddress: null,
      shortUserAddress: null,
    };
  }

  async componentDidMount() {
    await getWeb3Instance;
  }

  async getWeb3() {
    await getAccount();
    const userAddress = await defaultAddress();

    const shortUserAddress =
      userAddress.substring(0, 7) +
      "........" +
      userAddress.substring(userAddress.length - 7, userAddress.length);
    this.setState({
      userAddress: userAddress,
      shortUserAddress: shortUserAddress,
    });
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
        <Navbar className="navbar" expand="md">
          <NavbarBrand className="Link" href="#" to="/">
            FZap
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar className="Nav">
              <NavItem className="NavItem">
                <Link className="Link" to="/">
                  Flash Zap
                </Link>
              </NavItem>
              <NavItem className="NavItem1">
                <Link className="Link" to="/new-zap">
                  Add New
                </Link>
              </NavItem>
            </Nav>

            <Nav navbar className="Nav">
              <NavItem className="NavItem">
                <Button outline pill theme="info" onClick={this.getWeb3}>
                  {this.state.userAddress ? (
                    <div className="address-container">
                      <img
                        src={makeBlockie(this.state.userAddress)}
                        alt="address blockie"
                        className="address-blockie"
                        width="15"
                      />
                      <span className="short-address">
                        {this.state.shortUserAddress}
                      </span>
                    </div>
                  ) : (
                    <div>No Wallet Connected</div>
                  )}
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </HashRouter>
    );
  }
}
