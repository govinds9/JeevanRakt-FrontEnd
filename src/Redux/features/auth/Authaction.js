
import { createAsyncThunk } from "@reduxjs/toolkit"; 
import Api from "../../../services/Api";
import {  toast } from 'react-toastify';

// login
export const userLogin = createAsyncThunk(
    'auth/login',
    async ({email,password,role},{rejectWithValue})=>{


        try {
            const {data} = await Api.post('auth/login',{email,password,role})

        // store data locally
        if(data.success){
            localStorage.setItem('token',data.token)
            toast.success(data.message)

            
                window.location.replace("/")
           
        }
        
    
        return data;

            
        } catch (error) {
            if(error.response && error.response.data.message)return rejectWithValue(error.response.data.message)
            else {
            
                return rejectWithValue(error.message)
            }
        }

    }
)


// Register


export const userRegister = createAsyncThunk(
    "auth/register",
    async ({email,password,name ,role,organisationName,hospital,website,phone,address},{rejectWithValue})=>{

        try {
            const {data} = await Api.post("auth/register",{email,password,name ,role,organisationName,hospital,website,phone,address})
            if(data.success){
                toast.success(data.message)
                // direct to login page

                 
                    window.location.replace("/login")
               
            }
            return data;
            
        } catch (error) {
            if(error.response && error.response.data.message)return rejectWithValue(error.response.data.message)
            else {
        return  rejectWithValue(error.message)
        }
            
        }
    }

    )


    // get new user 
    export const getCurrentUser = createAsyncThunk(
        "auth/getCurrentUser",
        async ({rejectWithValue})=>{
            try {

                const res =await Api.get('/auth/current-user')
                if(res && res.data){
                    return res&& res.data; 
                }
                
            } catch (error) {
                if(error.response && error.response.data.message)return rejectWithValue(error.response.data.message)
            else {
                return  rejectWithValue(error.message)
            }
        }
    }
    )