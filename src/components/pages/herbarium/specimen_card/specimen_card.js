import React from 'react';
import './specimen_card.css';


function Specimen_card (props) {

    return (
        <div className="SPECIMEN">
            <div className="specimen_image">
                this is the IMAGE
            </div>
            
            <div className="specimen_text">
                Family : {} <br/>
                Genus : {} <br/>
                Species : {} <br/>
                Date of Collection : {} <br/>
                Site of Collection : {} <br/>
                Name of Collection : {} 

            </div>

        </div>
    );
}


export default Specimen_card;
