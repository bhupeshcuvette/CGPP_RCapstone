import React , {useState} from "react";
import "./Category.css";
import Action from "../../images/action.png";
import Fiction from "../../images/avatar.png";
import Drama from "../../images/drama.png";
import Fantasy from "../../images/fantasy.png";
import Horror from "../../images/horror.png";
import Music from "../../images/music.png";
import Romance from "../../images/romance.png";
import Thriller from "../../images/thriller.png";
import Western from "../../images/western.png";
import { useNavigate } from "react-router-dom";

const categoryType=[
    {
        id:0,
        type:"Action",
        color:"#FF5209",
        image : <img src={Action}/>
    },
    {
        id:1,
        type:"Drama",
        color:"#D7A4FF",
        image : <img src={Drama} />
    },
    {
        id:2,
        type:"Romance",
        color:"#148A08",
        image:<img src={Romance}/>
    },
    {
        id:3,
        type:"Thriller",
        color:"#84C2FF",
        image:<img src={Thriller}/>
    },
    {
        id:4,
        type:"Western",
        color:"#912500",
        image:<img src={Western}/>   
    },
    {
        id:5,
        type:"Horror",
        color:"#7358FF",
        image:<img src={Horror}/>
    },
    {
        id:6,
        type:"Fantasy",
        color:"#FF4ADE",
        image:<img src={Fantasy}/>
    },
    {
        id:7,
        type:"Music",
        color:"#E61E32",
        image: <img src={Music}/>
    },
    {
        id:8,
        type:"Fiction",
        color:"#6CD061",
        image: <img  src={Fiction}/>
    }

] 

const Category =()=>{
      
    const [categories,setCategories]=useState([])
    const [checked,setChecked]=useState(false);
    const donavigate=useNavigate();

    const delSelectedCategory=(e)=>{
        const updatedCategories = categories.filter((category1)=>category1!==e);
        setCategories(updatedCategories);
    }

    const handleClick=(e)=>{
        if(categories.includes(e)){
            setCategories(categories.filter((index)=>index!==e));
        }
        else{
            setCategories([...categories,e]);
        }
        setChecked(!checked);
    }

    const performNext=()=>{
        if(categories.length<3){
            alert("Select atleast 3 catagories ");
        }
        else{
            window.localStorage.setItem("entertainmentData",JSON.stringify(categories));
            donavigate('/homepage');
        }

    }
    return (
        <div className="body">
            <div className="left">
                <p className="left-up">Super App</p>
                <p className="left-cat-text">Choose your <br/> entertainment <br/> category </p>
                <div className="selCatagory">
                    {
                        categories.map((category)=>{
                            return(
                                <div className="displayselCatagory">
                                <span>{category}</span>
                                <p id={category} className="delBtn" onClick={()=>delSelectedCategory(category)}>X</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="right">
                    <div className="indCategory">
                    {
                        categoryType.map((selCat)=>(
                            <div id={selCat.id} style={{backgroundColor:selCat.color}} className="catGrid" onClick={()=>handleClick(selCat.type)}>
                            <div className="selCatagories">
                                <div className="type-text-cat">
                                    <span>{selCat.type}</span>
                                    <img className="Test" src={selCat.image}></img>
                                </div>
                                
                            </div>
                            </div>
                        ))
                    }
                    </div>
                    <button className="next-button" onClick={performNext}>Next Page</button>
                    
            </div>
        </div>
        
    )

}

export default Category;