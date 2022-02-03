import React, {Component} from 'react'
import axios from 'axios'
import './edit.css'
import SpecimenCard from '../herbarium/specimen_card/specimen_card'
import Model from './model/model'
import SearchBar from '../herbarium/search_bar/search_bar'
import Pager from '../herbarium/pager/pager';

class Edit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items : [],
            allitems : [],
            errorMsg :'',
            openModel : false,
            editModel : false, 
            page_number : 1,
            total_element : 0,
            data: { // this state is used for editing the sample (rough for editing)
                species : "",
                genus : "",
                family : "" ,
                image : "",
                siteofcollection : "" ,
                timeofcollection : "",
                nameofcollector : ""
            }
        }
        
    }

    loader(current){
        const  multi = (current-1)*20;
        this.setState({items: this.state.allitems.slice(multi,multi+20)})
        // console.log(this.state.items)
    }

    componentDidMount(update ,x) {
        if(update)
        {
            axios.get(`http://192.168.1.16:3000/api/v1/sample/` )
            .then(response => {  
                this.setState({allitems : response.data.data.data});
                this.setState({items: response.data.data.data.slice(0,20)})
                this.setState({total_element : response.data.data.data.length})
                this.setState({page_number : x})
                this.loader(x)
                // console.log(this.state.allitems.length)
                // console.log(response.data.data.data)
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
            })   
        }else{
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
       

    }
   
    deleteSample(id){
        if (window.confirm('Are you sure you want to DELETE this sample?')) {
            axios.interceptors.request.use(
                config => {
                    config.headers.authorization = `Bearer ${this.props.token}`
                    return config
                },
                error => {
                    return Promise.reject(error)
                }
            );

            axios.delete(`http://192.168.1.16:3000/api/v1/sample/${id}`)
                .then(response => {
                    //console.log(response)
                    this.componentDidMount(true, this.state.page_number)
                    
                })
                .catch(error => {
                    console.log(error)
                
                })
        }else { // do nothing if NO
            //console.log('Not deleted');
        }
    }

    openModel = () => {
        this.setState({openModel : true})
    }

    closeModel = () => {
        this.setState({openModel : false})
        this.setState({editModel : false})
    }

    createSample = (entry) => {
       
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${this.props.token}`
                return config
            },

            error => {
                return Promise.reject(error)
            }
        );

        axios.post('http://192.168.1.16:3000/api/v1/sample/' , entry)
            .then(response => {
                //console.log(response)
                this.componentDidMount(true, this.state.page_number)
               
            })
            .catch(error => {
                console.log(error)
            })
    }

    editSample = (data) =>{        
        this.setState({data : data})
        this.setState({openModel : true})
        this.setState({editModel : true}) // for opening the model         
    }

    updateSample = (data, id) => {
        //console.log(id)
        axios.interceptors.request.use(
            config => {
                config.headers.authorization = `Bearer ${this.props.token}`
                return config
            },

            error => {
                return Promise.reject(error)
            }
        );

        axios.patch('http://192.168.1.16:3000/api/v1/sample/'+id , data)
            .then(response => {
                //console.log(response)
                
                this.componentDidMount(true, this.state.page_number)
                //this.loader(x)
            })
            .catch(error => {
                console.log(error)
            })

        this.setState({openModel : false})
        this.setState({editModel : false})

    }

    searchHanlder = (text) => {
        //console.log(text)
        axios.get('http://192.168.1.16:3000/api/v1/sample/getSample?species='+text)
            .then(response => {
                this.setState({items : response.data.data.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
            })
    }


    logout = () => { // this is for logging out
        if(window.confirm('Are you Sure you want to LOGOUT?'))
        {
            this.props.authy()
        }
    }

    loadnextpage = () => {
        if(this.state.page_number === Math.ceil(this.state.total_element/20))
        {}else{
            this.setState({page_number: this.state.page_number+1})
            this.loader(this.state.page_number+1);
        } 
    }

    loadprevpage = () => {
        if(this.state.page_number === 1)
        {}
        else{
            this.setState({page_number: this.state.page_number-1})
            this.loader(this.state.page_number-1);
        }
    }

    render() {
        const {items, errorMsg , openModel , data , editModel , page_number , total_element} = this.state

        return (
            <div className="EDIT">
                {openModel && <Model data={this.createSample}  openmodel={() => this.closeModel()} edit={data} editreq={editModel} update={this.updateSample}/>} 
                <div className="edit_search_bar"> 
                    <button onClick={this.logout.bind(this)} id="logout_btn">Log Out </button>
                    <button onClick={this.openModel.bind(this) } id="create_btn">Create New Sample</button>
                </div>
                <SearchBar text={this.searchHanlder} />
                <Pager data={page_number} next={this.loadnextpage} prev={this.loadprevpage} total={total_element}/>
                <div className = "edit_herbarium">
                    
                    {items.length ? items.map(item => <SpecimenCard key={item._id} data={item} edit={this.editSample} del={this.deleteSample.bind(this)}/>) : null}
                    {errorMsg ? <div>{errorMsg} </div> : null}
                </div>
                
            </div>
        )

    }
   
}

export default Edit
