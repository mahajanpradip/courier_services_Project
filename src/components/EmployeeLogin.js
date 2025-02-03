import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeLogin() {
  // const employeeidRef = useRef();
  const employeenameRef = useRef();
  const employeeemailRef = useRef();
  const employeepasswordRef = useRef();
  const employeemobilenoRef = useRef();
  const employeeaddressRef = useRef();

  const [currentError, setCurrentError] = useState(""); // To store the single error message
  const navigatee = useNavigate();

  function f1() {
    navigatee("/employeelogin2");
  }

  const handelemployeeform = (e) => {
    e.preventDefault();

    const validationErrors = [];

    // if (!employeeidRef.current.value.trim()) {
    //   validationErrors.push("Id is required.");
    // } else if (!/^[0-9]+$/.test(employeeidRef.current.value.trim())) {
    //   validationErrors.push("Id should be in numbers.");
    // }

    if (!employeenameRef.current.value.trim()) {
      validationErrors.push("Name is required.");
    } else if (!/^[a-zA-Z]+$/.test(employeenameRef.current.value.trim())) {
      validationErrors.push("Name should be in characters only.");
    }

    if (!employeeemailRef.current.value.trim()) {
      validationErrors.push("Email is required.");
    } else if (
      !/^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,}$/.test(employeeemailRef.current.value)
    ) {
      validationErrors.push("Invalid email format.");
    }

    if (!employeepasswordRef.current.value.trim()) {
      validationErrors.push("Password is required.");
    } else if (employeepasswordRef.current.value.length < 8) {
      validationErrors.push("Password should be at least 8 characters.");
    }

    if (!employeemobilenoRef.current.value.trim()) {
      validationErrors.push("Mobile number is required.");
    } else if (employeemobilenoRef.current.value.length !== 10) {
      validationErrors.push("Mobile number must be 10 digits.");
    }

    if (!employeeaddressRef.current.value.trim()) {
      validationErrors.push("Address is required.");
    }

    if (validationErrors.length > 0) {
      setCurrentError(validationErrors[0]); 
      return;
    }

    const employeeData = {
      // employeeidRef: employeeidRef.current.value,
      employeenameRef: employeenameRef.current.value,
      employeeemailRef: employeeemailRef.current.value,
      employeepasswordRef: employeepasswordRef.current.value,
      employeemobilenoRef: employeemobilenoRef.current.value,
      employeeaddressRef: employeeaddressRef.current.value,
    };

    console.log(employeeData);
    alert("Registration successful");
    navigatee("/employeelogin2");
  };

  return (
    <div className="row employeeform1">
    <div className="container employeeform">
      <div className="row">
        <form onSubmit={handelemployeeform}>
          <h1>Register</h1>
          {/* Display single error below the heading */}
          {currentError && <div style={{ color: "red", marginBottom: "10px" }}>{currentError}</div>}

          {/* <label>Employee ID</label>
          <br />
          <input id="employeeinput" type="number" ref={employeeidRef} /> */}
          <br />

          <label>Name</label>
          <br />
          <input id="employeeinput" type="text" ref={employeenameRef} />
          <br />

          <label>Email</label>
          <br />
          <input id="employeeinput" type="email" ref={employeeemailRef} />
          <br />

          <label>Password</label>
          <br />
          <input id="employeeinput" type="password" ref={employeepasswordRef} />
          <br />

          <label>Mobile No</label>
          <br />
          <input id="employeeinput" type="number" ref={employeemobilenoRef} />
          <br />

          <label>Address</label>
          <br />
          <textarea id="employeeinput" ref={employeeaddressRef}></textarea>
          <br />

     

          <pre>
            <button id="employeebutton" type="submit">
              Sign In
            </button>
            <button onClick={f1} id="employeebutton" type="button">
              Login
            </button>
          </pre>
        </form>
      </div>
    </div>
    </div>
  );
}
