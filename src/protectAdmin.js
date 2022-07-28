import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectAdmin =({component:Component, ...rest}) =>{
 

    
    return(
        <Route
            {...rest}
            render={
            (props)=>{
                if(localStorage.getItem('admintoken')){
                  // console.log('logged in')
                   return <Component {...props}/>
                  
                }
                else{
                    // console.log('not logged in')
                   localStorage.setItem('alert', 'Unauthorized access, please login or sign up')
                    return <Redirect to={
                       {
                           pathname:"/adminlogin"
                       }
                    }/>

                }
            }
        }/>
    )
}

export default ProtectAdmin;
