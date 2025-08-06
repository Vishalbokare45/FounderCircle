// import React from "react";
// import { Link, useLocation } from 'react-router-dom';
// // import styles from './styles.module.css';


// const NavbarS = () => {
//   let location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
   
//     window.location.href = "/";
//   };

//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand fs-4 mx-3 ">Integration</Link>

//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse mx-3" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-md-0">
//             <li className="nav-item">
//               <Link to="/home" className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/useraccount" className={`nav-link ${location.pathname === "/useraccount" ? "active" : ""}`}>Account</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/updates" className={`nav-link ${location.pathname === "/updates" ? "active" : ""}`}>Updates</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/mynetwork" className={`nav-link ${location.pathname === "/mynetwork" ? "active" : ""}`}>MyNetwork</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/asp" className={`nav-link ${location.pathname === "/asp" ? "active" : ""}`}>Services</Link>
//             </li>
           
//           </ul>

//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           
//           </form>
//          <div className="mx-2 me-4 mt-1">
//           <div className="dropdown me-5">
//             <Link to="#" className="d-block link-secondary text-decoration-none dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
//               <img src="https://static.vecteezy.com/system/resources/previews/024/983/914/original/simple-user-default-icon-free-png.png" alt="mdo" width="38" height="38" className="rounded-circle" />
//             </Link>
//             <ul className="dropdown-menu dropdown-menu-dark text-small" aria-labelledby="dropdownMenuLink">
//               <li><Link to="/asp" className="dropdown-item">Services</Link></li>
//               <li><hr className="dropdown-divider" /></li>
//               <li><Link to="/profileform" className="dropdown-item">Update Profile</Link></li>
//               <li><Link to="#" className="dropdown-item">Settings</Link></li>
//               <li><hr className="dropdown-divider" /></li>
//               <li><Link to="#" className="dropdown-item" onClick={handleLogout}>Sign out</Link></li>
//             </ul>
//           </div>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarS;


import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Integration from "./integration.png";

const NavbarS = () => {
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-4 mx-3 fw-bold text-muted"><img src={Integration} alt="Logo" width="40" height="40" className="mx-2"/>Integration</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/useraccount" className={`nav-link ${location.pathname === "/useraccount" ? "active" : ""}`}>Account</Link>
            </li>
            <li className="nav-item">
              <Link to="/updates" className={`nav-link ${location.pathname === "/updates" ? "active" : ""}`}>Updates</Link>
            </li>
            <li className="nav-item">
              <Link to="/mynetwork" className={`nav-link ${location.pathname === "/mynetwork" ? "active" : ""}`}>MyNetwork</Link>
            </li>
            <li className="nav-item">
              <Link to="/asp" className={`nav-link ${location.pathname === "/asp" ? "active" : ""}`}>Services</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <div className="mx-2 me-5 mt-1">
            <div className="dropdown me-5">
              <Link to="#" className="d-block link-secondary text-decoration-none dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://static.vecteezy.com/system/resources/previews/024/983/914/original/simple-user-default-icon-free-png.png" alt="mdo" width="38" height="38" className="rounded-circle" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark text-small" aria-labelledby="dropdownMenuLink">
                <li><Link to="/asp" className="dropdown-item">Services</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="/profileform" className="dropdown-item">Update Profile</Link></li>
                <li><Link to="#" className="dropdown-item">Settings</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link to="#" className="dropdown-item" onClick={handleLogout}>Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarS;
