import React from 'react';

import {Navbar, Nav, Item, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

const NavBar = (props) => {
    return (
        <div>
            <Navbar className="navbar-nav" inverse collapseOnSelect>
                <div className="row">
                    <div className="col-md-4">
                        <Nav pullLeft>


                            <NavItem className="displays">CodeConnect</NavItem>

                            <Navbar.Toggle/>

                        </Nav>
                    </div>
                    <div className="col-md-8">
                        <Navbar.Collapse>
                            <div className="col-md-4 displays">
                                <Nav className="displays">
                                </Nav>
                            </div>
                            <div className="col-md-4 displays right">
                                <Nav pullRight>

                                    <NavItem eventKey={1}><Link to={"register"}>Register</Link></NavItem>
                                    <NavItem eventKey={2}><Link to={"signIn"}>SignIn</Link></NavItem>

                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </div>
            </Navbar>
        </div>
    );
};

export default NavBar;