import React, {Component} from 'react';
import './home.css';

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


            </div>
        );
    }
}

export default home;