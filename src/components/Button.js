import React,{useEffect} from "react";
import "../styles/button.css"


const Button=(props)=>{
useEffect(()=>{return()=>{
    console.log("deleted from screen")
}},[])
return(
    <button onClick={props.onClick} className={props.buttonType} >{props.buttonName}</button>
)
}
export default Button