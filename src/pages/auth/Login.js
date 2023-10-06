import React from 'react'
import NewForm from '../../componants/share/NewForm'
import {useSelector } from 'react-redux'
import Spinner from '../../componants/share/Spinner'





function Login() {
  const {loading,error} = useSelector(state =>state.auth)
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading?<Spinner/> :(<div className='row'>
        <div className=' col-md-8 form-banner'>
            <img src='./assets/images\banner1.jpg' alt=''/>
        </div>

        
        <div className='col-md-4 form-container'>
     <NewForm formType={"login"} submitbtn={"Login"} formtitle={"Login Page"}/>
        </div>

      
    </div>)}
    </>
  )
}

export default Login
