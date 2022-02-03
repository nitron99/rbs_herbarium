import React, {useState} from 'react'
import './search_bar.css';

function Search_bar({text }) {

    const [search_text , setSearch_text] = useState('');

    const search_fun = (e) =>{
        e.preventDefault() 
        text(search_text)
    }
    
    return (
        <div className="SEARCH_BAR">
            <div className="search_bar">
                <form action=""  onSubmit={search_fun} className="search_form">
                    <input className="search_input" type="text" name="search"  autoComplete="off" value={search_text} 
                            placeholder='Search Bar'    onChange={(e) => setSearch_text(e.target.value)}/>
                                
                    <img id="search_btn" src="/assets/images/search.png" alt="" onClick={(e) => search_fun(e)} ></img>
                         
                </form>
            </div>
        </div>
    )
}

export default Search_bar
