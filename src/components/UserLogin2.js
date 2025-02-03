import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserLogin2() {
    const navigate=useNavigate();
var userEmail=useRef();
var userpassword=useRef();

   let Error=[];
   var[authentation,setauthentation]=useState();
    function f1(){
        navigate("/userlogin");
    }
    var Err=[];
    var [er,seter]=useState();
    //this curior function for going to the place the curior
    function curior(){
      // e.preventDefault();
     // alert("ok");
   
     if(!userEmail.current.value.trim()){
       Err.push("Email is required")
     }else if(!/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,}$/.test(userEmail.current.value.trim())){
      Err.push("Invalid Email Id")
     }

     if(!userpassword.current.value.trim()){
        Err.push("Password is required")
     }else if(userpassword.current.value<8){
      Err.push("Password should be eight digit")
     }
       if(Err.length>0){
        seter(Err[0]);
       }


         fetch(`http://localhost:7575/finde/{userEmail}`, {
           method: "GET",
         })
           .then((response) => {
             if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
             }
             return response.json(); 
           })
           .then((data) => {
             console.log(data);
           })
           .catch((error) => { 
            if(error){
              Error.push("email is not registered");
             if(Error.length>0){
              setauthentation(Error[0]);
             }
            }
           });
             if(Error.length>=0){
               alert("Wrong emailid")
               return;
             }else{
              alert("Login successfull")
               navigate("/userhome");
               return;
             }
    };
  return (
    <div className="row ul2">
    <div className="container userlogin2parent">
    <div className="row userlogin2parent">
    <form id="userlogin2">
      <h1>Login</h1>
      <div style={{color:'red'}}>{er}</div>
      <div style={{color:'red'}}>{authentation}</div>
     <label>Email</label><br/>
     <input id="uinput" type="email" ref={userEmail}/><br/>
     <label>Password</label><br/>
     <input id="uinput" type="password" ref={userpassword}/><br/><br/>
     <pre><button id="userlogin2btn" onClick={curior}type="submit">Enter</button>    <button onClick={f1}id="userlogin2btn" type="Submit">Register</button></pre>
    </form>
    </div>
    </div>
    </div>
  )
}
