import React, {Component, useEffect} from 'react';
import './footer.css';

import {Link , useLocation} from "react-router-dom";

function Footer (){
    
    const location = useLocation();
    console.log(location.pathname)
    
    // useEffect(() => {
    // console.log(location.pathname);
    // }, [location]);

        return(   
        (location.pathname === '/login') ? <></> :
            <footer className="FOOTER">

                <div className="footer_content">
                    <div className="col1">
                        <img id="col1_logo" src="/assets/logo/logo.png" alt="" ></img> 
                    
                        <div>To be committed to the pursuit of excellence high education, character building, holistic
                        development of personality and knowledgeable citizenship.</div>

                    </div>
                    <div className="col2">
                        <em>DEPARTMENT OF BOTANY</em>
                        <br/>
                        <ul className="col2_list"> 
                            <li>- About The Department</li>
                            <li>- History & Genesis</li>
                            <li>- Facilities Offered</li>
                            <li>- Heads Of Department</li>
                            <li>- Our Faculty</li>
                            <li>- Courses Offered</li>
                            <li>- Our Achievements</li>
                            <li>- Our Projects</li>
                            <li>- Our Patents</li>
                            <li>- Placements</li>

                        </ul>
                        
                    </div>
                    <div className="col3">
                        <em>INTERNSHIP OPPORTUNITIES</em>
                        <br/>
                        <br/>
                        <em><Link to="/login">ADMIN LOGIN</Link></em>
                        <br/>
                        <br/>
                        <br/>
                        <em>CONTACTUS</em>
                        <br/>
                        Lorem ipsum dolor sit amet, incididunt
                        ut labore et dolore magna aliqua.Ut
                        enim ad minim veniam,
                        <br/>
                        <br/>
                        Phone +91 8171********(Director)<br/>
                        <br/>
                        +91 8171********<br/>
                        <br/>
                        Email Abc123@gmail.com



                        
                    </div>

                </div>



                <div className="divider"></div>
                
                <div className="bottom_panel">
                    © 2021 Content Owned, Udpated And Maintained By PhantomCORE.

                    <div className="bottom_logo">
                        <img id="bottom_logo" src="/assets/logo/youtube.png" alt="" ></img> 
                        <img id="bottom_logo" src="/assets/logo/fb.png" alt="" ></img> 
                        <img id="bottom_logo" src="/assets/logo/instagram.png" alt="" ></img> 
                        <img id="bottom_logo" src="/assets/logo/twitter.png" alt="" ></img> 
                    </div>

                </div>
                
            </footer>
        );
    
}

export default Footer;