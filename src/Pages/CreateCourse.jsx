import React, { useState } from 'react'
import {useNavigate} from 'react-route-dom'

const CreateCourse = () => {
      
    let navigate = useNavigate()
    let [state, setState] = useState({
        cname: "",
        ctrainer: "",
        cdate: "",
        cdescription: ""
    })
    let { cname, ctrainer, cdate, cdescription } = state

    let handleChange = (e) => {

        console.log(e);


        let { name, value } = e.target

        setState({ ...state, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        try{
            let data = await axios.post("http://localhost:4600/user",state)
            toast.success("course has been added Successfully"
                navigate("/")
            )
        }catch(error){
            toast.error("Something went wrong")
            console.log(error);
            
        }
    }
    console.log(cname);

    return (
        <form action="" onSubmit={handleSubmit}>
            <section className='flex flex-col justify-between h-[80vh] w-[40vw] bg-gray-400 p-15'>
                <div className='flex flex-col'>
                    <label htmlFor="">Course Name</label>
                    <input type="text" placeholder='Course Name' name='cname' value={cname} onChange={handleChange} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Course Trainer</label>
                    <input type="text" placeholder='Trainer Name' name='ctrainer' value={ctrainer} onChange={handleChange} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Course Joining Date</label>
                    <input type="Date" placeholder='Course Craeted Date' name='cdate' value={cdate} onChange={handleChange} />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Course Description</label>
                    <input type="text" placeholder='Description' name='cdescription' value={cdescription} onChange={handleChange} />
                </div>

                <div className=''>
                    <button>CreateCourse</button>
                </div>
            </section>
        </form>
    )
}

export default CreateCourse