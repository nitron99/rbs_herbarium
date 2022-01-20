import React, {Component} from 'react';
import axios from 'axios';
import './herbarium.css';
import Specimen_card from './specimen_card/specimen_card';
import Search_bar from './search_bar/search_bar';
import Pager from './pager/pager';


class herbarium extends Component{

    constructor(props) {
        super(props)
        
        this.state = {
            items : [],
            allitems : [],
            errorMsg :'',
            search : '',
            page_number : 1,
            total_element : 0 

        }
    }

    loader(current){
        const  multi = (current-1)*20;
        this.setState({items: this.state.allitems.slice(multi,multi+20)})
        // console.log(this.state.items)
    }


    componentDidMount() {
        axios.get(`http://192.168.1.16:3000/api/v1/sample/` )
        .then(response => {  
            this.setState({allitems : response.data.data.data});
            this.setState({items: response.data.data.data.slice(0,20)})
            this.setState({total_element : response.data.data.data.length})
            // console.log(this.state.allitems.length)
            // console.log(response.data.data.data)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })

        
    }

    searchHanlder = (text) => {
        axios.get('http://192.168.1.16:3000/api/v1/sample/getSample?species='+text)
            .then(response => {
                this.setState({items : response.data.data.data})
               
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
            })
    }

    loadnextpage = (current) => {
        if(this.state.page_number === Math.ceil(this.state.total_element/20))
        {
            
        }else{
            this.setState({page_number: this.state.page_number+1})
            this.loader(this.state.page_number+1);
        }
        
    }

    loadprevpage = (current) => {
        if(this.state.page_number === 1)
        {
            
        }else{
            this.setState({page_number: this.state.page_number-1})
            this.loader(this.state.page_number-1);
        }
        
        console.log("prev")
    }

     
    render() {
        const { items , errorMsg , page_number , total_element } = this.state
        return(
            <div className="HERBARIUM">
              
                <div className="herb_search_bar">
                    <Search_bar text={this.searchHanlder} />
                </div>
                <div className="pager_bar">
                    <Pager data={page_number} next={this.loadnextpage} prev={this.loadprevpage} total={total_element}/>
                </div>
                <div className = "herbarium">
                {items.length ? items.map(item => <Specimen_card key={item._id} data={item} edit={false}/>) : null}
                {errorMsg ? <div>{errorMsg}</div> : null}
                </div>
            
            </div>
        );
    }
}

export default herbarium;