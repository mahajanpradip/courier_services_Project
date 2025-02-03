import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login";
import UserLogin from "./components/UserLogin";
import EmployeeLogin from "./components/EmployeeLogin";
import AdminLogin from "./components/AdminLogin";
import UserLogin2 from "./components/UserLogin2";
import EmployeeLogin2 from "./components/EmployeeLogin2";
import AdminLogin2 from "./components/AdminLogin2";
import CouriorBook from "./components/CouriorBook";
import Bill from "./components/Bill";
import AdminHndler from "./components/AdminHndler";
import AdminHome from "./components/AdminHome";
import FeedBackForm from "./components/FeedBackForm";
import EmployeeHome from "./components/EmployeeHome";
import UserHome from "./components/UserHome";
import HelpAndSupport from "./components/HelpAndSupport";
import UserProfile from "./components/UserProfile";
import Useravailable from "./components/Usersavailable";
import SimpleTracker from "./components/SimpleTracker";
import ActiveOrder from "./components2/ActiveOrder";
import CompletedOrders from "./components2/CompletedOrders";
import EmpProfile from "./components2/EmpProfile";
import Chatbot from "./components2/Chatbot";
import SchedulePickup from "./components2/SchedulePickup";
import ViewHistory from "./components2/ViewHistory";


const routing=createBrowserRouter([
    {
        path:"",
        element:<App/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"login",
            element:<Login/>,
          },
          {
            path:"userlogin",
            element:<UserLogin/>
          },
          {
            path:"employeelogin",
            element:<EmployeeLogin/>
          },
          {
            path:"adminlogin",
            element:<AdminLogin/>
          },
          {
            path:"userlogin2",
            element:<UserLogin2/>
          },
          {
            path:"employeelogin2",
            element:<EmployeeLogin2/>
          },
          {
            path:"adminlogin2",
            element:<AdminLogin2/>
          },
          {
            path:"curiorbook",
            element:<CouriorBook/>
          },
          {
              path:"bill",
              element:<Bill/>
          },
          {
            path:"adminhandler",
            element:<AdminHndler/>
          },
          {
            path:"userhome",
            element:<UserHome/>
          },
          {
            path:"contactus",
            element:<HelpAndSupport/>
          },
          {
            path:"usersavailable",
            element:<Useravailable/>
          },{
            path:"adminhome",
            element:<AdminHome/>
          },
           {
            path:"simpletracker",
            element:<SimpleTracker/>
          } ,{
            path:"employeehome",
            element:<EmployeeHome/>
          },
          {
            path:"activeorders",
            element:<ActiveOrder/>
          },{
            path:"completedorders",
            element:<CompletedOrders/>
          },{
            path:"userprofile",
            element:<UserProfile/>
          },{
            path:"chatbot",
            element:<Chatbot/>
          },{
            path:"employeeprofile",
            element:<EmpProfile/>
          },{
            path:"schedulepickup",
            element:<SchedulePickup/>
          },{
            path:"viewhistory",
            element:<ViewHistory/>
          }
        
        ]
    },
    {
      path:"feedbackform",
      element:<FeedBackForm/>
    },
   
    {
      path:"userprofile",
      element:<UserProfile/>
    }
    
   
])
export default routing;