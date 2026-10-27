import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export let Context = createContext()
const AuthContext = ({ children }) => {
   let [users,setUsers] = useState()
   let [loading,setLoading] = useState(false)
   useEffect(()=>{
    let fetching=()=>{
        let data = localStorage.getItem("users")
     setUsers(JSON.parse(data))
    }
    fetching()
   },[])

   let logout = () =>{
    localStorage.removeItem("users")
    setUsers(null)
    toast.success("User has been logout successfully");
   }

   
    return (
        <Context.Provider value={{users,logout,setLoading}}>
            {children}
        </Context.Provider>
    )
}

export default AuthContext