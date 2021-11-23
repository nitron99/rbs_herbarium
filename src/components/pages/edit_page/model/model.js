import React, {useState} from 'react'
import './model.css'

const Model = ({data : data , openmodel : openmodel , edit : editData , editreq : editreq , update: update}) => {

    const [family, setFamily] = useState(editreq ? editData.family : "")
    const [genus, setGenus] = useState(editreq ? editData.genus : "")
    const [species, setSpecies] = useState(editreq ? editData.species : "")
    const [date_of_collection, setDate_of_collection] = useState(editreq ? editData.timeofcollection : "")
    const [site_of_collection, setSite_of_collection] = useState(editreq ? editData.siteofcollection : "")
    const [name_of_collector, setName_of_collector] = useState(editreq ? editData.nameofcollector : "")
    const [image, setImage] = useState("")

    const submitEntry = (e) => {
        e.preventDefault()
        const newEntry = {species : species,
        genus : genus,
        family : family ,
        image : "",
        siteofcollection : site_of_collection ,
        timeofcollection : date_of_collection,
        nameofcollector : name_of_collector}
        
        data(newEntry)
        openmodel()
    }

    const updateEntry = (e) => {
        e.preventDefault()
        const newEntry = {species : species,
            genus : genus,
            family : family ,
            image : "",
            siteofcollection : site_of_collection ,
            timeofcollection : date_of_collection,
            nameofcollector : name_of_collector}
        update(newEntry , editData._id)

        
        
    }


        return (
            <div className="MODEL">
                    <div className="model">
                        <form action="" onSubmit={editreq ? updateEntry : submitEntry} className="form">
                            <div className="family">
                            <label htmlFor="">Family</label>
                            <input className="family_in" type="text" name="family" id="email" autoComplete="off" value={family}
                                onChange={(e) => setFamily(e.target.value)}/>
                        </div>
                        <div className="genus">
                            <label htmlFor="password">Genus</label>
                            <input className="genus_in" type="text" name="genus"  autoComplete="off" value={genus}
                                 onChange={(e) => setGenus(e.target.value)}/>
                        </div> 
                        <div className="species">
                            <label htmlFor="email">Species</label>
                            <input className="species_in" type="text" name="species" autoComplete="off" value={species}
                                 onChange={(e) => setSpecies(e.target.value)}/>
                        </div>
                        <div className="date_of_collection">
                            <label htmlFor="email">Date of Collection</label>
                            <input className="date_of_collection_in" type="text" name="date_of_collection"  autoComplete="off" value={date_of_collection}
                                 onChange={(e) => setDate_of_collection(e.target.value)}/>
                        </div>
                        <div className="site_of_collection">
                            <label htmlFor="email">Site of Collection</label>
                            <input className="site_of_collection_in" type="text" name="site_of_collection"  autoComplete="off" value={site_of_collection}
                                 onChange={(e) => setSite_of_collection(e.target.value)}/>
                        </div>
                        <div className="name_of_collector">
                            <label htmlFor="email">Name of Collector</label>
                            <input className="name_of_collector_in" type="text" name="email" id="name_of_collector" autoComplete="off" value={name_of_collector}
                                 onChange={(e) => setName_of_collector(e.target.value)}/>
                        </div> 

                        <button type="submit" className="submit_model">Submit</button>
                        
                    </form>
                </div>
        </div>
    )
}

export default Model

