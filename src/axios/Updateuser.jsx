import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate,useParams } from "react-router-dom";

const Updateuser=()=>{
    let [val, setVal]=useState({name:"",email:""});
    let change=(e)=>{
        setVal({...val,[e.target.name]:[e.target.value]})
    }
    let navigate=useNavigate();
    let sendd=(x)=>{
        x.preventDefault();
        axios.post("http://localhost:5000/users",val)
        .then(res=>{
            navigate("/")
        })
    }
    let {id}=useParams();
    console.log(id);
    useEffect(()=>{
        axios.get("http://localhost:5000/users/"+id,val)
        .then(res=> setVal(res.data))
    },[])

    function updateuser(e){
        e.preventDefault()
        axios.put("http://localhost:5000/users/"+id,val)
        .then(res=>navigate("/")) 
    }

    return(<div id="background"><center>
        
        <h1 id="updatetitle">Update Users</h1>
        
        <form action="">
        <input className="textbox select" type="text" placeholder="Enter your name" name="name" value={val.name} onChange={change}/>
        <br />
        <input className="textbox select" type="email" placeholder="Enter your email" name="email" value={val.email} onChange={change} />
        <br />
        <input type="submit" value="Update" onClick={sendd}  className="button select"/>
        </form>
        </center>
    </div>)
}

export default Updateuser