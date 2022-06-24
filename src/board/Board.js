import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import DirectionsBoat from '@mui/icons-material/DirectionsBoat';
import DirectionsBike from '@mui/icons-material/DirectionsBike';
import DirectionsBus from '@mui/icons-material/DirectionsBus';
import BoardList1 from "./BoardList1";
import BoardList2 from "./BoardList2";
import BoardList3 from "./BoardList3";      

const Board=()=>{
    const [show,setShow]=useState();
    const navi=useNavigate();
    return (
        <div>
            <h1>Board</h1>
            <button className="btn btn-success"
            onClick={()=>{
                navi("/board/form")
            }}>글쓰기</button>

            <DirectionsBoat style={{cursor:'pointer',fontSize:'30px'}}
            onClick={()=>{
                setShow(1);
            }}/>
             <DirectionsBike style={{cursor:'pointer',fontSize:'30px'}}
            onClick={()=>{
                setShow(2);
            }}/>
             <DirectionsBus style={{cursor:'pointer',fontSize:'30px'}}
            onClick={()=>{
                setShow(3);
            }}/>
             

            {show===1?<BoardList1/>:show===2?<BoardList2/>:<BoardList3/>}
        </div>
    )
}

export default Board;