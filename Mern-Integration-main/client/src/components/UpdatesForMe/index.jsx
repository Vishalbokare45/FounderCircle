import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import NavbarS from "../Navbar";

export const UpdatesForMe = () => {
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
      <NavbarS />
      <div className="container mt-5">
        <div className="container my-5 px-4 pt-5">
        <div class="d-grid gap-2 d-md-block text-end " >
        <h6>
  <Link to="/updates" className="mx-2" style={{ textDecoration: "none", color: "#5F9EA0" }}>updates</Link>
  <Link to="/myupdates" style={{ textDecoration: "none", color: "#5F9EA0" }}>myUpdates</Link>
</h6>

          </div>
          {Array.isArray(filteredUpdates) && filteredUpdates.length > 0 ? (
            filteredUpdates.map((update) => (
              <div className="col-md-12" key={update._id}>
                <Link to={`/updateview/${update._id}`} className='mx-2' style={{ textDecoration: "none" }}>
                  <div className="card text-start">
                    <div className="card-header p-2">
                      <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        {update.name}
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        {update.desc.split(' ').slice(0, 50).join(' ') + (update.desc.split(' ').length > 50 ? '...' : '')}
                      </p>
                      <p className="card-text"><small className="text-body-secondary">{update.createdAt}</small></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No Updates Found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default UpdatesForMe;
