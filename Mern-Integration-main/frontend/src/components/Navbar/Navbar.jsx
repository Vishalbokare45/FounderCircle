import React from 'react'
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom'
import Logo from './integration.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //Logout
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };


  //user 


  const [profile, setProfile] = useState({
    // User details
    user: "",
    name: "",
    email: "",
    bio: "",
    act: "",
    phone: "",
    uimg: "",

  });

  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8080/api/profile/get-my-profile";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);
  return (
    <>

      <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="#" class="flex items-center space-x-1 rtl:space-x-reverse">
            <img src={Logo} className="h-9" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">Integration</span>
          </Link>
          <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button
              type="button"
              ref={buttonRef}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-9 h-9 rounded-full border-1 border-gray-300"
                src={profile.uimg ? profile.uimg : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                alt="user photo"
              />
            </button>

            {isOpen && (
              <div
                ref={menuRef}
                className="absolute top-full  me-4   mt-2 w-48 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-50"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-700">{profile.name}</span>
                  <span className="block text-sm text-gray-500 truncate">{profile.email}</span>
                        
                 
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to="/myupdate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                       MyUpdate
                    </Link>
                  </li>
                  <li>
                    <Link to="/updateforme" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      UpdateForMe
                    </Link>
                  </li>
                  <li> 
                    <Link to="/profileform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                     UpdateProfile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>

            )}



            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-user"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

          </div>

          <div
  className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
    menuOpen ? "flex" : "hidden"
  }`}
  id="navbar-user"
>
  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:gap-7">
    <li>
      <Link
        to="/home"
        className={`block py-2 px-3 rounded-sm md:p-0 ${
          location.pathname === "/home"
            ? "text-[#5F9EA0] font-semibold"
            : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0]"
        }`}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/account"
        className={`block py-2 px-3 rounded-sm md:p-0 ${
          location.pathname === "/account"
            ? "text-[#5F9EA0] font-semibold"
            : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0]"
        }`}
      >
        Account
      </Link>
    </li>
    <li>
      <Link
        to="/update"
        className={`block py-2 px-3 rounded-sm md:p-0 ${
          location.pathname === "/update"
            ? "text-[#5F9EA0] font-semibold"
            : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0]"
        }`}
      >
        Update
      </Link>
    </li>
    <li>
      <Link
        to="/network"
        className={`block py-2 px-3 rounded-sm md:p-0 ${
          location.pathname === "/network"
            ? "text-[#5F9EA0] font-semibold"
            : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0]"
        }`}
      >
        Network
      </Link>
    </li>
    <li>
      <Link
        to="/aspservices"
        className={`block py-2 px-3 rounded-sm md:p-0 ${
          location.pathname === "/aspservices"
            ? "text-[#5F9EA0] font-semibold"
            : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0]"
        }`}
      >
        Services
      </Link>
    </li>
  </ul>
</div>



        </div>
      </nav>


    </>

  )
}

export default Navbar