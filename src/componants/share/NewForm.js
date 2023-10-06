import React ,{useState} from 'react'
import InputType from './InputType'
import {Link} from "react-router-dom"
import { handleLogin, handleRegister } from '../../services/authservice';



    

function NewForm({formType,formtitle,submitbtn}) {
   const [email, setemail] =useState("");
   const [password, setpassword] =useState("");
   const [role, setrole] =useState("donar");
   const [name, setname] =useState("");
   const [organisationName, setorganisationName] =useState("");
   const [hospital, sethospital] =useState("");
   const [address, setaddress] =useState("");
   const [website, setwebsite] =useState("");
   const [phone, setphone] =useState("");


   const handleE =(e)=>{
    setemail(e.target.value)
   }
   const handleP =(e)=>{
    setpassword(e.target.value)
   }
   const handleN= (e)=>{
    setname(e.target.value)
   }

   const handleON= (e)=>{
    setorganisationName(e.target.value)
   }
   const handleH=(e)=>{
    sethospital(e.target.value)
   }
   const handleAD=(e)=>{
    setaddress(e.target.value)
   }
   const handleW=(e)=>{
    setwebsite(e.target.value);
   }
  const  handlePH=(e)=>{
    setphone(e.target.value)
  } 
   const handleR=(e)=>{
    setrole(e.target.value)

   }
  
  return (
    <div>
            <h1>{formtitle}</h1>
        <form onSubmit={(e)=>{
          if(formType==='login'){
            return handleLogin(e,email,password,role)
          }
          else if(formType==='register')return handleRegister(e,email,password,name ,role,organisationName,hospital,website,phone,address)
        }}>
            
            <hr/>
            <div className='d-flex mb-3'>
               {/* Donar */}
              <div className='form-check ms-2'>
              
                <input
                type="radio" className='form-check-input' name='role' id='donarRadio' value={"donar"} onChange={handleR} defaultChecked
                />
                <label htmlFor='donarRadio' className='form-check-label'>Donar</label>

              </div>
                 {/* Admin */}
              <div className='form-check ms-2'>
            
               <input
                type="radio" className='form-check-input' name='role' id='adminRadio' value={"admin"} onChange={handleR} 
                />
                <label htmlFor='adminRadio' className='form-check-label'>Admin</label>
              </div>
                 {/* Hospital */}
              <div className='form-check ms-2'>
                
                 <input
                type="radio" className='form-check-input' name='role' id='hospitalRadio' value={"hospital"} onChange={handleR} 
                />
                <label htmlFor='hospitalRadio' className='form-check-label'>Hospital</label>
              </div>
                  {/* Organisasion */}
              <div className='form-check ms-2'>
                
                <input
                type="radio" className='form-check-input' name='role' id='organisationRadio' value={"organisation"} onChange={handleR} 
                />
                <label htmlFor='organisationRadio' className='form-check-label'> Organisation</label>
              </div>



            </div>



            {(formType==="login") && (
              
                <>
                 <InputType label={'Email Address'} inptype={'email' } name={"email" } example={"email"} value={email} onchange={handleE} required={true}/>
                 <InputType label={"Password" } inptype={"password" } name={"password" } example={"password"} value={password} onchange={handleP} required={true}/> </>
  
              
            )
            }
            {(formType==="register")&&( <>
              <InputType label={'Email Address'} inptype={'email' } name={"email" } example={"email"} value={email} onchange={handleE} required={true}/>
            <InputType label={"Password" } inptype={"password" } name={"password" } example={"password"} value={password} onchange={handleP} required={true}/> 
            {/* for admin or donar  name is visible */}
            {(role==="admin" || role==="donar") && (<InputType label={"Name" } inptype={"text" } name={"name" } example={"forname"} value={name} onchange={handleN} required={true}/>)}
            {/* for organisation organisation name is visible */}
            {(role==="organisation")&& (<InputType label={"Organisation Name" } inptype={"text" } name={"organisationName" } example={"fororganisationName"} value={organisationName} onchange={handleON} required={true}/>)}
            
            {/* for hospital hopital name is visible */}
            {(role==="hospital" ) && (<InputType label={"Hospital Name" } inptype={"text" } name={"hospital" } example={"forhospital"} value={hospital} onchange={handleH} required={true}/>)}

            
            <InputType label={"Address" } inptype={"text" } name={"address" } example={"foraddress"} value={address} onchange={handleAD} required={true}/>
            <InputType label={"Website" } inptype={"text" } name={"website" } example={"forwebsite"} value={website} onchange={handleW} required={true}/>
            <InputType label={"Phone" } inptype={"text" } name={"phone" } example={"forphone"} value={phone} onchange={handlePH} required={true}/>

              </>)
            }
            
           
            {/* <InputType label={"Role" } inptype={"password" } name={"role" } example={"forrole"} value={role} onchange={handleR} required={true}/> */}
           <div className=' d-flex flex-row justify-content-between'>
           

            <div>
              {formType==="login"?(
                <p>Not Registered Yet? Register <Link to={"/register"}> here!</Link></p>
              ):(
                <p>Already Registered <Link to={"/login"}> Login!</Link></p>
              )}

            </div>
            <button className='btn btn-primary' type='submit'>{submitbtn}
            </button>
           </div>

        </form>
    </div>
  )
}

export default NewForm
