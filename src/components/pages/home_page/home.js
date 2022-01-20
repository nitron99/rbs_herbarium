import React, {Component} from 'react';
import './home.css';

import {Link} from 'react-router-dom';

class home extends Component{
    render() {
        return(
            <div className="HOME">
                
                <div className="background_img">
                    <div className="home_img_1">
                        <img id="img_1"src="/assets/images/1.jpg" alt="" ></img> 
                    </div>
                    <div className="home_img_2">
                        <img id="img_2"src="/assets/images/2.jpg" alt="" ></img> 
                    </div>
                    <div className="home_img_3">
                        <img id="img_3"src="/assets/images/3.jpg" alt="" ></img> 
                    </div>
                </div>



                <div className="home_written_content">
                        <div className="para1">
                            <em >Nature Does Not Hurry, Yet Everything Is Accomplished</em><br/><br/>The R.B.S. Herbarium
                            contains over 500 specimens of vascular plants which have been perserved in digital as 
                            well as real form. The Herbarium has been published in the "Flora of Agra" (BSI, Dehradun) & 
                            is available for reference.
                        </div>

                        <a href="" ><img id="down_circle"src="/assets/images/down_circle.png" alt="" ></img> </a>

                        <div className="para2">
                            <em >R.B.S. Herbarium Specimens</em><br/>

                            <br/>
                            <Link to="/herbarium"><button id="para2_btn">Herbarium</button></Link>
                        </div>
                </div>

                

            </div>
        );
    }
}

export default home;