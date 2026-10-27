import axios from 'axios';
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
const Login = () => {

  let navigate = useNavigate()
  let [eye,setEye] = useState(false)
  let [register,setRegister]=useState({
    password:"",
    email:""
  })
  let HandleEye =()=>{
    setEye(!eye)
  }
  let handleChange=(e)=>{
    let {name,value} = e.target;
    setRegister({...register,[name]:value})
  }

  let {password,email} = register;

let handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       let result = await axios.get("http://localhost:4600/user")
      console.log( result.data);

      let loginData= result.data.find((value)=>{
        return   value.email === email && value.password === password
      } )
      if(loginData){
        localStorage.setItem("users",JSON.stringify(loginData))
        toast.success(`${email} has been successfully Logged In`)
      navigate("/")
      }
      else{
        console.log(error);
        
      }
      
    } catch (error) {
       toast.error(error.slice(0,20))
       console.log(error);
       
    }
   
}

  return (
    <section className='flex justify-center items-center flex-col gap-20'>
  
      <h1>Login Form</h1>
      <form action="" onSubmit={handleSubmit} className=' w-[400px] flex justify-center flex-col items-center'>
       
         <div className='flex flex-col'>
          <label htmlFor="">Email Address</label>
          <input type="email" name='email' value={email} placeholder='Email Address' className='border rounded w-[250px]' onChange={handleChange}/>
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor="">Password</label>
          <input type={eye?"text":"password"} placeholder='password' name='password' value={password} className='border rounded w-[250px]' onChange={handleChange}/>
        <div onClick={HandleEye} className='absolute left-[227px] top-[30px]'>
          {eye?<FaEye />:<FaEyeSlash />}
        </div>
        </div>
        
      
          <div className='w-[60%] flex justify-end p-1'>
            <NavLink to="/register" className="text-[10px] hover:text-blue-600">Dont have an Account?</NavLink>
          </div>
        <div>
          <button className='bg-green-700 text-white px-3 py-2 rounded mt-4'>Register</button>
        </div>
      </form>
    </section>
  )
}

export default Login