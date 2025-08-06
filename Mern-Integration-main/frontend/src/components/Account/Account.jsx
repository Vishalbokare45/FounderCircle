import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Account = () => {

 const [profile, setProfile] = useState({
    // User details
    user: "",
    name: "",
    email: "",
    bio: "",
    act: "",
    phone: "",
    uimg: "",
    // Business details
    add: "",
    web: "",
    eyear: "",
    // pone: "",
    // pnone: "",
    // ptwo: "",
    // pntwo: "",
    // pthree: "",
    // pnthree: "",
    // btitle: "",
    bdesc: "",

    tm: "",
    cp: "",
    sms: "",
    bm: "",
    mjc: "",
    cad: "",
    // Finance details
    tp: "",
    fdesc: "",
    rev: "",
    expen: "",
    net: ""
  });


  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8080/api/profile/get-my-profile"; // Update the URL to your backend server running on port 8080
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
     

      <div className="container mx-auto px-4 py-8 space-y-10 mt-20">


  <section className="space-y-6 ">
    

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


  <div className="bg-white rounded-xl shadow p-8 relative text-center">
    <Link to="/profileform" className="absolute top-4 right-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5F9EA0" className="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
      </svg>
    </Link>
    <img
      src={
        profile.uimg
          ? profile.uimg
          : "https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
      }
      alt="Logo"
      className="w-36 h-36 rounded-full shadow my-4 mx-auto"
    />
    <h3 className="text-xl font-semibold text-[#5F9EA0] break-words">{profile.name || "Name"}</h3>
    <p className="text-md break-words">{profile.bio || "Bio"}</p>
  </div>

 
  <div className="bg-white rounded-xl shadow p-8">
    <h3 className="text-lg font-semibold text-[#5F9EA0] mb-3">Contact Info</h3>
    
    <p className="text-md text-gray-700 mb-1 font-semibold">Phone:</p>
    <p className="text-md text-gray-700 mb-4 break-words">{profile.phone || "Phone.no"}</p>

    <p className="text-md text-gray-700 mb-1 font-semibold">Email:</p>
    <p className="text-md text-gray-700 mb-4 break-words">{profile.email || "Email"}</p>
  </div>


  <div className="bg-white rounded-xl shadow p-8">
    <h3 className="text-lg font-semibold text-[#5F9EA0] mb-3">Location & Web</h3>

    <p className="text-md text-gray-700 mb-1 font-semibold">Website:</p>
    <p className="text-md text-gray-700 mb-4 break-words">{profile.web || "Website"}</p>

    <p className="text-md text-gray-700 mb-1 font-semibold">Address:</p>
    <p className="text-md text-gray-700 mb-4 break-words">{profile.add || "Address"}</p>
  </div>

</div>

  </section>


 
  <section className="space-y-6">
   

    {/* Overview Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold  text-[#5F9EA0] mb-2">About</h3>
        <p className="text-md text-gray-700">{profile.bdesc ? profile.bdesc : "Business Description"}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold text-[#5F9EA0] mb-2">Founded</h3>
        <p className="text-md text-gray-700">{profile.eyear ? profile.eyear : "Year Founded"}</p>
      </div>
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-lg font-semibold text-[#5F9EA0] mb-2">Category</h3>
        <p className="text-md text-gray-700">{profile.cat ? profile.cat : "Startup Category"}</p>
      </div>
    </div>

    {/* Grid Layout for All Sections */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Market & Problem */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#5F9EA0]">Market & Problem</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg shadow-inner p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Target Market</h3>
            <p className="text-md text-gray-700">{profile.tm ? profile.tm : "Target Market Desc"}</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-inner p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Customer Problem</h3>
            <p className="text-md text-gray-700">{profile.cp ? profile.cp : "Customer Problem Desc"}</p>
          </div>
        </div>
      </div>

      {/* Strategy & Model */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#5F9EA0]">Strategy & Model</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg shadow-inner p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Sales/Marketing Strategy</h3>
            <p className="text-md text-gray-700">{profile.sms ? profile.sms : "Sales/Marketing Strategy Desc"}</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-inner p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Business Model</h3>
            <p className="text-md  text-gray-700">{profile.bm ? profile.bm : "Business Model Desc"}</p>
          </div>
        </div>
      </div>

      {/* Competition */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#5F9EA0]">Competition</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg shadow-inner p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Major Competitors</h3>
            <p className="text-md  text-gray-700">{profile.mjc ? profile.mjc : "Major Competitors Desc"}</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-inner p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Competitive Advantage</h3>
            <p className="text-md  text-gray-700">{profile.cad ? profile.cad : "Competitive Advantage Desc"}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Section: Financials */}
    <div className="space-y-4">
      <div className="bg-white rounded-xl shadow p-6 space-y-6">
        <h2 className="text-2xl font-bold text-[#5F9EA0]">Financials</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Time Duration</h3>
          <p className="text-md text-gray-700">{profile.tp ? profile.tp : "Fincial years / Time Duration"}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Financial Description</h3>
          <p className="text-md  text-gray-700">{profile.fdesc ? profile.fdesc : "Financial Description"}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-lg shadow-inner p-4 text-center">
            <h4 className="text-md font-semibold mb-1 text-gray-700">Revenue</h4>
            <p className="text-xl font-bold text-[#5F9EA0]">{profile.rev ? profile.rev : "Revenues"}</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-inner p-4 text-center">
            <h4 className="text-md font-semibold mb-1 text-gray-700">Expenditure</h4>
            <p className="text-xl font-bold text-[#5F9EA0]">{profile.expen ? profile.expen : "Expenditure"}</p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-inner p-4 text-center">
            <h4 className="text-md font-semibold mb-1 text-gray-700">Net Profit</h4>
            <p className="text-xl font-bold text-[#5F9EA0]">{profile.net ? profile.net : "Net"}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>



    </>
  )
}

export default Account