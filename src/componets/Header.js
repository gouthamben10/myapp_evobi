import React from 'react';
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';
function Header() {
    return (
        <div>
               <React.Fragment>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">GSK Ristorante</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header ">
                            <div className="col-12 ">
                                <h1>Design Your Pizza!</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        </div>
    );
}

export default Header;