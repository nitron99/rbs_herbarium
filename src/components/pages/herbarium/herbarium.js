import React, {Component} from 'react';
import axios from 'axios';
import './herbarium.css';
import Specimen_card from './specimen_card/specimen_card';


class herbarium extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
            items : [],
            errorMsg :''
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:3000/api/v1/sample?page=1&limit=20')
            .then(response => {
                
                this.setState({items : response.data.data.data})
                console.log(this.state.items)
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
            })
    }


    
    render() {
        const { items , errorMsg } = this.state
        return(
            <div className="HERBARIUM">
                <div className = "herbarium">
                {items.length ? items.map(item => <Specimen_card key={item._id} data={item} edit={false}/>) : null}
                {errorMsg ? <div>{errorMsg}</div> : null}
                </div>
            
            </div>
        );
    }
}

export default herbarium;