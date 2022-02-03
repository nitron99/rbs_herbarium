import React from 'react'
import {Route, Redirect} from 'react-router-dom';

function ProtectedRoute({authy, isAuth  , component: Component, ...rest}) {
    const logout = () => {
        if(authy)
        {
           authy(true)
        }else{
            authy(false)
        }
    }
    

    return (
       <Route {...rest} 
            render={(props) => {
                if(isAuth)
                {
                    return (<Component authy={logout}/> )
                }else{
                    return(
                        <Redirect to={{pathname: '/login' , state: {from: props.location}}} />
                    )
                    
                }
            }} />
    )
}

export default ProtectedRoute
