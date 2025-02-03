// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);
// export default function AdminHome() {

//   const pieData = {
//     labels: ['Active Users', 'Inactive Users', 'New Users'],
//     datasets: [
//       {
//         label: 'User Distribution',
//         data: [70, 20, 10], // Example data
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           color: '#000', // Label color
//         },
//       },
//     },
//   };
//   return (

   
//        <div className='row'>
//         <div className='col-xl-2'>

//         <div
//           className="bg-dark text-white p-3 vh-100"
//           style={{ width: "250px" }}
//         >
//           <h4 className="text-center mb-4">Admin Panel</h4>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-3">
//               <a className="nav-link text-white" href="#">
//                 <i className="bi bi-house-door-fill me-2"></i>Dashboard
//               </a>
//             </li>
//             <li className="nav-item mb-3">
//               <Link className="nav-link text-white" to="/usersavailable">
//               <i className="bi bi-people-fill me-2"></i>Users</Link>
//             </li>
//             <li className="nav-item mb-3">
//               <a className="nav-link text-white" href="#">
//                 <i className="bi bi-bar-chart-fill me-2"></i>Analytics
//               </a>
//             </li>
//             <li className="nav-item mb-3">
//               <a className="nav-link text-white" href="#">
//                 <i className="bi bi-gear-fill me-2"></i>Settings
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="name">
//          <h1>Curiour Services</h1>
//         </div>


//         </div>
//         <div className='col-xl-10'>



// <div className="container allcard">
//   <div className="col-xl-4 card1">
//     <Link id="linkk" to="/usersavailable">
//     <div className='cardd'>
//       <h2>Total Users</h2>
//       <h1>1500</h1>
//       <p>Active and engaged users</p>
//     </div>
//     </Link>
//   </div>
//   <div className="col-xl-4 card2">
//   <div className='cardd'>
//       <h2> Revenue</h2>
//       <h1>$12,450</h1>
//       <p>Monthly earnings</p>
//     </div>
//   </div>
//   <div className="col-xl-4 card3">
//   <Link id="linkk" to="/adminhandler"><div className='cardd'>
//       <h2>Pending Tasks </h2>
//       <h1>8</h1>
//       <p>asks awaiting approval</p>
//     </div>
//     </Link> 
//   </div>
    
// </div>
  





// <div className="container pie-chart-container" style={{ textAlign: 'center', background: 'transparent', padding: '20px' }}>
//           <h2>User Distribution</h2>
//           <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
//             <Pie data={pieData} options={pieOptions} />
//           </div>
//         </div>









// <div className='container allgraphc'>
//   <div className="col-xl-6 graphcard1">
//     <h1>User Engagement</h1>
//     <p> Graph Placeholder</p>
//   </div>
//   <div className="col-xl-6 graphcard2">
//     <h1>Revenue Growth</h1>
//     <p> Graph Placeholder</p>
//   </div>
// </div>






//         </div>
//       </div>
   
//   )
// }



// AdminHome.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function AdminHome() {
//   const pieData = {
//     labels: ['Active Users', 'Inactive Users', 'New Users'],
//     datasets: [
//       {
//         label: 'User Distribution',
//         data: [70, 20, 10],
//         backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
//         hoverBackgroundColor: ['#45C567', '#FFC107', '#42A5F5'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           color: '#333',
//         },
//       },
//     },
//   };

