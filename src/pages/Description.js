import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


export const Description = () => {
    const {condata}=useContext(UserContext)
    const[show,setShow]=useState(false)
    const showForm=()=>{
        setShow(!show)
    }
    const[credentials,setCredentials]=useState({email:"",password:""})
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCredentials((prev)=>{
            return({...prev,[name]:value})
        })
    }
   const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("credentials",JSON.stringify(credentials))
    }
    const {desc}=useContext(UserContext)
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">This is Description</h1>
        <p className="col-lg-10 fs-4">{desc}</p>
        <button className='btn btn-danger' onClick={showForm}>BOOK</button>
      </div>
      {show?
      <div className="col-md-10 mx-auto col-lg-5 text-center">
     
        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
        <p>Movie Name:{condata.show.name}</p>
    <p>Language: {condata.show.language}</p>
    <p> Time :{condata.show.schedule.time}</p>
    <p>Day :{condata.show.schedule.days}</p>
          <div className="form-floating mb-3">
            <input onChange={handleChange} type="email" name="email" value={credentials.email} className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={handleChange} type="password" value={credentials.password} name="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
        
          <button className="w-100 btn btn-lg btn-primary"  type="submit">Sign up</button>
          <hr className="my-4"/>
          <small className="text-muted">By clicking Sign up, you will store your data in localstorage.</small>
        </form>
      </div>:null}
    </div>
    </div>
  )}






{/* <div>
 {  show? <Form/>:null}
        {desc}
        <button className='btn btn-danger' onClick={showForm}>BOOK</button>
    </div> */}