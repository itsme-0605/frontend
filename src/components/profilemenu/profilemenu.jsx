import "./profilemenu.css";

import React, {useState, useEffect, useRef} from 'react';

export default function Profilemenu(){
  const [open, setOpen] = useState(false);

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);


    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  return(
    <div className="profilemenuContainer" ref={menuRef} >
      <div className="profilemenuTrigger"  onClick={()=>{setOpen(!open)}}>
        <img className="profilemenuImg" src="https://i.pinimg.com/564x/97/bb/fc/97bbfc02c3a801b42673d99b4c93d3d2.jpg" alt=""/>
        </div>  
      <div className={`profilemenuDropdown  ${open? 'active' : 'inactive'}`}>
        <ul>
          <li className="profilemenuContent">
            <a href="profile">Profile</a></li>
          <li className="profilemenuContent">
            <a href="login">Logout</a></li>
          <li className="profilemenuContent">
            <a href="#">Your Blog</a></li>
        </ul>
      </div>
    </div>
  );
}