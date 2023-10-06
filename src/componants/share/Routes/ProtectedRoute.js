import React ,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Api from '../../../services/Api';
import { getCurrentUser } from '../../../Redux/features/auth/Authaction';

import {Navigate} from 'react-router-dom'

function ProtectedRoute({children}) {
    const dispatch = useDispatch();
    // get user 
    const getuser = async ()=>{
        try {
            const {data} = await Api.get('/auth/current-user')
            if(data && data.success){
                dispatch(getCurrentUser(data))
            }
        } catch (error) {
            localStorage.clear();
            console.log(error)
        }
    }
    useEffect(()=>{
        getuser()

    })

  if(localStorage.getItem('token')){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}

export default ProtectedRoute