//   return (
//     <div className="admin-container">
//       {/* Sidebar */}
//       <div className="admin-sidebar">
//         <h4 className="sidebar-title">Admin Panel</h4>
//         <ul className="sidebar-nav">
//           <li className="nav-item">
//             <Link className="nav-link" to="#">
//               <i className="bi bi-house-door-fill me-2"></i>Dashboard
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/usersavailable">
//               <i className="bi bi-people-fill me-2"></i>Users
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="#">
//               <i className="bi bi-bar-chart-fill me-2"></i>Analytics
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="#">
//               <i className="bi bi-gear-fill me-2"></i>Settings
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="admin-main-content">
//         {/* Cards */}
//         <div className="row">
//           <div className="col-md-4">
//             <div className="card card-success">
//               <div className="card-body">
//                 <h5 className="card-title">Total Users</h5>
//                 <h3 className="card-text">1,500</h3>
//                 <p className="card-desc">Active and engaged users</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card card-info">
//               <div className="card-body">
//                 <h5 className="card-title">Revenue</h5>
//                 <h3 className="card-text">$12,450</h3>
//                 <p className="card-desc">Monthly earnings</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card card-warning">
//               <div className="card-body">
//                 <h5 className="card-title">Pending Tasks</h5>
//                 <h3 className="card-text">8</h3>
//                 <p className="card-desc">Tasks awaiting approval</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Pie Chart */}
//         <div className="row">
//           <div className="col-md-6 mx-auto">
//             <div className="card card-chart">
//               <div className="card-body">
//                 <h5 className="card-title">User Distribution</h5>
//                 <div className="chart-container">
//                   <Pie data={pieData} options={pieOptions} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Graph Placeholders */}
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card card-placeholder">
//               <div className="card-body">
//                 <h5 className="card-title">User Engagement</h5>
//                 <p className="placeholder-text">Graph Placeholder</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card card-placeholder">
//               <div className="card-body">
//                 <h5 className="card-title">Revenue Growth</h5>
//                 <p className="placeholder-text">Graph Placeholder</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
     
export default function AdminHome() {
  var navigate=useNavigate();
  const pieData = {
    labels: ['Active Users', 'Inactive Users', 'New Users'],
    datasets: [
      {
        label: 'User Distribution',
        data: [70, 20, 10],
        backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'],
        hoverBackgroundColor: ['#45D96B', '#FFB74D', '#64B5F6'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#555',
        },
      },
    },
  };

  return (
    <div className="row" id="alladminpage">
    <div className="admin-home">
      <div>


      {/* <div
          className="bg-dark text-white vh-100"
          style={{ width: "300px" }}
        >
          <h4 className="text-center mb-4">Admin Panel</h4>
          <ul className="allaitem">
            <li className="alist">
            <Link className="aitem1" to="/usersavailable">
            Dashboard</Link>
              
            </li>
            <li className="alist">
              <Link className="aitem2" to="/usersavailable">
             Users</Link>
            </li>
          
            <li className="alist">
            
            <Link className="aitem3" to="/usersavailable">
            Analytics</Link>
            </li>
            <li className="alist">
            <Link className="aitem4" to="/usersavailable">
            Settings</Link>
            </li>
          </ul>
        </div> */}

       <div className="sidebar" style={{ width: "300px" }}>
          <ul className="sidebar-list">
            <li className="sidebar-item" onClick={() => navigate("/dashboard")}>Dashboard</li>
            <li className="sidebar-item" onClick={() => navigate("/usersavailable")}>Users</li>
            <li className="sidebar-item" onClick={() => navigate("/completedorders")}>Analytics</li>
            <li className="sidebar-item" onClick={() => navigate("/helpsupport")}>Settings</li>
          </ul>
        </div>


      </div>
      <div className="main-contentadmin">
        <div className="header">
          <h1>Courier Services</h1>
        </div>
        <div className="adpageallcards">
          <div className="card1a">
            <Link to="/usersavailable">
              <div className="card-content">
                <h2 className="adcardtitle">Total Users</h2>
                <h1 className="adcardvalu">1500</h1>
                <p className="subdescad">Active and engaged users</p>
              </div>
            </Link>
          </div>
          <div className="card2a">
            <div className="card-content">
              <h2 className="adcardtitle">Revenue</h2>
              <h1 className="adcardvalu">$12,450</h1>
              <p  className="subdescad">Monthly earnings</p>
            </div>
          </div>
          <div className="card3a">
            <Link to="/adminhandler">
              <div className="card-content">
                <h2 className="adcardtitle">Pending Tasks</h2>
                <h1 className="adcardvalu">8</h1>
                <p  className="subdescad">Tasks awaiting approval</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="grpbackgroundad">
          <h2>User Distribution</h2>
          <div className="grpwrapperadr">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
        <div className="graphadminp">
          <div className="grpadcard">
            <h2 className="adgrptitl">User Engagement</h2>
            <p>Graph Placeholder</p>
          </div>
          <div className="grpadcard">
            <h2 className="adgrptitl">Revenue Growth</h2>
            <p>Graph Placeholder</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

