import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
    const [isOpen, setIsOpen]: any[] = useState(false);

    const toggle = (): void => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="px-5 mr-auto">Best Store</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="px-3">
                            <Link to="/" >
                                Home
                            </Link>
                        </NavItem>
                        <NavItem className="px-3">
                            <Link to="/cart" >
                                Cart
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp
