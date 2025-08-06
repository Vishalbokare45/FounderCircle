import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import bg from './bg.mp4';
const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [followedProfiles, setFollowedProfiles] = useState(new Set());
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [followings, setFollowings] = useState([]);






  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/profile/complete');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching complete profiles:', error);
      }
    };
    fetchData();
  }, []);

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

  const handleSubmit = async (e, profileid, profilename,profileuimg) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/follow";
      const payload = { ftid: profileid, ftname: profilename, ftimg: profileuimg };

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

  return (
    <div className="bg-white text-gray-700">


      <div className=" lg:h-screen relative mt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70 z-10"></div>

        <div className="relative z-18 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-[#5F9EA0] md:text-5xl lg:text-6xl">
            Integration
          </h1>
          <p className="mb-4 text-lg font-medium text-gray-700 lg:text-2xl sm:px-16 lg:px-48">
            Our platform enables startups to create profiles, showcase services,
            and connect with potential clients and partners, setting them up
            for growth and success.
          </p>

        </div>
      </div>


      <div className="container mx-auto px-4 py-8 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl ">
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12 mb-8 shadow-md">
            <Link
              to="#"
              className="bg-[#e0f0f0] text-[#5F9EA0] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
            >
              <i className="bi bi-person-fill mr-1" /> Profile
            </Link>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-700 mb-2">
              Build and Share Your Startup Profile
            </h1>
            <p className="text-lg font-normal text-gray-500 mb-6">
              Share your startup's story, vision, and offerings with the world through
              a professional and appealing profile.
            </p>
            <Link
              to="#"
              className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-white rounded-lg bg-[#5F9EA0]"
            >
              Build and Share
            </Link>
          </div>

          {/* Services and Team Cards */}
          <div className="grid md:grid-cols-2 gap-8 ">
            {[
              {
                title: "Start with Startup Account",
                desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
              },
              {
                title: "Start with Business/User Account",
                desc: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers.",
              },
            ].map((box, i) => (
              <div key={i} className=" rounded-lg shadow-smbg-white border border-gray-200 shadow-md p-8 md:p-12">
                <h2 className="text-[#5F9EA0] text-3xl font-extrabold mb-2">{box.title}</h2>
                <p className="text-lg font-normal text-gray-500 mb-4">{box.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Category Section */}
      <div className="container mx-auto px-4 py-8 ">
        <h6 className="text-gray-500 text-center mt-6 mb-3 text-medium">
          Category
        </h6>
        <h5 className="text-center mb-6 text-2xl font-semibold">
          <span className="text-[#5F9EA0]">Startup Profile</span>{" "}
          <span className="text-gray-700">Category</span>
        </h5>

        <div className="flex flex-wrap justify-center gap-4 mt-10 text-gray-700">
          {[
            "Technology",
            "ECommerce",
            "Fintech",
            "HealthTech",
            "EdTech",
            "GreenTech",
            "FoodTech",
            "TravelTech",
          ].map((category) => (
            <div
              key={category}
              className="bg-gray-100 p-2 border border-gray-200 rounded-lg text-center font-medium hover:shadow-sm transition"
            >
              <Link
                to={`/completecat/${category}`}
                className="hover:text-[#5F9EA0] transition-colors duration-200"
              >
                {category}
              </Link>
            </div>
          ))}
        </div>


        <div className="container mx-auto px-4 py-8">
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

          {profiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {profiles.map(profile => (
                <div key={profile._id} className="w-full max-w-[300px] mx-auto">
                  <Link to={`/profileview/${profile._id}`} style={{ textDecoration: "none" }}>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                      <div className="flex flex-col items-center pb-10">
                        <img className="w-34 h-34 my-6 rounded-full shadow-lg" src={profile.uimg} alt="Profile" />
                        <h5 className="mb-1 text-xl font-medium text-gray-700">{profile.name}</h5>
                        <span className="text-sm text-gray-500">{profile.cat}</span>
                        <p className="text-sm text-gray-500 text-center px-4">{profile.bio?.slice(0, 50) || profile.bdesc}</p>
                        <div className="flex mt-4 md:mt-6 gap-2">
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
                                handleSubmit(e, profile._id, profile.name,profile.uimg);
                              }}
                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#5F9EA0] rounded-lg hover:bg-[#5F9EA0] focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                              Follow
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No complete profiles found.</p>
          )}




        </div>




      </div>




      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300 mt-12">
        <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-[#5F9EA0] mb-2">Integration</h3>
              <p className="text-gray-700">Connecting startups and IT professionals globally for innovation and growth.</p>
            </div>
            <div>
             
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#5F9EA0] mb-2">Contact Us</h4>
              <p className="text-gray-700">Email: integrationaspservice@gmail.com</p>
              <p className="text-gray-700">Phone: 7709740024</p>
              <p className="text-gray-700">Location: Mumbai(India)</p>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-300 pt-4">
            © {new Date().getFullYear()} Integration. All rights reserved.
          </div>
        </div>
      </footer>


    </div>
  )
}

export default Home