import React, {Component} from 'react';
import './herbarium.css';
import Specimen_card from './specimen_card/specimen_card';


class herbarium extends Component{
    render() {
        return(
            <div className="HERBARIUM">
                <Specimen_card />



            </div>
        );
    }
}

export default herbarium;