import React, {Component} from 'react';
import './navbar.css';

import {Link} from "react-router-dom";

class navbar extends Component{
    render() {
        return(
            <div className="navbar">
                <div className="navbar_logo">
                    RAJA BALWANT SINGH COLLEGE<br/>Department of Botany
 
                    

                </div>
                <div className="navbar_links">
                    <ul className="navbar_links_list">
                        <li className="list_item"> Herbarium</li>
                        <li className="list_item"> Department of Botany</li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default navbar;