// import React, { useRef, useState } from "react";
// import {  useNavigate } from "react-router-dom";
// export default function UserLogin(){
//       const useridRef=useRef();
//      const usernameRef=useRef();
//      const useremailRef=useRef();
//      const userpasswordRef=useRef();
//      const usermobilenoRef=useRef();
//      const  useraddressRef=useRef();
// function f1(){
//   navigate("/userlogin2");
// }
// const navigate=useNavigate();


// var Errors=[];
// var[er,seter]=useState("");

// const handelform = async (e) => {
//   e.preventDefault();

//   if (!useridRef.current.value.trim()) {
//      Errors.push("User ID is required");
//   } else if (!/^\d+$/.test(useridRef.current.value)) {
//     Errors.push("ID should be in numbers only .");
//   }

//   if (!usernameRef.current.value.trim()) {
//     Errors.push("User name is required");
//   } else if (usernameRef.current.value.length < 2) {
//     Errors.push("Name should be at least more then 2 characters");
//   }

//   if (!useremailRef.current.value.trim()) {
//    Errors.push("Email is required");
//   } else if (!/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,}$/.test(useremailRef.
              
//     current.value.trim())) {
//     Errors.push("Invalid email");
//   }

//   if (!userpasswordRef.current.value.trim()) {
//     Errors.push("Password is required");
//   } else if (userpasswordRef.current.value.length < 8) {
//     Errors.push("Password should contain at least 8 characters");
//   }

//   if (!usermobilenoRef.current.value.trim()) {
//     Errors.push("Mobile number is required");
//   } else if (usermobilenoRef.current.value.length !== 10) {
//     Errors.push("Mobile number should contain 10 digits");
//   }

//   if (!useraddressRef.current.value.trim()) {
//     Errors.push("Address is required");
//   }

//   if(Errors.length>0){
//     seter(Errors[0]);
//   }else
//   {
//     navigate("/userlogin2")
//   }
//   const userdata = {
//      userid: useridRef.current.value,
//     username: usernameRef.current.value,
//     useremail: useremailRef.current.value,
//     userpassword: userpasswordRef.current.value,
//     usermobile: usermobilenoRef.current.value,
//     useraddress: useraddressRef.current.value,
//   };

//   console.log("Sending userdata:", userdata); 


// console.log("User data before sending:", userdata);

// try {
//   const response = await fetch("http://localhost:7575/getUsers", {
//     method: "POST",
//     body: JSON.stringify(userdata),
//     headers: { "Content-Type": "application/json" },
//   });

//   console.log("Response status:", response.status);
//   const responseBody = await response.json();
//   console.log("Response body:", responseBody);

//   if (response.ok) {
//     alert("Registration successful");
//     navigate("/userlogin2");
//   } else {
//     alert("Registration failed. Please try again.");
//   }
// } catch (error) {
//   console.error("Error during fetch:", error);
//   alert("Server error. Please try again later.");
// }
// };

//     return(
//       <div className="row userform1">
//         <div className="container userform" >
//         <div className="row">
//           <form id="uf" onSubmit={handelform}>
//            <h1>Register</h1>
    
//            <p style={{color:'red'}}>{er}</p>

//               <label>UserID</label><br/>
//               <input id="userinput" type="Number" ref={useridRef}/>
//               <br/>
//               <label>Name</label><br/>
//               <input id="userinput" type="text" ref={usernameRef} />
            
//               <br/>
//               <label>Email</label><br/>
//               <input id="userinput" type="email" ref={useremailRef}/>
//               <br/>
//               <label>Password</label><br/>
//               <input id="userinput" type="password" ref={userpasswordRef} />
//               <br/>
//               <label>MobileNo</label><br/>
//               <input id="userinput" type="Number" ref={usermobilenoRef} />
//               <br/>
//               <label>Address</label><br/>
//               <textarea id="userinput" ref={useraddressRef}></textarea>
//               <br/>
//              <pre><button id="userbutton"type="submit"  >SignIn</button> <button onClick={f1} id="userbutton" type="button">Login</button></pre> 
//           </form>
//         </div>
//       </div>
//       </div>
//     )
// };






