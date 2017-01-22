import React from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect fluid={false}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Ajay Kumar</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <Link activeClassName="active" to="/signup">Sign Up</Link>
                      </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default NavigationBar;
