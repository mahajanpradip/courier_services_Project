import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AdminLogin() {
// const adminidRef=useRef();
const adminnameRef=useRef();
const adminemailRef=useRef();
const adminpasswordRef=useRef();
const adminmobilenoRef=useRef();
const adminaddressRef=useRef();


const navigate=useNavigate();

function f1(){
  navigate("/adminlogin2");
}

var[Er,SetEr]=useState("");
var Errors=[];
const hanndeladminform=(e)=>{
e.preventDefault();




// if(!adminidRef.current.value.trim()){
//   Errors.push("id is required");
// }else if(!/^\d+$/.test(adminidRef.current.value)){
//   Errors.push(" id should be in numberonly");
// }

if(!adminnameRef.current.value.trim()){
   Errors.push("name is required");
}else if(adminnameRef.current.value.length<2){
  Errors.push(" name should be at least 3 charactors");
}

if(!adminemailRef.current.value.trim()){
  Errors.push("email is required");
}else if(!/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,}$/.test(adminemailRef.current.value.trim())){
 Errors.push("invalid email");
}

if(!adminpasswordRef.current.value.trim()){
  Errors.push("password is required");
}else if(adminpasswordRef.current.value.length<8){
  Errors.push("password is 8 numbers");
}

if(!adminmobilenoRef.current.value.trim()){
  Errors.push("mobile number is required");
}else if(adminmobilenoRef.current.value.length !== 10){
  Errors.push("mobile number 10 digit");
}

if(!adminaddressRef.current.value.trim()){
  Errors.push("address is required");
}



const admindata={
  // adminidRef:adminidRef.current.value,
  adminnameRef:adminnameRef.current.value,
  adminemailRef:adminemailRef.current.length,
  adminpasswordRef:adminpasswordRef.current.value,
  adminmobilenoRef:adminmobilenoRef.current.value,
  adminaddressRef:adminaddressRef.current.value,
}

if(Errors.length>0){
  SetEr(Errors[0]);
}else{
alert("Registraction Sucessfull");
navigate("/adminlogin2");
}
}

  return (
    <div className="row adminform1">
    <div className="container adminform">
    <div className="row">
      <form onSubmit={hanndeladminform}>
       <h1>Register</h1>
       <p style={{color:'red'}}>{Er}</p>
          {/* <label>AdminID</label><br/>
          <input id="admininput" type="Number" ref={adminidRef} /> */}
          <br/>
          <label>Name</label><br/>
          <input id="admininput" type="text" ref={adminnameRef} />
          <br/>
          <label>Email</label><br/>
          <input id="admininput" type="email" ref={adminemailRef} />
          <br/>
          <label>Password</label><br/>
          <input id="admininput" type="Number" ref={adminpasswordRef} />
          <br/>
          <label>MobileNo</label><br/>
          <input id="admininput" type="Number" ref={adminmobilenoRef} />
          <br/>
          <label>Address</label><br/>
          <textarea id="admininput" ref={adminaddressRef} ></textarea>
          <br/>
          <pre><button id="adminbutton" type="submit">SignIn</button>   <button onClick={f1} id="adminbutton" type="submit">Login</button></pre>

      </form>
    </div>
  </div>
  </div>
  )
}
