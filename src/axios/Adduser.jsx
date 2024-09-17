import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Adduser=()=>{
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
    console.log(val);
    return(<div  id="background">
        <h1 id="updatetitle">Add Users</h1>
        <center>
        <form action="">
        <input className="textbox select" type="text" placeholder="Enter your name" name="name" value={val.name} onChange={change}/>
        <br />
        <input className="textbox select" type="email" placeholder="Enter your email" name="email" value={val.email} onChange={change} />
        <br />
        <input type="submit" value="Add" onClick={sendd} className="button select"/>
        </form>
        </center>
    </div>)
}

export default Adduser