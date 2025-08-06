import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

const UpdateForMe = () => {

  const [followings, setFollowings] = useState([]);
  const [updates, setUpdates] = useState([]);

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
        setFollowings(data.map(following => following.ftname)); // Store ftname in an array
      } catch (error) {
        console.error('Error fetching followings:', error);
      }
    };

    fetchFollowings();
  }, []);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/updates');
        setUpdates(response.data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  // Filter updates based on followings' names
  const filteredUpdates = updates.filter(update =>
    followings.includes(update.name) // Assuming update.name corresponds to ftname
  );
  return (
    <>


      <div className="cotainer mx-auto px-4 py-8 mt-20">
        <div className='text-right'>



          <Link to="/update" className="mx-2 py-2 px-3 text-gray-700rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0] md:p-0">Update</Link>
          <Link to="/myupdate" className="mx-2 py-2 px-3 text-gray-700rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0] md:p-0">MyUpate</Link>

        </div>


      </div>


      <div className="cotainer mx-auto px-4 py-6">

        {Array.isArray(updates) && updates.length > 0 ? (
         filteredUpdates.map((update) => (
            <div key={update._id} className='mb-6 '>
              <Link to={`/updateview/${update._id}`}>
                <div class="w-full max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md">
                  <div class="flex items-start">
                    <div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                      <img
                        src={update.userimg || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"}
                        alt="User"
                        className="w-12 h-12 rounded-full object-cover"
                      />

                    </div>

                    <div class="ml-3 flex-1">
                      <h4 class="text-base font-semibold text-gray-700 "> {update.name}</h4>
                      <span class="text-sm text-gray-500  mb-3 mt-0">Posted on {moment(update.createdAt).format('MMM D, YYYY, h:mm A')}</span>
                      <p class="text-md text-gray-600 mb-2">
                        {update.desc.split(' ').slice(0, 50).join(' ') + (update.desc.split(' ').length > 50 ? '...' : '')}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

          ))
        ) : (


          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
            <span className="font-medium">  <p>No Updates Found.</p></span>
          </div>

        )}

      </div>


    </>
  )
}

export default UpdateForMe