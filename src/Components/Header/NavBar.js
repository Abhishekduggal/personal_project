import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="mr-auto">
            Quality Assurance
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Explore
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <Link to="/" action="replace">
                        Home
                      </Link>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <Link to="/dashboard" action="replace">
                        Dashboard
                      </Link>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <Link to="/form" action="replace">
                        Form
                      </Link>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <Link to="/products/specifications" action="replace">
                        Specification
                      </Link>
                    </NavItem>
                  </DropdownItem>

                  <DropdownItem>
                    <NavItem>
                      <Link to="/sms" action="replace">
                        Message
                      </Link>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Control Panel
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/form/edit" action="replace">
                      Manage Forms
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link to="/dashboard/Manager" action="replace">
                      Metrics
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link to="/product/create" action="replace">
                      Product Development
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