import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const navigate = useNavigate();

  // const useridRef = useRef();
  const usernameRef = useRef();
  const useremailRef = useRef();
  const userpasswordRef = useRef();
  const usermobilenoRef = useRef();
  const useraddressRef = useRef();

  const [er, setEr] = useState("");

  function f1() {
    navigate("/userlogin2");
  }

  const handelform = async (e) => {
    e.preventDefault();
    let Errors = []; // Reset errors array

    // if (!useridRef.current.value.trim()) {
    //   Errors.push("User ID is required");
    // } else if (!/^\d+$/.test(useridRef.current.value)) {
    //   Errors.push("ID should be in numbers only.");
    // }

    if (!usernameRef.current.value.trim()) {
      Errors.push("User name is required");
    } else if (usernameRef.current.value.length < 2) {
      Errors.push("Name should be at least 2 characters");
    }

    if (!useremailRef.current.value.trim()) {
      Errors.push("Email is required");
    } else if (!/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,}$/.test(useremailRef.current.value.trim())) {
      Errors.push("Invalid email");
    }

    if (!userpasswordRef.current.value.trim()) {
      Errors.push("Password is required");
    } else if (userpasswordRef.current.value.length < 8) {
      Errors.push("Password should contain at least 8 characters");
    }

    if (!usermobilenoRef.current.value.trim()) {
      Errors.push("Mobile number is required");
    } else if (usermobilenoRef.current.value.length !== 10) {
      Errors.push("Mobile number should contain 10 digits");
    }

    if (!useraddressRef.current.value.trim()) {
      Errors.push("Address is required");
    }

    if (Errors.length > 0) {
      setEr(Errors[0]);
      return; // Stop execution if validation fails
    }

    // const userdata = {
    //   userid: useridRef.current.value,
    //   username: usernameRef.current.value,
    //   useremail: useremailRef.current.value,
    //   userpassword: userpasswordRef.current.value,
    //   usermobile: usermobilenoRef.current.value,
    //   useraddress: useraddressRef.current.value,
    // };
    const userdata = {
      // userId: useridRef.current.value,        // Fix: userId instead of userid
      userName: usernameRef.current.value,    // Fix: userName instead of username
      userEmail: useremailRef.current.value,  // Fix: userEmail instead of useremail
      userPassword: userpasswordRef.current.value,  // Fix: userPassword instead of userpassword
      userMobileNo: usermobilenoRef.current.value,  // Fix: userMobileNo instead of usermobile
      userAddress: useraddressRef.current.value,  // Fix: userAddress instead of useraddress
    };
    
    console.log("Sending userdata:", userdata);

    try {
      const response = await fetch("http://localhost:7575/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata),
      });

      const data = await response.json().catch(() => null); 

      if (data) {
      console.log("Success:", data.message);
      } else {
      console.log("Success: User created successfully");
      }
      if(data){
        alert("Registraction sucessfully");
        navigate("/userlogin2");
      }
      // if (response.ok) {
      //   alert("Registration successful");
      //   navigate("/userlogin2");
      // } else {
      //   alert("Registration failed: " + responseBody.message);
      // }
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("Server error. Please try again later.");
    }

   
  };

  return (
    <div className="row userform1">
      <div className="container userform">
        <div className="row">
          <form id="uf" onSubmit={handelform}>
            <h1>Register</h1>

            <p style={{ color: "red" }}>{er}</p>

            {/* <label>UserID</label><br />
            <input id="userinput" type="number" ref={useridRef} /><br /> */}

            <label>Name</label><br />
            <input id="userinput" type="text" ref={usernameRef} /><br />

            <label>Email</label><br />
            <input id="userinput" type="email" ref={useremailRef} /><br />

            <label>Password</label><br />
            <input id="userinput" type="password" ref={userpasswordRef} /><br />

            <label>MobileNo</label><br />
            <input id="userinput" type="number" ref={usermobilenoRef} /><br />

            <label>Address</label><br />
            <textarea id="userinput" ref={useraddressRef}></textarea><br />

            <button id="userbutton" type="submit">SignIn</button>
            <button onClick={f1} id="userbutton" type="button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
