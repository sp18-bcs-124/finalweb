import React from "react"
import './App.css';
import {Link, withRouter} from "react-router-dom" 
import top from './top.jpg'



function Topbar(props){

return(
    <div>
   <div style ={{  backgroundColor:'black', marginTop: '-4px'  ,position:'relative'}}>
    <img style={{width:'1200px'}} src={top}/>
   
     </div>



     </div>   
);
}

export default withRouter(Topbar);