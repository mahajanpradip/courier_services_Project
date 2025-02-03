import React from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components2/Chatbot";

const UserHome = () => {
  const orders = [
    { id: 1, status: "In Transit", deliveryDate: "2024-12-12" },
    { id: 2, status: "Delivered", deliveryDate: "2024-12-10" },
  ];

  const navigate=useNavigate();
  const GotoCourierBook =(e)=>{
    e.preventDefault();
    navigate("/curiorbook");
  }

  const gotodashbord = (e) =>{
    e.preventDefault();
    navigate("/userhome");
  }
  const GoToHelpAndSupport=(e)=>{
      e.preventDefault();
      navigate("/contactus");
  }
  const GoToTracking = (e) => {
    e.preventDefault(e);
    navigate("/simpletracker")
  }
  const GoToTrack = (e) => {
    e.preventDefault();
    navigate("/simpletracker")
  } 
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul className="userhomeslidlist">
          <li className="uslists" onClick={gotodashbord}>Dashboard</li>
          <li className="uslists" onClick={GotoCourierBook}>Book a Courier</li>
          <li className="uslists">History</li>
          <li className="uslists" onClick={()=>navigate("/userprofile")}>Profile</li>
          <li className="uslists" onClick={GoToHelpAndSupport}>Help & Support</li>
        </ul>
      </div>

  
      <div className="userhomemain">
        <div className="uhmcontents">
          <h2 className="uhmtitle">Welcome, [User Name]</h2>
          <div className="sidetitle">
            <button className="uhmsbtn" onClick={()=>navigate("/")}>Logout</button>
          </div>
        </div>



        <div className="uhcards">
          <div className="uhcard1">
            <h3 className="ctitle">Total Bookings</h3>
            <p className="cvalue">120</p>
          </div>
          <div className="uhcard2">
            <h3 className="ctitle">Active Orders</h3>
            <p className="cvalue">15</p>
          </div>
          <div className="uhcard3">
            <h3 className="ctitle">Successful Deliveries</h3>
            <p className="cvalue">105</p>
          </div>
          <div className="uhcard4">
            <h3 className="ctitle">Pending Deliveries</h3>
            <p className="cvalue">10</p>
          </div>
        </div>

  

     <div className="userhomebtnsofun">
      <button className="userfbtn1" onClick={GotoCourierBook}>Book a Courier</button>
      <button className="userfbtn2" onClick={GoToTracking}>Track Order</button>
      <button className="userfbtn3" onClick={()=>navigate("/schedulepickup")}>Schedule Pickup</button>
      <button className="userfbtn4" onClick={()=>navigate("/Viewhistory")}>View History</button>

     </div>



       
        <div className="userhorderstable">
          <h3 className="uottitle">Recent Orders</h3>
          <table className="uotable">
            <thead>
              <tr>
                <th className="uoth">Booking ID</th>
                <th className="uoth">Status</th>
                <th className="uoth">Delivery Date</th>
                <th className="uoth">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="uotd">{order.id}</td>
                  <td className="uotd">{order.status}</td>
                  <td className="uotd">{order.deliveryDate}</td>
                  <td className="uotd">
                    <button className="uotbtn1" onClick={GoToTrack}>Track</button>
                    <button className="uotbtn">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      
        <div >
            <Chatbot/>
        </div>
     
      </div>
    </div>
    
  );
};

export default UserHome;
