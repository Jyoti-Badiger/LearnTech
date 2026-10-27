import React from 'react'

const AllCourse = () => {
  let [state,setState] = useState()
  useEffect(()=>{
    let fetching=async()=>{
       let Fetchdata = await axios.get("http://localhost:4600/user")
       setState(Fetchdata.data)
    }
    fetching()
  },[])
  console.log(state);
  
  return (
       
    <section className='flex gap-10 flex-wrap'>
      (
        state?.map((value)=>{
          return(
            <div className='flex-'>

            </div>
          )
        })
      )
    </section>
  )
}

export default AllCourse