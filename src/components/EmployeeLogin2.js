import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function EmployeeLogin2() {
    const navigate=useNavigate();
    function f1(){
        navigate("/employeelogin");
      }
      function f2(){
        navigate("/employeehome");
      }
  return (
    <div className="row">
    <div className="container employeelogin2parent">
    <div className="row userlogin2parent">
    <form id="employeelogin2">
     <label>Email</label><br/>
     <input id="einput" type="email"/><br/>
     <label>Password</label><br/>
     <input id="einput" type="password"/><br/><br/>
     <pre><button id="employeelogin2btn" type="Submit" onClick={f2}>Enter</button>    <button onClick={f1} id="employeelogin2btn" type="Submit">Register</button></pre>
    </form>
   
    </div>
    </div>
    </div>
  )
}
