import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom';

export default function FacultyById(){
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const param = useParams();
    const apiURL = "https://630c9c9753a833c5342fe417.mockapi.io/Fauculties"
    useEffect(()=>{
        fetch(apiURL+"/"+param.id, {method:"GET"})
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);

    return(<>

        <div class="container2">
        <table cellPadding={10}>
            <tr>
                <td colSpan={3} align="center"><img height={300} width={300} src={data.FacultyImage}></img></td>
            </tr>
            <tr>
                <td><span class="font">Name</span></td>    
                <td><span class="font">:</span></td>
                <td><span class="font">{data.FacultyName}</span></td>
            </tr>
            <tr>
                <td><span class="font">City</span></td>    
                <td><span class="font">:</span></td>
                <td><span class="font">{data.FacultyCity}</span></td>
            </tr>
            <tr>
                <td><span class="font">Salary</span></td>    
                <td><span class="font">:</span></td>
                <td><span class="font">{data.FacultySalary}$</span></td>
            </tr>
            
        <tr>
            <td>
                <button class="button" onClick={()=>{
                    fetch(apiURL+"/"+param.id, {method: "Delete"})
                    .then((res)=>{
                        navigate("/Fauculties")
                    })
                }}>Delete</button>
            </td>
           
            <td>
                <button class="button" onClick={()=>{
                    navigate("../Fauculties/Edit/"+param.id)
                }}>Edit</button>
            </td>
            
        </tr>
        </table></div>
    </>)
}