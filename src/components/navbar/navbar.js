import React, {Component} from 'react';
import './navbar.css';

import {Link} from "react-router-dom";

class navbar extends Component{
    render() {
        return(
            <div className="NAVBAR">
                <Link to="/" ><img id="navbar-logo" src="/assets/logo/logo.png" alt=""/></Link>

                <div className="navbar">
                    <div className="navbar_title">
                        <em>RAJA BALWANT SINGH COLLEGE</em><br/>Department of Botany
    
                    </div>
                    <div className="navbar_links">
                        <ul className="navbar_links_list">
                            
                            <Link to="/herbarium" ><li className="list_item"> Herbarium</li> </Link>
                            <Link to="/about" ><li className="list_item"> Department of Botany</li></Link>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default navbar;