import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const ProfileView = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});



  const [followedProfiles, setFollowedProfiles] = useState(new Set());
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [followings, setFollowings] = useState([]);




  useEffect(() => {
    const fetchFollowings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/follow/send-follow', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch followings');
        }

        const data = await response.json();
        const followedSet = new Set(data.map(follow => follow.ftid));
        setFollowings(data);
        setFollowedProfiles(followedSet);
      } catch (error) {
        console.error('Error fetching followings:', error);
      }
    };
    fetchFollowings();
  }, []);

  const handleSubmit = async (e, profileid, profilename) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/follow";
      const payload = { ftid: profileid, ftname: profilename };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage("You followed this account");
      setFollowedProfiles(prev => new Set([...prev, profileid]));

      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleUnfollow = async (e, followId, profileid) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8080/api/follow/${followId}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccessMessage("Connection Remove Successfully");
      setFollowedProfiles(prev => {
        const updated = new Set(prev);
        updated.delete(profileid);
        return updated;
      });

      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 2000);
    }
  };


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/profile/${id}`); // Adjust the API route as per your setup
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          throw new Error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle error (e.g., show error message)
      }
    };

    fetchProfile();
  }, [id]);





  return (
    <>



      <div className="container mx-auto px-4 py-8 space-y-10 mt-20">
        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
            <span className="font-medium">Error!</span> {error}
          </div>
        )}

        {successMessage && (
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 " role="alert">
            <span className="font-medium">Success!</span> {successMessage}
          </div>
        )}

        <section className="space-y-6 ">

          {/* Grid layout with 3 cards per row */}
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
              <div className="mt-3 flex gap-3 justify-center">


                {followedProfiles.has(profile._id) ? (
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const follow = followings.find(f => f.ftid === profile._id);
                      handleUnfollow(e, follow?._id, profile._id);
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-[#D3D3D3] rounded-lg hover:bg-[#D3D3D3] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Following
                  </Link>
                ) : (
                  <Link
                    to="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit(e, profile._id, profile.name);
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#5F9EA0] rounded-lg hover:bg-[#5F9EA0] focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Follow
                  </Link>
                )}


                <Link
                  to={`mailto:${profile.email ? profile.email : "default@example.com"}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#5F9EA0] rounded-lg hover:bg-[#5F9EA0] focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Mail
                </Link>

              </div>
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
              <h3 className="text-lg font-semibold text-[#5F9EA0] mb-2">About</h3>
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
                  <p className="text-md  text-gray-700">{profile.sms ? profile.sms : "Sales/Marketing Strategy Desc"}</p>
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
                  <p className="text-md text-gray-700">{profile.mjc ? profile.mjc : "Major Competitors Desc"}</p>
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
                <h3 className="text-lg font-semibold mb-2  text-gray-700">Financial Description</h3>
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

export default ProfileView