import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogin2() {
    const navigate=useNavigate();
   
    function f1(){
        navigate("/adminlogin");
    }
    function curior(e){
      e.preventDefault();
    //  navigate("/adminhandler");
    navigate("/adminhome");
    }
    
  return (
    <div className="row adminloginpagerow">
    <div className="container adminlogin2parent">
    <div className="row userlogin2parent">
    <form id="adminlogin2">
     <label>Email</label><br/>
     <input id="ainput" type="email"/><br/>
     <label>Password</label><br/>
     <input id="ainput" type="password"/><br/><br/>
     <pre><button onClick={curior}id="adminlogin2btn"  type="button">Enter</button>    <button onClick={f1} id="adminlogin2btn" type="button" >Register</button></pre>
    </form>
   
    </div>
    </div>
    </div>
  )
}
