import React,{useState} from 'react';
import "./Notes.css";
import Circle from "../../images/circle.png";
import Editpen from "../../images/editpen.png";

const Notes=()=>{
    const [desc,setDesc]=useState(JSON.parse(window.localStorage.getItem("desc")));
    const [doEdit,setdoEdit]=useState(false);

    const handleChange =(e)=>{
        setDesc(e.target.value);
        window.localStorage.setItem("desc",JSON.stringify(desc));
    }

    const handleEdit=()=>{
        setdoEdit(!doEdit);
    }

    return(
        <div className='all-notes'>
            <span className='top-text'>All Notes</span>
            <textarea value={desc} onChange={handleChange} disabled={doEdit} className='text-area-prop'></textarea>
            <div className='edit-portion'>
                <img src={Circle} className='circle'></img>
                <img src={Editpen} className='edit-pen' onClick={handleEdit}></img>
            </div>
        </div>
    )
}

export default Notes;