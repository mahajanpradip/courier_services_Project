import React, { useState } from "react";

import { useSelector } from 'react-redux';


export default function AdminPage() {
  const billData = useSelector((state) => state.bill);
console.log(billData);
console.log(billData);

console.log(billData);
console.log("okok");
console.log(billData);

console.log(billData);



  const [employees, setEmployees] = useState([
    { id: 1, name: 'Nikhil', email: 'nikhil@123gmail.com', phone:'3453453465' },
    { id: 1, name: 'Rithik', email: 'rithik@123gmail.com', phone:'2334333434' },
  ]);

  const [couriers, setCouriers] = useState([
    {
      id: 101,
      customer: billData.senderDetails.name,
      destination:billData.receiverDetails.city ,
      status: "Pending",
      assignedTo: null,
    },
    {
      id: 102,
      customer: billData.senderDetails.name,
      destination: billData.receiverDetails.city,
      status: "Pending",
      assignedTo: null,
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({ name: "", email: "", phone: "" });

  const assignCourier = (courierId, employeeId) => {
    setCouriers((prevCouriers) =>
      prevCouriers.map((courier) => {
        if (courier.id === courierId) {
          return { ...courier, status: "Assigned", assignedTo: employeeId };
        } else {
          return courier;
        }
      })
    );
  };

  const addEmployee = () => {
    const id = employees.length + 1;
    setEmployees([...employees, { id, ...newEmployee }]);
    setNewEmployee({ name: "", email: "", phone: "" });
  };

  return (
    <div className="admin-page">
      <header className="adhed ">
        <h1>Courier Services - Admin Dashboard</h1>
      </header>

      <section className="csection">
        <h2>Placed Couriers</h2>
        <table className="courier-table adtable">
          <thead>
            <tr>
              <th id="thh">ID</th>
              <th id="thh">Customer</th>
              <th id="thh">Destination</th>
              <th id="thh">Status</th>
              <th id="thh">Assigned To</th>
              <th id="thh">Actions</th>
            </tr>
          </thead>
          <tbody>
            {couriers.map((courier) => (
              <tr key={courier.id}>
                <td id="tdd">{courier.id}</td>
                <td id="tdd">{courier.customer}</td>
                <td id="tdd">{courier.destination}</td>
                <td id="tdd">{courier.status}</td>
                <td id="tdd">
                  {courier.assignedTo
                    ? `Employee ${courier.assignedTo}`
                    : "Not Assigned"}
                </td>
                <td id="tdd">
                  <select id="selt2"
                    onChange={(e) => assignCourier(courier.id, e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Employee
                    </option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="esection">
        <h2>Manage Employees</h2>
        <table className="employee-table adtable">
          <thead>
            <tr>
              <th id="thh">ID</th>
              <th id="thh">Name</th>
              <th id="thh">Email</th>
              <th id="thh">Phone</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td id="tdd">{emp.id}</td>
                <td id="tdd">{emp.name}</td>
                <td id="tdd">{emp.email}</td>
                <td id="tdd">{emp.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Add New Employee</h3>
        <form
          className="formad"
          onSubmit={(e) => {
            e.preventDefault();
            addEmployee();
          }}
        >
          <input id="finp"
            type="text"
            placeholder="Name"
            value={newEmployee.name}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, name: e.target.value })
            }
            required
          />
          <input id="finp"
            type="email"
            placeholder="Email"
            value={newEmployee.email}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, email: e.target.value })
            }
            required
          />
          <input id="finp"
            type="text"
            placeholder="Phone"
            value={newEmployee.phone}
            onChange={(e) =>
              setNewEmployee({ ...newEmployee, phone: e.target.value })
            }
            required
          />
          <button id="finpb" type="submit">Add Employee</button>
        </form>
      </section>
    </div>
  );
}
































