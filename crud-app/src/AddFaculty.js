import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function AddFaculty(){
    const navigate = useNavigate();
    const [data,setData]=useState({});
    const param = useParams();
    const apiURL = "https://630c9c9753a833c5342fe417.mockapi.io/Fauculties";

    useEffect(()=>{
        if(param.id>0){
            fetch(apiURL+"/"+param.id)
            .then((res)=>res.json())
            .then((data)=>setData(data))
        }
    },[])
    return(<>

        <div className='container2'>
        <table cellPadding={20}>
        <tr>
            <td class="font">Faculty's Name</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder="John" type="text" value={data.FacultyName} onChange={(e)=>{
                    setData({...data,FacultyName:e.target.value})
                }}/>
            </td>
            
        </tr>
        
        <tr>
            <td class="font">Faculty's Image Address</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder='https://john.jpeg' type="text" value={data.FacultyImage} onChange={(e)=>{
                    setData({...data,FacultyImage:e.target.value})
                }}/>
            </td>
        </tr>

        <tr>
            <td class="font">Faculty's City</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder='New York' type="text" value={data.FacultyCity} onChange={(e)=>{
                    setData({...data,FacultyCity:e.target.value})
                }}/>
            </td>
            
        </tr>

        <tr>
            <td class="font">Faculty's Salary</td>
            <td class="font">:</td>
            <td class="font">
                <input class="input" placeholder='1245$' type="text" value={data.FacultySalary} onChange={(e)=>{
                    setData({...data,FacultySalary:e.target.value})
                }}/>
            </td>
            
        </tr>

        <tr>
            <td><button class="button2" onClick={()=>{
                if(!param.id>0){
                        fetch(apiURL, {
                            method:"POST",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        })
                        .then((res)=>{
                            navigate("/Fauculties")
                        })
                    }
                    else{
                        fetch(apiURL+"/"+param.id, {
                            method:"PUT",
                            body:JSON.stringify(data),
                            headers:{
                                "Content-Type":"application/json"
                            }
                        })
                        .then((res)=>{
                            navigate("/Fauculties")
                        })
                    }
                }
            }>
                {!param.id>0 && "Add"}
                {param.id>0 && "Edit"} Faculty
            </button></td>
        </tr>
        </table></div>      
    </>)
}