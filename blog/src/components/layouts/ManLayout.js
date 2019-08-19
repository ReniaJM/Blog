import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MainLayout extends Component
{

    render(){
        return(
           <div>
               <h1>This is main layout</h1>
               <div>
                   <ul>
                       <li>
                           <Link to={"/"}>Home</Link>
                       </li>
                       <li>
                           <Link to={"/about"}>About</Link>
                       </li>
                   </ul>
               </div>
               <div>{this.props.children}</div>
           </div>
        )
    }
}

export default MainLayout;