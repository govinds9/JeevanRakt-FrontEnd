import store from "../Redux/Store"
import { userLogin, userRegister } from "../Redux/features/auth/Authaction"


export const handleLogin =(e,email,password,role)=>{
    e.preventDefault()
    try {
       store.dispatch(userLogin({email,password,role}))
    } catch (error) {
        console.log(error)
    }
}
export const handleRegister =(e,email,password,name ,role,organisationName,hospital,website,phone,address)=>{
    e.preventDefault()
    try {
        store.dispatch(userRegister({email,password,name ,role,organisationName,hospital,website,phone,address}))
        
    } catch (error) {
        console.log(error)
    }
}
