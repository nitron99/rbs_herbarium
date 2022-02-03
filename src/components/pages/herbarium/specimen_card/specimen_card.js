import React from 'react';
import './specimen_card.css';

function Specimen_card (props) {
    
    const { data , edit , del} = props
    
    // console.log(img)
    return (
        <div className="SPECIMEN">
           
            <div className="specimen"> 
                {edit && <img id="cancel_btn" src="/assets/images/cancel.png" alt="" onClick={() => {del(data._id)}} ></img>}
                {edit && <img id="edit_btn" src="/assets/images/pencil.png" alt="" onClick={() => {edit(data)}} ></img>}
                <div className="specimen_image">
                    <img id="spec_img" src={`http://192.168.1.16:3000/img/sample/${data.image}`} alt="" ></img>
                </div>
                
                <div className="specimen_text">
                    
                    <em>Family</em> : {data.family} <br/>
                    <em>Genus</em> : {data.genus} <br/>
                    <em>Species</em> : {data.species} <br/>
                    <em>Date of Collection</em> : {data.timeofcollection} <br/>
                    <em>Site of Collection</em> : {data.siteofcollection} <br/>
                    <em>Name of Collector</em> : {data.nameofcollector} 

                </div>
                {/* {edit && <button onClick={() => {del(data._id)}}>delete</button>} */}

            </div>

        </div>
    );
}

export default Specimen_card;
