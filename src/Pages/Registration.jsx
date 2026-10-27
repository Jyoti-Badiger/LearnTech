import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Register = () => {
  let [eye,setEye] = useState(false)
  let [register,setRegister]=useState({
    username:"",
    password:"",
    confirmPassword:"",
    email:""
  })
  let HandleEye =()=>{
    setEye(!eye)
  }
  let handleChange=(e)=>{
    let {name,value} = e.target;
    setRegister({...register,[name]:value})
  }

  let {username,password,confirmPassword,email} = register;

  let handleSubmit=async(e)=>{
    e.preventDefault()

    let getting = await axios.get("http://localhost:4600/users")
       let RegisteredEmail = getting.data.find((x)=>x.email === email)
    if(password !== confirmPassword){
       toast.error("Password and confirm Password is Not Matching")
       return;
    }
    if(password.length < 6){
      toast.error("Password length should be greater than 6 Characters")
      return;
    }
    if(username === "" || password === "" || confirmPassword ==="" || email === "" )
    {
      toast.error("All fields are Mandatory");
      return
    }
  if(RegisteredEmail){
    toast.error(`${email} has been Already registered`)
    return;
  }
   try {
    let data1 =await axios.post("http://localhost:4600/user",register)
    toast.success(`${email} has been Succssfully registered`)
    
   } catch (error) {
    console.log(error);
    toast.error("Something went wrong")
   }
   finally{
    setRegister({
    username:"",
    password:"",
    confirmPassword:"",
    email:""
  })
   }
  }

  return (
    <section className='flex justify-center items-center flex-col gap-20'>
      
      <h1>Register Form</h1>
      <form action="" onSubmit={handleSubmit} className=' w-[400px] flex justify-center flex-col items-center'>
        <div className='flex flex-col'>
          <label htmlFor="">Username</label>
          <input type="text" placeholder='UserName' className='border rounded w-[250px]' name='username' value={username} onChange={handleChange} />
        </div>
        <div className='flex flex-col relative'>
          <label htmlFor="">Password</label>
          <input type={eye?"text":"password"} placeholder='password' name='password' value={password} className='border rounded w-[250px]' onChange={handleChange}/>
        <div onClick={HandleEye} className='absolute left-[227px] top-[30px]'>
          {eye?<FaEye />:<FaEyeSlash />}
        </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Confirm Password</label>
          <input type='text' placeholder='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={handleChange} className='border rounded w-[250px]'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Email Address</label>
          <input type="email" name='email' value={email} placeholder='Email Address' className='border rounded w-[250px]' onChange={handleChange}/>
        </div>
          <div className=' w-[60%] flex justify-end p-1'>
            <NavLink to="/login" className="text-[10px] hover:text-blue-600">Already have an Account?</NavLink>
          </div>
        <div>
          <button className='bg-green-700 text-white px-3 py-2 rounded mt-4'>Register</button>
        </div>
      </form>
    </section>
  )
}

export default Register