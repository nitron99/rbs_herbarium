import React, {useState} from 'react'
import './model.css'

const Model = ({data, openmodel , edit : editData , editreq  , update}) => {

    const [family, setFamily] = useState(editreq ? editData.family : "")
    const [genus, setGenus] = useState(editreq ? editData.genus : "")
    const [species, setSpecies] = useState(editreq ? editData.species : "")
    const [date_of_collection, setDate_of_collection] = useState(editreq ? editData.timeofcollection : "")
    const [site_of_collection, setSite_of_collection] = useState(editreq ? editData.siteofcollection : "")
    const [name_of_collector, setName_of_collector] = useState(editreq ? editData.nameofcollector : "")
    const [image, setImage] = useState("");
    const [imagename, setImagename] = useState("");
    const newEntry = new FormData();

    
    const submitEntry = (e) => {
        e.preventDefault() 
    
        newEntry.append('species', species)
        newEntry.append('genus', genus)
        newEntry.append('family', family)
        newEntry.append('image', image , imagename);
        newEntry.append('siteofcollection', site_of_collection)
        newEntry.append('timeofcollection', date_of_collection)
        newEntry.append('nameofcollector', name_of_collector)
        
        data(newEntry)
        //console.log(newEntry)
        openmodel()
    }

    const updateEntry = (e) => {
        e.preventDefault()
        
        const updatedEntry = {species : species,
            genus : genus,
            family : family,
            siteofcollection : site_of_collection ,
            timeofcollection : date_of_collection,
            nameofcollector : name_of_collector}

        update(updatedEntry , editData._id)
        openmodel()     
    }

    const filesSelectedHandler = (e) => {
            setImage(e.target.files[0]);
            setImagename(e.target.files[0].name);     
    }

    const closemodel = () =>{
        openmodel()
    }

        return (
            <div className="MODEL">
                    
                    <div className="model">
                    <img id="model_close_btn" src="/assets/images/cancel.png" alt="" onClick={closemodel} ></img>
                        <form action="" onSubmit={editreq ? updateEntry : submitEntry} className="form">
                            <div className="family">
                            <label htmlFor="">Family</label>
                            <input className="family_in" type="text" name="family" id="email" autoComplete="off" value={family}
                               required onChange={(e) => setFamily(e.target.value) }/>
                        </div>
                        <div className="genus">
                            <label htmlFor="password">Genus</label>
                            <input className="genus_in" type="text" name="genus"  autoComplete="off" value={genus}
                                required onChange={(e) => setGenus(e.target.value)}/>
                        </div> 
                        <div className="species">
                            <label htmlFor="email">Species</label>
                            <input className="species_in" type="text" name="species" autoComplete="off" value={species}
                                required onChange={(e) => setSpecies(e.target.value)}/>
                        </div>
                        <div className="date_of_collection">
                            <label htmlFor="email">Date of Collection</label>
                            <input className="date_of_collection_in" type="text" name="date_of_collection"  autoComplete="off" value={date_of_collection}
                                required onChange={(e) => setDate_of_collection(e.target.value)}/>
                        </div>
                        <div className="site_of_collection">
                            <label htmlFor="email">Site of Collection</label>
                            <input className="site_of_collection_in" type="text" name="site_of_collection"  autoComplete="off" value={site_of_collection}
                                required onChange={(e) => setSite_of_collection(e.target.value)}/>
                        </div>
                        <div className="name_of_collector">
                            <label htmlFor="email">Name of Collector</label>
                            <input className="name_of_collector_in" type="text" name="email" id="name_of_collector" autoComplete="off" value={name_of_collector}
                                required onChange={(e) => setName_of_collector(e.target.value)}/>
                        </div> 

                        {editreq? <div className="error_text" >for changing image, delete this sample and create new sample. </div> :  <div className="name_of_collector">
                            <input type="file"  className="upload_btn" 
                             required onChange={filesSelectedHandler}/>
                        </div>}

                        <button type="submit" className="submit_model">Submit</button>
                        
                    </form>
                </div>
        </div>
    )
}

export default Model

