import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [deliveries, setDeliveries] = useState([
    { id: 1, receiverName: 'pradip', receiverContactNo: '123-456-7890', destination: 'madical fata', date: '2024-12-20', status: 'Pending', currentCity: 'Nashik', trackingId: 'TRK001' },
    { id: 2, receiverName: 'pradip mane', receiverContactNo: '987-654-3210', destination: 'met collage', date: '2024-12-21', status: 'Delivered', currentCity: 'Nashik', trackingId: 'TRK002' },
    { id: 3, receiverName: 'Pratik', receiverContactNo: '555-123-4567', destination: 'govind nagar', date: '2024-12-19', status: 'Pending', currentCity: 'Nashik', trackingId: 'TRK003' },
  ]);
  const [cancelRequest, setCancelRequest] = useState({ deliveryId: '', reason: '' });
  const [filterPeriod, setFilterPeriod] = useState('this-week');
  const [employeeProfile, setEmployeeProfile] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [orderFilters, setOrderFilters] = useState({ city: '', status: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [leaveRequest, setLeaveRequest] = useState({ reason: '', date: '' });
  const [currentLocation, setCurrentLocation] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get('/api/employee/profile')
  //     .then(response => setEmployeeProfile(response.data))
  //     .catch(error => console.error('Error fetching employee profile:', error));

  //   axios.get('/api/employee/notifications')
  //     .then(response => setNotifications(response.data))
  //     .catch(error => console.error('Error fetching notifications:', error));

  //   fetchDeliveryOrders();
  // }, [currentPage]);

  const fetchDeliveryOrders = () => {
    axios.get('/api/employee/delivery-orders', { params: { ...orderFilters, page: currentPage } })
      .then(response => {
        setDeliveries(response.data.orders);
        setTotalPages(response.data.totalPages);
      })
      .catch(error => console.error('Error fetching delivery orders:', error));
  };

  const updateDeliveryStatus = (orderId, status) => {
    setDeliveries(prevDeliveries =>
      prevDeliveries.map(delivery =>
        delivery.id === orderId ? { ...delivery, status } : delivery
      )
    );
    console.log(`Updated order ${orderId} to status ${status}`);
  };



  // const handleLeaveRequest = () => {
  //   axios.post('/api/employee/apply-leave', leaveRequest)
  //     .then(response => {
  //       alert('Leave request submitted successfully!');
  //       setLeaveRequest({ reason: '', date: '' });
  //     })
  //     .catch(error => console.error('Error submitting leave request:', error));
  // };


  const handleFilterChange = (field, value) => {
    setOrderFilters({ ...orderFilters, [field]: value });
  };

  const applyFilters = () => {
    setCurrentPage(1);
    fetchDeliveryOrders();
  };

  const handleStatusUpdate = (orderId, status) => {
    updateDeliveryStatus(orderId, status);

    axios.post(`/api/employee/update-status/${orderId}`, { status })
      .then(response => {
        alert('Delivery status updated successfully!');
        fetchDeliveryOrders();
      })
      .catch(error => console.error('Error updating delivery status:', error));
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
<div className="emphm">


<div className="empd">
      <div className="dashboard-container">
        <div className="sidebar">
          <ul className="sidebar-list">
            <li className="sidebar-item" onClick={() => navigate("/dashboard")}>Dashboard</li>
            {/* <li className="sidebar-item" onClick={() => navigate("/book-courier")}>Book a Courier</li> */}
            <li className="sidebar-item" onClick={() => navigate("/activeorders")}>Active Orders</li>
            <li className="sidebar-item" onClick={() => navigate("/completedorders")}>Completed Orders</li>
            <li className="sidebar-item" onClick={() => {
              setShowProfile(true);  // Always show profile data when clicking
              navigate("/employeeprofile");
            }}>Profile</li>
            <li className="sidebar-item" onClick={() => navigate("/contactus")}>Help & Support</li>
          </ul>
        </div>

        <div className="main-content">
          <div className="header">
            {/* <h2>Welcome</h2> */}
            <div className="sectio profile">
            {/* <h3>Employee Profile</h3> */}
            
            <div className="profile-card" style={{textAlign:'center',background:'#fff',color:'black',height:'70px'}}>
                <h2><b>Welcome:<i><u> {showProfile ? (
                <>
                  <p><strong>Name:</strong> {employeeProfile.name}</p>
                  <p><strong>Email:</strong> {employeeProfile.email}</p>
                  <p><strong>Contact:</strong> {employeeProfile.contact}</p>
                </>
              ) : (
                <p>{employeeProfile.name}</p>
              )}</u></i></b></h2>
              {/* {showProfile ? (
                <>
                  <p><strong>Name:</strong> {employeeProfile.name}</p>
                  <p><strong>Email:</strong> {employeeProfile.email}</p>
                  <p><strong>Contact:</strong> {employeeProfile.contact}</p>
                </>
              ) : (
                <p>{employeeProfile.name}</p>
              )} */}
            </div>
          </div>
            <button className="logout-button" onClick={() => navigate("/login")}>Logout</button>
          </div>

          {/* Profile Section */}
        

          {/* Notifications Section */}
          {/* <div className="section notifications">
            <h3>Notifications</h3>
            <div className="notifications-card">
              <ul>
                {notifications.map((notification, index) => (
                  <li key={index} className="notification-item">{notification.message}</li>
                ))}
              </ul>
            </div>
          </div> */}

          <div className="section deliveries">
            <h3>Delivery Orders</h3>
            <div className="filter">
              <input
                type="text"
                placeholder="Filter by City"
                value={orderFilters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
              />
              <input
                type="text"
                placeholder="Filter by Status"
                value={orderFilters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              />
              <button onClick={applyFilters}>Apply Filters</button>
            </div>

            <table className="delivery-table">
              <thead>
                <tr>
                  <th className="table-header">Receiver Name</th>
                  <th className="table-header">Receiver Contact No</th>
                  <th className="table-header">Destination</th>
                  <th className="table-header">Status</th>
                  <th className="table-header">Tracking ID</th>
                  <th className="table-header">Update Location</th>
                  <th className="table-header">Request Cancel</th>
                  <th className="table-header">Select Status</th>
                </tr>
              </thead>
              <tbody>
                {deliveries.map(order => (
                  <tr key={order.id}>
                    <td className="table-cell">{order.receiverName}</td>
                    <td className="table-cell">{order.receiverContactNo}</td>
                    <td className="table-cell">{order.destination}</td>
                    <td className="table-cell">{order.status}</td>
                    <td className="table-cell">{order.trackingId}</td>

                    <td className="table-cell">
                      <input
                        className="action-input"
                        type="text"
                        placeholder="Enter location"
                        value={currentLocation}
                        onChange={(e) => setCurrentLocation(e.target.value)}
                      />
                      <button className="action-button" >Update Location</button>
                    </td>
                    <td>
                      <input
                      
                      className="action-input"
                        type="text"
                        placeholder="Reason for cancel">
                      </input>
                      <button>Cancel Request</button>
                    </td>

                    <td className="table-cell">
                      <select className="status-select" onChange={(e) => handleStatusUpdate(order.id, e.target.value)} value={order.status}>
                        <option value="">Select Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Failed">Failed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>
          </div>

          <div className="section leave-request">
            <h3>Apply for Leave</h3>
            <div className="leave-card">
              <input
                type="text"
                placeholder="Reason"
                value={leaveRequest.reason}
                onChange={(e) => setLeaveRequest({ ...leaveRequest, reason: e.target.value })}
              />
              <input
                type="date"
                value={leaveRequest.date}
                onChange={(e) => setLeaveRequest({ ...leaveRequest, date: e.target.value })}
              />
              <button >Submit Leave Request</button>
            </div>
          </div>
        </div>
      </div>
    </div>



</div>
  );
};
export default Dashboard;
