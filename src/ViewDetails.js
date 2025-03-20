
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import "./ViewDetails.css"
import { useEffect, useState } from "react";

export default function ViewDetails(){

 
    const {userid}=useParams();
    const [userData,setuserData]=useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/user/"+userid)
        .then((res)=>res.json())
        .then((data)=>setuserData(data))
        .catch((err)=>console.log(err.message))

    },[]);
        
    return(
        <div className="user-details-wrapper">
        <div className="user-details-container">
            <h2>View User Details</h2>
            { userData && <div className="details">
                <p><strong>ID:</strong>{userData.id}</p>
                <p><strong>Name:</strong>{userData.name}</p>
                <p><strong>Place:</strong>{userData.place}</p>
                <p><strong>Phone:</strong>{userData.phone}</p>
            </div>}
            <Link to="/" class="btn btn-back">Back</Link>
            
</div>

            </div>
    );
}