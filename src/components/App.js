import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    return(
       <>
       <div class="App">
       <Header/>
       <Outlet/>
       <Footer/>
       </div>
       </>
    );
}




// import React, { useState } from 'react';

// const APP_CONSTANTS = {
//   navbar: {
//     logo: "Delhivery",
//     links: [
//       { id: "home", label: "Home" },
//       { id: "services", label: "Services" },
//       { id: "track-order", label: "Track Order" },
//       { id: "about-us", label: "About Us" },
//       { id: "contact", label: "Contact" },
//     ],
//   },
//   home: {
//     title: "Welcome to Delhivery Clone",
//     description: "Experience seamless delivery and tracking services with us.",
//     button: "Learn More",
//   },
//   services: {
//     title: "Our Services",
//     description: "Explore our extensive range of logistics solutions designed to meet your unique needs.",
//     items: [
//       { title: "Courier Services", description: "Fast and reliable courier delivery for personal and business needs." },
//       { title: "E-commerce Logistics", description: "Tailored logistics for online sellers and marketplaces." },
//       { title: "Freight Transportation", description: "Efficient transportation for heavy and bulk goods." },
//       { title: "Warehouse Solutions", description: "Modern warehousing facilities for inventory management." },
//       { title: "Last Mile Delivery", description: "Delivering to the doorstep with precision and speed." },
//       { title: "Reverse Logistics", description: "Hassle-free return and exchange services for customers." },
//       { title: "Cross-border Shipping", description: "Global shipping solutions to expand your reach." },
//       { title: "Customized Solutions", description: "Personalized logistics strategies for unique requirements." },
//     ],
//   },
//   trackOrder: {
//     title: "Track Your Order",
//     placeholder: "Enter Tracking ID",
//     button: "Track",
//   },
//   aboutUs: {
//     title: "About Us",
//     description:
//       "Delhivery Clone is your trusted partner in logistics, dedicated to providing innovative and reliable solutions. With a focus on speed and accuracy, we have established ourselves as a leader in the delivery and logistics industry. \n\n### Why Choose Us?\n- **Innovative Technology**: Cutting-edge tools for seamless tracking and delivery.\n- **Vast Network**: Serving across multiple cities and international locations.\n- **Customer-Centric**: We prioritize your needs to ensure satisfaction.\n- **Sustainability**: Eco-friendly logistics for a better tomorrow.",
//   },
//   contact: {
//     title: "Contact Us",
//     description: "Need assistance? Reach out to us via email or phone.",
//     email: "support@delhivery.com",
//     phone: "+91-1234567890",
//   },
//   footer: {
//     text: "© 2024 Delhivery Clone. All rights reserved.",
//   },
// };

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Services />
//       <TrackOrder />
//       <AboutUs />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">{APP_CONSTANTS.navbar.logo}</div>
//       <ul className="nav-links">
//         {APP_CONSTANTS.navbar.links.map((link) => (
//           <li key={link.id}>
//             <a href={`#${link.id}`} className="link">{link.label}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// function Home() {
//   return (
//     <div id="home" className="page">
//       <h1>{APP_CONSTANTS.home.title}</h1>
//       <p>{APP_CONSTANTS.home.description}</p>
//       <button className="button">{APP_CONSTANTS.home.button}</button>
//     </div>
//   );
// }

// function Services() {
//   return (
//     <div id="services" className="page">
//       <h1>{APP_CONSTANTS.services.title}</h1>
//       <p>{APP_CONSTANTS.services.description}</p>
//       <div className="services-cards">
//         {APP_CONSTANTS.services.items.map((service, index) => (
//           <div key={index} className="service-card">
//             <h3>{service.title}</h3>
//             <p>{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function TrackOrder() {
//   const [trackingId, setTrackingId] = useState('');

//   const handleTrack = () => {
//     alert(`Tracking ID: ${trackingId}`); // Replace with actual API call
//   };

//   return (
//     <div id="track-order" className="page">
//       <h1>{APP_CONSTANTS.trackOrder.title}</h1>
//       <input
//         type="text"
//         placeholder={APP_CONSTANTS.trackOrder.placeholder}
//         value={trackingId}
//         onChange={(e) => setTrackingId(e.target.value)}
//         className="input"
//       />
//       <button onClick={handleTrack} className="button">{APP_CONSTANTS.trackOrder.button}</button>
//     </div>
//   );
// }

// function AboutUs() {
//   return (
//     <div id="about-us" className="page">
//       <h1>{APP_CONSTANTS.aboutUs.title}</h1>
//       <p>{APP_CONSTANTS.aboutUs.description}</p>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div id="contact" className="page">
//       <h1>{APP_CONSTANTS.contact.title}</h1>
//       <p>{APP_CONSTANTS.contact.description}</p>
//       <ul>
//         <li>Email: {APP_CONSTANTS.contact.email}</li>
//         <li>Phone: {APP_CONSTANTS.contact.phone}</li>
//       </ul>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer className="footer">
//       <p>{APP_CONSTANTS.footer.text}</p>
//     </footer>
//   );
// }

// export default App;
