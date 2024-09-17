import axios from "axios";
import React, { useEffect ,useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const Getuser=()=>{
    let[api,setApi]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/users")
       .then((response)=>{
        const data=response.data;
        setApi(data);

       })
    .catch((error)=>{
        console.error("there was an error fetching the data",error);
    });       
    });
    let x=useNavigate();
    let nav=()=>{
        x("/add")
    }
    function del(id){
        axios.delete("http://localhost:5000/users/"+id);

    }

    return(
    <div id="background">
        <div id="crud">Crud Operations</div>
        <div id="table-container">
        <button  className="button select" id="addbutton" onClick={nav}>Add+</button>
        <table border="2" className="card bg-blur" id="tablee" style={{borderCollapse:"collapse"}}>
        <thead><tr><th>id</th><th>name</th><th>Email</th><th></th></tr></thead>
        <tbody>{api.map((res)=>{
            return(<tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>
                    <center><Link to={`/edit/${res.id}`}><button  className="button select">update</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  className="button select" onClick={()=>del(res.id)}>delete</button></center></td>
            </tr>)
        })}</tbody>
        </table>
      
</div>
    </div>
    
    )
}

export default Getuser