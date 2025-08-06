import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

const FilterProfile = () => {

   const { category } = useParams();  // Get category from URL params
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');
  
  
    const [followedProfiles, setFollowedProfiles] = useState(new Set());
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [followings, setFollowings] = useState([]);
  
    useEffect(() => {
      const fetchProfiles = async () => {
        try {
          setLoading(true);
          setError('');
  
          // If category is not defined, do not append it in the query URL
          const query = category ? `/${category}` : '';
  
          // Make the API request
          const response = await axios.get(`http://localhost:8080/api/profile/completecat${query}`);
          setProfiles(response.data);
        } catch (err) {
          // console.error('Error fetching profiles:', err);
          // setError(err.response?.data?.message || 'An error occurred while fetching profiles');
        } finally {
          setLoading(false);
        }
      };
  
      fetchProfiles();
    }, [category]);  // Refetch when the category changes
  
    // if (loading) return <p>Loading profiles...</p>;
    // if (error) return <p>{error}</p>;
  
  
  
  
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
  return (
    <>
     <div className="container mx-auto px-4 py-8 mt-18">
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
                                handleSubmit(e, profile._id, profile.name);
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
             <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
              <span className="font-medium"><p>No profiles found for this category.</p></span> 
            </div>
            
          )}




        </div>

    </>
  )
}

export default FilterProfile