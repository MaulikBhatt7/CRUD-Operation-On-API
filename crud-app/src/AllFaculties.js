import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
export default function AllFaculties(){
    const [data,setData] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("https://630c9c9753a833c5342fe417.mockapi.io/Fauculties")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[]);

    const Faculties = data.map((Faculty)=>{
        return(<>

            <div class="container">
               
                    <div class="col-4 fac">
                        <img class="img" src={Faculty.FacultyImage}></img><br/><br/>
                        <span class="font" onClick={()=>{
                            navigate("../Fauculties/"+Faculty.id);
                        }}>{Faculty.FacultyName}</span>

                    </div>
                
            </div>
            
        </>)
    })
    return(<>
        {Faculties}
    </>)
}