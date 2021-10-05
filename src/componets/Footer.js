import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
        
            
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon " href="https://www.linkedin.com/in/goutham-s-krishna-21ab151a0/"><i className="fa fa-linkedin"></i> </a>
                        <a className="btn btn-social-icon " href="https://github.com/gouthamben10/myapp_evobi/"><i className="fa fa-github"></i> </a>
                        <a className="btn btn-social-icon" href="mailto:gouthamben10@gmail.com"><i className="fa fa-envelope-o"> </i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 GSK Ristorante</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;