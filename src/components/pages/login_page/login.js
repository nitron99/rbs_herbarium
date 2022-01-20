import React, { useState } from 'react'
import './login.css';

import axios from 'axios';
import Edit from '../edit_page/edit';
import {BrowserRouter as Router, Switch, Route , Redirect ,useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";

const Login = ({authy: authy , token : token, ...rest}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    let history = useHistory()

    const submitform = (e) => {
        e.preventDefault()
        const newEntry = {email: email ,password: password}
        
        //console.log(newEntry)
        axios
            .post('http://192.168.1.16:3000/api/v1/user/login', newEntry)
            .then(response => {
               if(response.statusText === "OK") 
                { 
                    token(response.data.token)
                    authy() 
                    history.push('/edit')
                }else{
                    console.log("asd")
                }         
            })
            
            .catch(error => {
                setError(true)
            })
    }
    
        return(
            <div className="LOGIN">
                <div className="login">
                    <form action="" onSubmit={submitform} className="form">
                        <div className="EMAIL">
                            <label htmlFor="email">Email</label>
                            <input className="email" type="text" name="email" id="email" autoComplete="off" value={email}
                                required onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="PASSWORD">
                            <label htmlFor="password">Password</label>
                            <input className="password" type="password" name="password" id="password" autoComplete="off" value={password} 
                                required onChange={(e) => setPassword(e.target.value)}/>
                        </div>  

                        <button type="submit" className="submit">Login</button>
                        {error && "Invalid Login Credentials.."}
                        
                    </form>
                </div>
            </div>
        )
    
}

export default Login