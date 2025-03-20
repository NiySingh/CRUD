import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function UserTable(){
    console.log(useState(1));
    const [user,setUser]=useState("");
    const navigate = useNavigate();
    const DisplayDetails=(id)=>{
        navigate("/user/view/"+id)
    }
    const EditDetails=(id)=>{
        navigate("/user/edit/"+id);
    }
    const RemoveDetails=(id)=>{
        if(window.confirm("Are you sure you want to delete")){
                 
        fetch("http://localhost:8000/user/"+id,{
            method:'DELETE',        
        })
        .then((res)=>{
            alert("Deleted succesfully");
            window.location.reload();
        })
        .catch((err)=>console.log(err.message)
    )
        }
    }
    useEffect(()=>{
        fetch('http://localhost:8000/user')
        .then((res)=>res.json())
        .then((data)=>
            setUser(data)).catch((err)=>
                console.log(err.message))
        
    },[])
    return(
        <div className="container">
            <h2>User Records</h2>
            <div className="table-container">

                <Link to="/user/create" className="btn btn-add">Add new User</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       { 
                       user && user.map((item,index)=>(
                        <tr key = {item.id}>
                        <tr key={index+1}/>
                        <td>{item.name}</td>
                        <td>{item.place}</td>
                        <td>{item.phone}</td>
                        <td>
                            <button onClick={()=>DisplayDetails(item.id)} className="btn btn-info">View</button>
                            <button onClick={()=>{EditDetails(item.id)}} className="btn btn-primary">Edit</button>
                            <button onClick={()=>{RemoveDetails(item.id)}} className="btn btn-danger">Delete</button>                            </td>
                    </tr>
                       )
                    )
                       
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
}